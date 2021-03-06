﻿// 
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.
// 
using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using DotNetNuke.Common;

namespace DotNetNuke.Web.Api
{
    public abstract class AuthFilterBase : IAuthorizationFilter
    {
        /// <summary>
        /// Tests if the request passes the authorization requirements
        /// </summary>
        /// <param name="context">The auth filter context</param>
        /// <returns>True when authorization is succesful</returns>
        public abstract bool IsAuthorized(AuthFilterContext context);

        /// <summary>
        /// Co-ordinates check of authorization and handles Auth failure.  Should rarely be overridden.
        /// </summary>
        /// <param name="actionContext"></param>
        protected virtual void OnAuthorization(HttpActionContext actionContext)
        {
            Requires.NotNull("actionContext", actionContext);

            const string failureMessage = "Authorization has been denied for this request.";
            var authFilterContext = new AuthFilterContext(actionContext, failureMessage);
            if (!IsAuthorized(authFilterContext))
            {
                authFilterContext.HandleUnauthorizedRequest();
            }
        }

        /// <summary>
        /// Gets or sets a value indicating whether more than one instance of the indicated attribute can be specified for a single program element.
        /// </summary>
        public abstract bool AllowMultiple { get; }

        Task<HttpResponseMessage> IAuthorizationFilter.ExecuteAuthorizationFilterAsync(HttpActionContext actionContext, CancellationToken cancellationToken, Func<Task<HttpResponseMessage>> continuation)
        {
            Requires.NotNull("actionContext", actionContext);
            Requires.NotNull("continuation", continuation);

            try
            {
                OnAuthorization(actionContext);
            }
            catch (Exception e)
            {
                var tcs = new TaskCompletionSource<HttpResponseMessage>();
                tcs.SetException(e);
                return tcs.Task;
            }

            if (actionContext.Response != null)
            {
                var tcs = new TaskCompletionSource<HttpResponseMessage>();
                tcs.SetResult(actionContext.Response);
                return tcs.Task;
            }
            
            return continuation();
        }
    }
}
