import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/index.css';
import Colorizer from "./component/colorizer";

class IndexComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>hello world!!!</h1>
                <Colorizer/>
            </div>
        )
    }
}
var oBox = document.getElementById("box");
ReactDOM.render(<IndexComponent/>,oBox)