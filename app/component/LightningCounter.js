import React from 'react'

/**
 * 组件的状态机制
 *
 * 使用方式：
 *
 * import LightningCounterDisplay from "./components/LightningCounter";
 *
 * <LightningCounterDisplay/>
 */

class LightningCounter extends React.Component {

    constructor(){
        super();

        this.state = {
            strikes: 0
        };

        this.timerTrick = this.timerTrick.bind(this);
    }

    timerTrick(){
        this.setState({
            strikes: this.state.strikes + 100
        });
    }

    componentDidMount(){
        setInterval(this.timerTrick, 1000);
    }

    render() {

        let counterStyle = {
            color: "#66ffff",
            fontSize: 50
        };

        let count = this.state.strikes.toLocaleString();

        return (
            <div>
                <h1 style={counterStyle}>{count}</h1>
            </div>
        );
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        let commonStyle = {
            margin: 0,
            padding: 0,
        };

        let divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            color: "#999",
            fontFamily: "sans-serif",
            borderRadius: 10,
        };

        let textStyle = {
            emphasis: {
                fontSize: 38,
                // ...commonStyle
            },

            smallEmphasis: {
                // ...commonStyle
            },

            small: {
                fontSize: 17,
                opacity: 0.5,
                // ...commonStyle
            }
        };

        return (
            <div style={divStyle}>
                <LightningCounter/>
                <h2 style={textStyle.smallEmphasis}>
                    雷霆打击
                </h2>
                <h2 style={textStyle.emphasis}>
                    我们的地球
                </h2>
                <p style={textStyle.small}>
                    （自从你加载这个组件之后）
                </p>
            </div>
        );
    }
}

export default LightningCounterDisplay;