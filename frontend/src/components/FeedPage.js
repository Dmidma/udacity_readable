import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import PostCard from './PostCard'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import { getPosts } from '../utils/api'

import { addPosts } from '../actions/postsActions'

import { addCategories } from '../actions/categoriesActions'


class FeedPage extends Component {
    
    state = {
        isDrawerOpen: false
    }

    openDrawer = () => this.setState({ isDrawerOpen: true })
    closeDrawer = () => this.setState({ isDrawerOpen: false })


    componentDidMount() {
        if (this.props.username === null) {
            this.props.history.push("/login")
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
                <HeaderActionBar openDrawer={this.openDrawer.bind(this)} history={this.props.history}   />
                <Drawer 
                    open={this.state.isDrawerOpen} >
                    <AppBar 
                        title="Categories" 
                        iconElementLeft={<IconButton><NavigationClose onClick={this.closeDrawer} /></IconButton>}
            />
                    <MenuItem>Redux</MenuItem>
                    <MenuItem>React</MenuItem>
                </Drawer>
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
       fetchCategories: () => dispatch(addCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
