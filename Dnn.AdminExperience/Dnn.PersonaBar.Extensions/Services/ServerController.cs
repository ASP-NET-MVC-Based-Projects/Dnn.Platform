﻿// 
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.
// 
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Dnn.PersonaBar.Library;
using Dnn.PersonaBar.Library.Attributes;
using DotNetNuke.Common;
using DotNetNuke.Abstractions;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Instrumentation;
using DotNetNuke.Services.Localization;
using DotNetNuke.Services.Log.EventLog;
using DotNetNuke.Web.Api;
using DotNetNuke.Web.Client.ClientResourceManagement;

namespace Dnn.PersonaBar.Servers.Services
{
    [MenuPermission(Scope = ServiceScope.Host)]
    public class ServerController : PersonaBarApiController
    {
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(ServerController));
        protected INavigationManager NavigationManager { get; }
        internal static string LocalResourceFile => Path.Combine("~/DesktopModules/admin/Dnn.PersonaBar/Modules/Dnn.Servers/App_LocalResources/Servers.resx");

        public ServerController(INavigationManager navigationManager)
        {
            NavigationManager = navigationManager;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage RestartApplication()
        {
            try
            {
                var log = new LogInfo { BypassBuffering = true, LogTypeKey = EventLogController.EventLogType.HOST_ALERT.ToString() };
                log.AddProperty("Message", Localization.GetString("UserRestart", LocalResourceFile));
                LogController.Instance.AddLog(log);
                Config.Touch();
                return Request.CreateResponse(HttpStatusCode.OK, new {url = NavigationManager.NavigateURL()});
            }
            catch (Exception exc)
            {
                Logger.Error(exc);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, exc);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage ClearCache()
        {
            try
            {
                DataCache.ClearCache();
                ClientResourceManager.ClearCache();
                return Request.CreateResponse(HttpStatusCode.OK, new {url = NavigationManager.NavigateURL() });
            }
            catch (Exception exc)
            {
                Logger.Error(exc);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, exc);
            }
        }
    }
}
