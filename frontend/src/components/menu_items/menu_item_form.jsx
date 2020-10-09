import React from 'react';

class MenuItemForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            rating: null,
            notes: "",
            restaurantReview: this.props.reviewId,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createMenuItem(this.props.reviewId, this.state).then(this.props.closeModal());
    }

    render(){
        let radioButtons = [];
        for (let i = 1; i < 11; i++) {
            let button = <label>{i}<input name="rating" type="radio" key={i} value={i} onChange={this.handleChange("rating")} /></label>
            radioButtons.push(button);
        }
        return(
            <div className="menu-item-form-container">
                <div className="modal-formtype">
                    <h1>add a new menu item!</h1>
                </div>
                <form className="mi-form-container" onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text"
                            className="name"
                            placeholder=" name"
                            onChange= {this.handleChange("name")}
                        />
                    </label>
                    <br/>
                        <p>rating:</p>
                    <br />
                    <label>
                        {radioButtons}
                    </label>
                    <br />
                    <label>
                        <textarea 
                            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                            placeholder=" notes"
                            onChange={this.handleChange("notes")}>
                        </textarea>
                    </label>
                    <br />
                    <button type="submit" className="continue-button"> create </button>
                </form>
            </div>
        )
    }
}

export default MenuItemForm;