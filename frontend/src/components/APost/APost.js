import { Component } from 'react'

import APostTemplate from './APostTemplate'

import { getPostById } from '../../utils/api'
import { connect } from 'react-redux'
import { deletePost, editPost } from '../../actions/postsActions'
import { parse } from 'qs'

class APost extends Component {
    constructor(props) {
        super(props)
        
        this.confirmDelete = this.confirmDelete.bind(this)
        this.confirmEdit = this.confirmEdit.bind(this)
        this.submitPostEdit = this.submitPostEdit.bind(this)
        this.toggleEditDialog = this.toggleEditDialog.bind(this)
    }

    state = {
        post: {},
        isPostedByLoggedUser: false,
        isEditDialogOpen: false,
        sort: "best"
    }

    componentDidMount() {
        if (this.props.username === null) {
            this.props.history.push("/")
            return
        }
        this.fetchPost(this.props.match.params.post_id)
        this.checkSortQuery(this.props.history.location.search)
    }

    componentWillReceiveProps(nextProps) {
        this.checkSortQuery(nextProps.history.location.search)
    }

    
    toggleEditDialog = () => this.setState((currentState) => ({ isEditDialogOpen: !currentState.isEditDialogOpen }))


    fetchPost = (postId) => {
        getPostById(postId).then(post => {
            if (post.author === this.props.username) {
                this.setState({ isPostedByLoggedUser: true })
            }
            if (post.category !== this.props.match.params.category) {
                this.props.history.replace("/pagenotfound")
            } else {
                this.setState({ post })
            }
        })
    }


    checkSortQuery = (searchQuery) => {
        const queryObj = parse(
            searchQuery, 
            { ignoreQueryPrefix: true }
        )
        if (queryObj.sort !== undefined) {
            const sortSet = new Set(["best", "worst", "newest", "oldest"])
            if (sortSet.has(queryObj.sort)) {
                this.setState({ sort: queryObj.sort })
            } else {
                this.props.history.replace(this.props.history.location.pathname)
            }
        }
    }

    confirmDelete = () => {
        this.props.deletePost(this.state.post.id)
        this.props.history.push("/feed")
    }

    confirmEdit = () => {
        this.toggleEditDialog()
    }
 
    submitPostEdit = (title, body) => {
        this.props.updatePost(this.state.post.id, title, body)
        this.setState((currentState) => ({ 
            post: {
                ...currentState.post,
                id: this.state.post.id,
                title,
                body
            }
        }))
    }

    render() {
        const { sort, post, isPostedByLoggedUser } = this.state
        if (post["id"] === undefined) return null
        return (
            APostTemplate(isPostedByLoggedUser, post, 
                this.confirmDelete, this.confirmEdit,
                this.state.isEditDialogOpen, this.toggleEditDialog,
                this.submitPostEdit, {title: post.title, content: post.body},
                sort
            )
        )
    }
}

function mapStateToProps ({ loggedUser }) {
    return {
        username: loggedUser.name
    }
}

function mapDispatchToProps (dispatch) {
    return {
        deletePost: (postId) => dispatch(deletePost(postId)),
        updatePost: (postId, title, body) => dispatch(editPost(postId, title, body))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(APost)
