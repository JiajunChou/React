import React from 'react';

class TodoItem extends React.Component {

    handleClick = () => {
        this.props.onItemClick(this.props.index);
    }

    render(){
        return (
            <li onClick = {this.handleClick}>{this.props.text}</li>
        );
    }
}

export default TodoItem;