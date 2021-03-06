import { Component } from 'react'

import SortBoxTemplate from './SortBoxTemplate'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class SortBox extends Component {

    static propTypes = {
        sort: PropTypes.string.isRequired,
        baseUrl: PropTypes.string.isRequired,
        isInComments: PropTypes.bool
    } 

    state = {
        sort: 1,
    }
        
    componentWillReceiveProps(nextProps) {
        this.setState({ sort: this.sortArray.indexOf(nextProps.sort) + 1 })
    }


    componentDidMount() {
        this.setState({ sort: this.sortArray.indexOf(this.props.sort) + 1 })
    }

    sortArray = ["best", "worst", "newest", "oldest"]

    handleSortChanging = (e, i, v) => {
        if (this.props.isInComments) {
            this.props.history.push(`${this.props.baseUrl}?sort=${this.sortArray[v - 1]}`)
        } else {
            this.props.history.push(`${this.props.baseUrl}/${this.sortArray[v - 1]}`)
            // to rerender the whole page
            window.location.reload()
        }

    }


    render() {
        return (
            SortBoxTemplate(this.handleSortChanging, this.state.sort, this.props.isInComments)
        )
    }
}

export default withRouter(SortBox)
