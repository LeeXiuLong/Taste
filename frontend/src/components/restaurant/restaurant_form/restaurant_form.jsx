import React from 'react';
import '../../modal/modal.scss';
import './restaurant_form';
import PlacesAutocomplete, { geocodeByAddress} from 'react-places-autocomplete';



class RestaurantForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            address: "",
            rating: null,
            notes: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSelectSearch = this.handleSelectSearch.bind(this);
    }

    handleChange(type) {
        return e => this.setState({ [type]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.listId) {
            this.props.createReview(this.state).then(review => {
                this.props.addReviewToList(this.props.listId, review.review.data._id)
            })
                .then(this.props.closeModal());
        } else {
            this.props.createReview(this.state).then(this.props.closeModal())
        }
    }



    handleChangeSearch = address => {
        this.setState({ address });
    };

    handleSelectSearch = (address) => {

        // const { adr_address, name, formatted_address } = address
        // this.setState({ name: address.split(",")[0]})
        geocodeByAddress(address)
            .then(results => {
                this.setState({ name: address.split(",")[0], address: results[0].formatted_address });
            })
        // .then(results => getLatLng(results[0]))
        // .then(latLng => console.log('Success', latLng))
        // .catch(error => console.error('Error', error));
    };


    // apiWrapper

    renderSearch() {

        return (
            <div>
            {/* <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${keys.googleApiKey}&libraries=places&callback=myCallbackFunc`}></script> */}
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChangeSearch}
                onSelect={this.handleSelectSearch}
                googleCallbackName="myCallbackFunc"
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Restaurants...',
                                className: 'location-search-input',
                            })}
                            // value={this.state.name}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item-dropped' : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className, style, })}>
                                        <span id="description">{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            </div>
        );
    }






    render() {
        let radioButtons = [];
        for (let i = 1; i < 11; i++) {
            let button = <label>{i}<input name="rating" type="radio" value={i} onChange={this.handleChange("rating")} /></label>
            radioButtons.push(button);
        }
    
    

        return (
                <div className="menu-item-form-container">
                    <div className="modal-formtype">
                         <h1>create a review</h1>
                    </div>
                <form onSubmit={this.handleSubmit} className="mi-form-container">
                        {this.renderSearch()}
                    <label>Name
                        <input type="text" onChange={this.handleChange("name")} value={this.state.name} />
                    </label>

                    <label>
                        Address
                {/* <AddressSearch onChange={this.handleChange} className="places-address"/> */}
                        <input type="text" onChange={this.handleChange("address")} value={this.state.address}/>
                    </label>

                    <label>
                       <p>rating:</p>
                        <ul>{radioButtons}</ul>
                    </label>
                    <br />
                    <label>
                         <textarea
                            placeholder="notes"
                            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                            onChange={this.handleChange("notes")}
                            ></textarea>
                    </label>
                    <br />
                    <button type="submit" className="continue-button"> make review </button>
                </form>
            </div>
        );
    }



};

export default RestaurantForm;