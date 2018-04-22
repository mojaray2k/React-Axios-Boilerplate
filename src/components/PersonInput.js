import React, { Component } from 'react'
import axios from 'axios'

class PersonInput extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        }
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: {
                user
            }
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default PersonInput;