import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import PostCard from './PostCard'

import { getPosts } from '../utils/api'

import { addPosts } from '../actions/postsActions'

import { addCategories } from '../actions/categoriesActions'


class FeedPage extends Component {


    componentWillMount() {
        if (this.props.username === null) {
            this.props.history.push("/login")
        }
    }

    componentDidMount() {
        getPosts().then(data => {
            this.props.fetchPosts(data)
        }) 
        this.props.fetchCategories()
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
                this.props.postsIds.map(id => (<PostCard key={id} postId={id} />))
            }
            </div>
        )
    }
}

function mapStateToProps ({ loggedUser, posts }) {
    return {
        username: loggedUser.name,
        postsIds: posts.ids
    }
}

function mapDispatchToProps (dispatch) {
    return {
       fetchPosts: (posts) => dispatch(addPosts(posts)),
       fetchCategories: () => dispatch(addCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
