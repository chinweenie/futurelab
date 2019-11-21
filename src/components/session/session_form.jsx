import React, { Component } from 'react'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputEmail = this.inputEmail.bind(this);
        this.checkEmailInput = this.checkEmailInput.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    inputEmail(event) {
        event.preventDefault();
        event.target.innerHTML = "admin@futurelab.com";
        const passwordInput = document.getElementById('password-input');
        passwordInput.innerHTML = '********';
    }

    checkEmailInput(event){
        event.preventDefault();
        const emailInput = document.getElementById('email-input');
        if (emailInput.innerHTML === ""){
            emailInput.classList.toggle("blue");
            setTimeout(() => {
                emailInput.classList.toggle("blue");
            }, 300);
        }
    }

    checkLogin(event){
        event.preventDefault();
        const emailInput = document.getElementById('email-input');
        if (emailInput.innerHTML !== ""){
            this.props.history.push('/mentors/index');
        }
    }

    render() {
        return (
            <div className="session-form" onClick={this.checkEmailInput}>
                <div className="logo">
                    <img src="image.png" alt="" />
                </div>
                <div className="form">

                    <div className="header">
                        Sign in
                    </div>

                    <div className="email">
                        <p>Email</p>
                        <div id="email-input" onClick={this.inputEmail} />
                    </div>

                    <div className="password">
                        <div className="password-show">
                            <span>Password</span>
                            <div>
                                <i className="fas fa-eye"></i>
                                <span>Show</span>
                            </div>

                        </div>
                        <div type="password" id="password-input"/>
                    </div>

                    <div className="button" onClick={this.checkLogin}>
                        LOGIN
                        <i className="fas fa-arrow-right"></i>
                    </div>

                    <div className="forgot-password">
                        Forgot password
                    </div>
                </div>
                <footer>
                    <img src="footer.png" alt="" />
                </footer>
            </div>
        )
    }
}
