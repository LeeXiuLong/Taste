import React from 'react';
import NavBar from '../../nav/navbar_container';
import './list_form.scss';

class ListForm extends React.Component {

    render() {
        return (
            <div className="list-form-main">
                <NavBar />
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
                    </div>
                </div>
            </div>
        )
    }
};

export default ListForm;