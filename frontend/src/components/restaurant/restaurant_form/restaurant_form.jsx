import React from 'react';
import './restaurant_form.scss';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';



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
            this.props.createReview(this.state).then(review => this.props.addReviewToList(this.props.listId, review.id))
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


    renderSearch() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChangeSearch}
                onSelect={this.handleSelectSearch}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
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
        );
    }






    render() {
        let radioButtons = [];
        for (let i = 1; i < 11; i++) {
            let button = <label>{i}<input name="rating" type="radio" value={i} onChange={this.handleChange("rating")} /></label>
            radioButtons.push(button);
        }

        return (
            <div>
                <div className="restaurant-form-header">
                    <h1>Create a Review</h1>
                </div>
                <form onSubmit={this.handleSubmit} className="restaurant-form">
                    <label>
                        Name
                {this.renderSearch()}
                        {/* <input type="text" onChange={this.handleChange("name")} /> */}
                    </label>

                    {/* <label>
                Address
                  <AddressSearch onChange={this.handleChange} className="places-address"/>
                <input type="text" value={this.state.address}/>
              </label> */}

                    <label>
                        Rating
                <ul>{radioButtons}</ul>
                    </label>

                    <label>
                        Notes
                <textarea
                            cols="30"
                            rows="10"
                            onChange={this.handleChange("notes")}
                        ></textarea>
                    </label>
                    <button type="submit"> Make Review </button>
                </form>
            </div>
        );
    }



};

export default RestaurantForm;