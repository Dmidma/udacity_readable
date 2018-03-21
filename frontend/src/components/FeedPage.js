import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import PostCard from './PostCard'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import { getPosts } from '../utils/api'

import { addPosts, setSort } from '../actions/postsActions'

import { addCategories } from '../actions/categoriesActions'


class FeedPage extends Component {

    sortArray = ["best", "worst", "new", "old"]
    state = {
        sort: 1
    }
    
    componentDidMount() {
        if (this.props.username === null) {
            this.props.history.push("/")
        } else {
            let sort = this.props.match.params.sort
            if (sort === undefined) sort = "best"
            this.setState({ sort: this.sortArray.indexOf(sort) + 1 })
            if (sort !== "best") this.props.setPostSorting(sort)
            getPosts().then(data => {
                this.props.fetchPosts(data)
            }) 
            this.props.fetchCategories()
        }
    }
    
    handleSortChanging = (e, i, v) => {
        this.props.history.push(`/feed/${this.sortArray[v - 1]}`)
        // to rerender the whole page
        window.location.reload()
    }


    render() {
        if (this.props.username === null) return null
        return (
            <div>
                <HeaderActionBar />
                <SelectField
                  className="sort-box"
                  floatingLabelText="Sort by:"
                  value={this.state.sort}
                  onChange={this.handleSortChanging}
                >
                  <MenuItem value={1} primaryText="best" />
                  <MenuItem value={2} primaryText="worst" />
                  <MenuItem value={3} primaryText="new" />
                  <MenuItem value={4} primaryText="old" />
                </SelectField>
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
