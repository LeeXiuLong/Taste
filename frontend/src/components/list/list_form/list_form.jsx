import React from 'react';
import './list_form.scss';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createList(this.state)
            .then()
            .then(this.props.closeModal())
    }

    render() {

        const listModal = (
            <div className="signup-form">
                <div className="modal-formtype"><h1>make a new list</h1></div>
                <div className="form-container">
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                className="list-inputs"
                                type="text"
                                placeholder=" name"
                                value={this.state.name}
                                onChange={this.update('name')} />
                        </label>
                        <br/>
                        <button type="submit" className="demo-button">create</button>
                    </form>
                </div>
            </div>
        )

        return (
            <div className="list-form-main">
                {listModal}
            </div>
        )
    }
};

export default ListForm;