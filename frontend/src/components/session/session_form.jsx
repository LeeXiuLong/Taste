import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }
    
    demoUser(e) {
        e.preventDefault();
        const demo = Object.assign({
            name: "Keanu Reeves",
            email: "keanu@reeves.com",
            password: "johnwick911",
            password2: "johnwick911"
        });
        this.setState(demo);
        this.props.login(demo)
            .then(this.props.closeModal());
    }

    render() {
        const { formType } = this.props;

        // let errorsArray = this.props.errors;
        // if (this.props.errors.session) {
        //     errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        // };

        const signupModal = (
            <div className="signup-form">
                <form onSubmit={this.handleSubmit} key={this.state.id}>
                    <label>
                        <input
                            className="signup-inputs"
                            type="text"
                            placeholder=" full name"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>
                    <br />
                    <label>
                        <input
                            className="signup-inputs"
                            type="text"
                            placeholder=" email address"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <br/>
                    <label>
                        <input
                            className="signup-inputs"
                            type="password"
                            placeholder=" password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="signup-inputs"
                            type="password"
                            placeholder=" confirm password"
                            value={this.state.password2}
                            onChange={this.update('password2')} />
                    </label>
                    {/* {errorsArray} */}
                    <br></br>
                    <button type="submit" className="continue-button">continue</button>
                    <button className="demo-button" onClick={this.demoUser}>demo user</button>
                </form>
                    <br></br>
            </div>
        )

        const loginModal = (
            <div className="login-form">
                <form onSubmit={this.handleSubmit} key={this.state.id}>
                    <label>
                        <input
                            className="login-inputs"
                            type="text"
                            placeholder=" full name"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>
                    <br />
                    <label>
                        <input
                            className="login-inputs"
                            type="text"
                            placeholder=" email address"
                            // value="Your email address"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="login-inputs"
                            type="password"
                            placeholder=" password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="login-inputs"
                            type="password"
                            placeholder=" confirm password"
                            value={this.state.password2}
                            onChange={this.update('password2')} />
                    </label>
                    {/* {errorsArray} */}
                    <br></br>
                    <button type="submit" className="continue-button">Continue</button>
                    <button className="demo-button" onClick={this.demoUser}>demo user</button>
                </form>
                    <br></br>
            </div>
        )

        let modal
        if (formType === 'signup') {
            modal = signupModal;
        } else {
            modal = loginModal;
        }


        return (
            <div className="session-form-container">
                {modal}
            </div>
        );
    }
}

export default SessionForm;