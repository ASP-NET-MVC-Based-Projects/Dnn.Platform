import React, {Component, PropTypes } from "react";
import "./style.less";
import ReactTooltip from "react-tooltip";


class TextOverflowWrapper extends Component {
    constructor() {
        super();
        this.uniqueId = "overflowTooltip-" + (Date.now() * Math.random());
        this.state = {
            itemWidth: 0
        };
    }
    getStyle() {
        const {props} = this;
        return Object.assign({ maxWidth: props.maxWidth }, props.style);
    }
    
    componentDidMount() {
        //Set time out to ensure calculation happens after render
        setTimeout(() => {
            let input = this.refs.overflowTooltip;
            if (typeof input !== "undefined" && input.getBoundingClientRect()) {
                let inputRect = input.getBoundingClientRect();
                this.setState({
                    itemWidth: inputRect.width
                });
            } else { 
                this.setState({
                    itemWidth: this.props.maxWidth
                });
            }
        }, 500);
    }
    render() {
        const {props, state} = this;
        return (
            <div
                className={"dnn-text-overflow-wrapper" + (props.className ? " " + props.className : "") }
                style={this.getStyle() }
                ref="overflowTooltip"
                data-tip
                data-for={this.uniqueId}>
                {props.text}
                {state.itemWidth >= props.maxWidth && <ReactTooltip
                    id={this.uniqueId}
                    effect={props.effect}
                    place={props.place}
                    type={props.type}
                    class={"overflow-tooltip" + (props.tooltipClassName ? " " + props.tooltipClassName : "") }
                    multiline={props.multiline}>
                    {props.text}
                </ReactTooltip>
                }
            </div>
        );
    }
}

TextOverflowWrapper.propTypes = {
    text: PropTypes.string,
    maxWidth: PropTypes.number,
    style: PropTypes.object,
    effect: PropTypes.string,
    type: PropTypes.string,
    place: PropTypes.string,
    tooltipClassName: PropTypes.string,
    multiline: PropTypes.bool
};

TextOverflowWrapper.defaultProps = {
    maxWidth: 200,
    effect: "solid",
    place: "top",
    type: "dark",
    multiline: true
};

export default TextOverflowWrapper;