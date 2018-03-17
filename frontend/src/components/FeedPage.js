import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import PostCard from './PostCard'

import { getPosts } from '../utils/api'

import { addPosts } from '../actions/postsActions'

class FeedPage extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    }


    componentWillMount() {
        if (this.props.username === null) {
            this.props.history.push("/login")
        } else {
            getPosts().then(data => {
                this.props.addPosts(data)
            }) 
        }
    }

    render() {
        return (
            <div>
                <HeaderActionBar username={this.props.username} history={this.props.history} />
                <br/>
                <PostCard />

                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />

                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
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
