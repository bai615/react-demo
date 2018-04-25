import React from 'react'
import './colorizer.less'

class Colorizer extends React.Component {

    constructor() {
        super();

        this.state = {
            color: '',
            bgColor: '',
        };

        this.colorValue = this.colorValue.bind(this);
        this.setNewColor = this.setNewColor.bind(this);
    }

    colorValue(e) {
        console.log(e.target.value);

        this.setState({
            color: e.target.value
        });
    }

    setNewColor(e) {
        this.setState({
            bgColor: this.state.color
        });

        // 清空文本框内容
        this._input.value = '';
        // 输入框获取焦点
        this._input.focus();

        // 表单不用发送后台服务器
        e.preventDefault();
    }

    render() {
        let colorSquare = {
            boxShadow: "0px 0px 25px 0px #333",
            width: 242,
            height: 242,
            marginBottom: 15,
        };

        let squareStyle = {
            backgroundColor: this.state.bgColor
        };

        let self = this;

        return (
            <div className="colorArea">
                <div style={squareStyle} className="colorSquare"></div>
                <form onSubmit={this.setNewColor}>
                    <input ref={
                        function (el) {
                            self._input = el;
                        }
                    }
                           onChange={this.colorValue}
                           placeholder="Please enter a color"/>
                    <button>Show</button>
                </form>
            </div>
        );
    }
}

export default Colorizer;