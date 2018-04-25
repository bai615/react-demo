import React from 'react'

/**
 * 组件可以结合逻辑
 *
 * 使用方式：
 *
 * import ShowCircle from "./components/circle";
 *
 * <ShowCircle/>
 */

class Circle extends React.Component {
    render(){
        let circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100
        }
        return (
            <div style={circleStyle}></div>
        );
    }
}

class ShowCircle extends React.Component{

    showCircle(){
        let colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

        let renderData = [];

        for(let i = 0; i < colors.length; i++){
            let ran = Math.floor(Math.random() * colors.length);

            renderData.push(<Circle key={i + colors[ran]} bgColor={colors[ran]}/>);
        }

        return renderData;
    }
    render(){
        return (
            <div>
                {this.showCircle()}
            </div>
        )
    }
}

export default ShowCircle;