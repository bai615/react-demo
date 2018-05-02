import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/index.css';
import Colorizer from "./component/colorizer";
import CounterParent from "./component/counter";

class IndexComponent extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            color: '#f00'
        };
        console.log(this.state);
    }

    componentWillMount(){
        console.log('componentWillMount');
        return;
    }

    componentDidMount(){
        console.log('componentDidMount');
        return
    }

    render(){
        console.log('render');
        return (
            <div>
                <h1>hello world!!!</h1>
                <Colorizer/>
            </div>
        )
    }
}

IndexComponent.defaultProps = {
    barColor: '#2f9842'
};

var oBox = document.getElementById("box");
ReactDOM.render(<CounterParent/>,oBox)