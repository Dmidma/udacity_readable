import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import PostCard from './PostCard'

import { getPosts } from '../utils/api'

import { addPosts } from '../actions/postsActions'

class FeedPage extends Component {


    componentWillMount() {
        if (this.props.username === null) {
            this.props.history.push("/login")
        }
    }

    componentDidMount() {
        getPosts().then(data => {
            this.props.addPosts(data)
        }) 
    }

    render() {
        // removing the below line will result in props.username warning
        // TODO: Check how to stop rendering in componentWillMount
        if (this.props.username === null) return null
        return (
            <div>
                <HeaderActionBar username={this.props.username} history={this.props.history} />
                <br/>
            {
                this.props.posts.ids.map(id => (<PostCard key={id} post={this.props.posts.id[id]} />))
            }
            </div>
        )
    }
}

function mapStateToProps ({ loggedUser, posts }) {
    return {
        username: loggedUser.name,
        posts: posts
    }
}

function mapDispatchToProps (dispatch) {
    return {
       addPosts: (posts) => dispatch(addPosts(posts))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
