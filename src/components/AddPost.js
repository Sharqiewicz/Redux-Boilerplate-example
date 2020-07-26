import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postTypes';

class AddPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({
                ...this.state,
                [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const post = {
            title: this.state.title,
            content: this.state.content
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div className="addpost__container">
                <h3>Add Post</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="addpost__field">
                        <label htmlFor="title">Title: </label><br/>
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    </div>

                    <div className="addpost__field" >
                        <label htmlFor="content">Content: </label><br/>
                        <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea>
                    </div>

                    <br/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

AddPost.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default  connect(null, { createPost })(AddPost)
