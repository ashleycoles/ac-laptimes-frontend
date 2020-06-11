import React from "react";
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            redirect: false
        }
    }

    handleEmailChange = (event) => {
        event.preventDefault();
        this.setState({email: event.target.value});
    };

    handlePasswordChange = (event) => {
        event.preventDefault();
        this.setState({password: event.target.value});
    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.loginRequest()
    };

    loginRequest = () => {
        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
        })
            .then(result => result.json())
            .then(data => {
                if (data.status === 'success') {
                    localStorage.setItem('uid', data.data);
                    this.setState({redirect: true});
                } else {
                    this.setState({error: 'Incorrect email or password, please try again.'})
                }
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            console.log('redirect');
            return <Redirect to='/' />
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderRedirect()}
                <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                <input type="submit" value="login" />
                {this.state.error}
            </form>
        )
    }
}

export default Login;