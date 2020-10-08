import React from 'react';
import './restaurant_form.scss';

class RestaurantForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            address: "",
            rating: null,
            notes: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.listId){
            this.props.createReview(this.state).then(review => this.props.addReviewToList(this.props.listId, review.review.data._id))
                .then(this.props.closeModal());
        } else {
            this.props.createReview(this.state).then(this.props.closeModal())
        }
        
    }

    render() {
        let radioButtons = [];
        for(let i = 1; i < 11; i++){
            let button = <label>{i}<input name="rating" type="radio" key={i} value={i} onChange = {this.handleChange("rating")}/></label>
            radioButtons.push(button);
        }
        return (
            <div>
                <div className="restaurant-form-header">
                    <h1>
                        Create a Review
                    </h1>
                </div>
                <form onSubmit={this.handleSubmit} className="restaurant-form">
                    <label>Name
                        <input
                            type="text"
                            onChange = {this.handleChange("name")}
                        />
                    </label>
                    
                    <label>Address
                        <input
                            type="text"
                            onChange={this.handleChange("address")}
                        />
                    </label>
                    
                    <label>Rating
                        <ul>
                            {radioButtons}
                        </ul>
                    </label>
                    
                    <label>Notes
                        <textarea 
                            cols="30" 
                            rows="10"
                            onChange = {this.handleChange("notes")}>
                        </textarea>
                    </label>
                    <button type = "submit"> Make Review </button>
                </form>
            </div>
        )
    }
};

export default RestaurantForm;