import React from 'react';

class Comment extends React.Component{
    render(props){
        return <p>{this.props.name}</p>;
    }
}

export default Comment;