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

    componentWillMount(){
        console.log('componentWillMount');
        return;
    }

    componentDidMount(){
        console.log('componentDidMount');
        return
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

    shouldComponentUpdate(newProps, newState){
        console.log('shouldComponentUpdate: should component update ? ');
        console.log(newProps);
        console.log(newState);
        if(newState.count < 5){
            console.log('Component should update');
            return true;
        }else {
            console.log('Component should not update');

            // 从DOM拿掉组件
            // ReactDOM.unmountComponentAtNode(destination);
            return false;
        }
    }

    componentWillUpdate(){
        // 如果 shouldComponentUpdate 返回 true ,则调用此函数
        console.log('componentWillUpdate: component is about update');
        return;
    }

    componentDidUpdate(){
        // 调用 render 之后调用此函数
       console.log('componentDidUpdate: component is just updated');
       return;
    }

    componentWillUnmount(){
        // 组件消亡时，调用此函数
        console.log('componentWillUnmount: component is removed from dom');
        return;
    }

    componentWillReceiveProps(newProps){
        console.log('componentWilReceiveProps: counter receive new props');
        return;
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        return;
    }

    getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
    }

    render(){
        console.log('render');
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