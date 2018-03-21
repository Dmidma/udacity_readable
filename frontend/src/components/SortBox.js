import { Component } from 'react'

// FIXME: You may need to check this path
import SortBoxTemplate from '../templates/SortBoxTemplate'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class SortBox extends Component {

    static propTypes = {
        sort: PropTypes.string.isRequired
    } 


    sortArray = ["best", "worst", "newest", "oldest"]
    state = {
        sort: 1
    }
        
    componentWillReceiveProps(nextProps) {
        this.setState({ sort: this.sortArray.indexOf(this.props.sort) + 1 })
    }


    handleSortChanging = (e, i, v) => {
        this.props.history.push(`/feed/${this.sortArray[v - 1]}`)
        // to rerender the whole page
        window.location.reload()
    }


    render() {
        return (
            SortBoxTemplate(this.handleSortChanging, this.state.sort)
        )
    }
}

export default withRouter(SortBox)
