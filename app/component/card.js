import React from "react";

/**
 * 测试复合式组件
 *
 * 使用方式：
 *
 * import Card from "./components/card";
 *
 * <Card color="#FF6663"/>
 * <Card color="#FFA737"/>
 */
class Square extends React.Component{
    render(){
        let squareStyle = {
            height: 150,
            backgroundColor: this.props.color,
        };
        return (
            <div style={squareStyle}>
            </div>
        );
    }
}

class Label extends React.Component{
    render(){
        let labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0,
        };

        return (
            <div style={labelStyle}>
                {this.props.color}
            </div>
        );
    }
}
class Card extends React.Component{

    render(){
        let cardStyle = {
            height: 200,
            width: 150,
            backgroundColor: "#FFF",
            webkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)",
        };

        return (
            <div style={cardStyle}>
                <Square color={this.props.color}/>
                <Label color={this.props.color}/>
            </div>
        );
    }
}

export default Card;