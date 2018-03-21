import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import PostCard from './PostCard'

import { getPosts } from '../utils/api'

import { addPosts, setSort } from '../actions/postsActions'

import { addCategories } from '../actions/categoriesActions'


class FeedPage extends Component {
    
    componentDidMount() {
        
        const sort = this.props.match.params.sort
        if (sort !== undefined && sort !== "best")
            this.props.setPostSorting(sort)

        if (this.props.username === null) {
            this.props.history.push("/")
        } else {
            getPosts().then(data => {
                this.props.fetchPosts(data)
            }) 
            this.props.fetchCategories()
        }
    }


    render() {
        if (this.props.username === null) return null
        return (
            <div>
                <HeaderActionBar />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    { this.props.postsIds.map(id => (<PostCard key={id} postId={id} />)) }
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
       setPostSorting: (sort) => dispatch(setSort(sort)),
       fetchCategories: () => dispatch(addCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
