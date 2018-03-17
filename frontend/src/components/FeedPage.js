import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'

import { getPosts } from '../utils/api'

class FeedPage extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    }


    componentWillMount() {
        if (this.props.username === null) {
            this.props.history.push("/login")
        } else {
           getPosts().then(data => console.log(data)) 
        }
    }

    render() {
        return (
            <div>
                <HeaderActionBar username={this.props.username} history={this.props.history} />
                This is FeedPage component.
            </div>
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
        // propsName: () => dispatch(actionCreator())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
