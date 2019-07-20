import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Postsform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value })
    } 

    handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        // call action
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea name="body" value={this.state.body} onChange={this.handleOnChange} />
                        <br />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

Postsform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postsform);