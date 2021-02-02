import React, {Component} from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component {
    state = {comment: ''};

 
    handleChange = (event) => {
        this.setState({comment : event.target.value})   
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment : ''})
    }

    render () {
       
        
        return (
            <div>
            <form onSubmit = {this.handleSubmit}>
                <h4>add a comment</h4>
                <textarea onChange = {this.handleChange} value= {this.state.comment}/>
                <div>
                    <button>submit comment</button>
                </div>
            </form>
            
            <button className='fetch-comments' onClick={this.props.fetchComments}>fetch comments</button>
            </div>
            
        )
    }
}


export default connect(null, actions)(CommentBox);

// passed null as the first argument of connect because we dont have mapStateToProps


// we didn't call the this.props.fetchComments because we wanna give this button callback to call it at some point time in future. 