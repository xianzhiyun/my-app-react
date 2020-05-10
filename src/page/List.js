import React, { Component } from "react";


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }
    render() {
        return (
            <div>
                <h1>列表页{this.state.id}</h1>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.setState({
            id: this.props.match.params.id
        })
    }
}



export default List
