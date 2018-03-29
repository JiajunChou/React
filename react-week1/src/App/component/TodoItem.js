import React, {Component} from 'react';

class TodoItem extends Component{
    render(){
        return(
            <li onClick={this.props.handleItemClick}>{this.props.text}</li>
        )
    }
}

export default TodoItem;