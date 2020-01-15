import React, { Component } from 'react'
import { render } from 'react-dom'
import UserList from './UserList'
import User from './User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false
        }
        this.getUsers = this.getUsers.bind(this)
    }
    getUsers() {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                    isLoaded: true
                })
            })
    }
    componentDidMount() {
        this.getUsers()
    }
    render() {
        const { data, isLoaded } = this.state
        return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route path="/" exact render={() => <UserList {...this.state} />} />
                        <Route path="/user/:id" component={User} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'))