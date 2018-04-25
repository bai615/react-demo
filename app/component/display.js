import React from "react";

/**
 * 测试多层组件属性传递
 *
 * 使用方式：
 *
 * import Shirt from "./components/display";
 *
 * <Shirt color="deepblue" num="3.14" size="medium"/>
 */

class Display extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}

class Label extends React.Component{
    render(){
        return (
            <div>
                <Display {...this.props}/>
            </div>
        )
    }
}

class Shirt extends React.Component{
    render(){
        return (
            <div>
                <Label {...this.props}/>
            </div>
        );
    }
}

export default Shirt;
