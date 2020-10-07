import React from 'react';
import NavBar from '../../nav/navbar_container';
import './list_form.scss';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    render() {

        const listModal = (
            <div className="list-form">
                <form>
                    <label>
                        <input
                            className="list-inputs"
                            type="text"
                            placeholder=" name"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>
                    <button type="submit" className="list-button">create</button>
                </form>
            </div>
        )

        return (
            <div className="list-form-main">
                {listModal}
                {/* <NavBar />
                <div className="list-form-container">
                    <div className="list-form-subcontainer">
                        <div className="list-form-main-left">
                            <h1 className="make-a-new-list">make a new list</h1>
                        </div>
                        <div className="list-form-main-right">
                            <label>
                                <input type="text" placeholder="title" />
                            </label>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        )
    }
};

export default ListForm;