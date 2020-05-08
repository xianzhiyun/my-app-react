import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
class AddItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this)
        this.state = {
            name: 'zhangle'
        }
    }
    // 第一次不会被执行
    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(`%c child-component`, 'font-size: 16px; font-weight: bold;color:red');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props.content;
    }

    render() {
        return (
            <li onClick={this.deleteItem}>{this.props.content}</li>
        );
    }

    deleteItem() {
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
AddItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number
}
AddItem.defaultProps = {}

export default AddItem;
