import React, { Component } from 'react';
import TextShow from './TextShow'

class TextInput extends Component {

    constructor(props){
        super(props);
        this.state = {text: ""};
    }
    handleTextChange = (e) => {
        this.setState({text: e.target.value});
    };

    render(){
        return (
            <div>            
                <input type="text"
                 value = {this.state.Text}
                 placeholder={this.props.initText}
                 onChange = {this.handleTextChange}
                 />
                <TextShow text={this.state.text} />
            </div>
        )
    };

}

export default TextInput;