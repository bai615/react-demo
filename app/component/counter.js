import React from 'react'

/**
 * 键盘事件处理
 *
 * 使用方式：
 *
 * import CounterParent from "./components/counter";
 *
 * <CounterParent/>
 */
class Counter extends React.Component{
    render(){

        let textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        )
    }
}

class CounterParent extends React.Component{
    constructor(){
        super();

        this.state = {
            'count': 0
        };

        this.increase = this.increase.bind(this);
    }

    increase(e){
        // SyntheticEvent
        console.log(e);

        let currentCount = this.state.count;
        if(e.shiftKey == true){
            // 如果 Shift 按键按下， 1 次增加 10
            currentCount += 10;
        }else{
            currentCount += 1;
        }
        this.setState({
            count: currentCount
        });
    }

    render(){
        let backgroundStyle = {
            padding: 50,
            backgroundColor: "#ffc53a",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        let buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineWeight: "3px"
        };

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                <button style={buttonStyle} onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default CounterParent;