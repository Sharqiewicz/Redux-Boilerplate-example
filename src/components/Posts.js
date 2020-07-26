import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postTypes'
import PropTypes from 'prop-types';

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postList = this.props.posts.map( post => {
            return(
                <div key={post.id} className="post__container">
                    <h5>{post.title}</h5>
                    <p>{post.content || post.body }</p>
                </div>
            )
        })
        return (
            <div>
                <h3>Posts</h3>
                {postList}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})


export default connect ( mapStateToProps , { fetchPosts })(Posts);