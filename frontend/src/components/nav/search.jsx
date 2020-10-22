import React from "react";
import { fetchSearch } from "../../util/search_api_util";
import SearchItem from "./search-item";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameQuery: "",
            results: null,
            searchResults: null
        }
        this.updateSearch = this.updateSearch.bind(this);
    }

    fetchResults() {
        fetchSearch(this.state.nameQuery).then((results) => {
            let searchResults = results.data;
            this.setState({ searchResults })
        })
    }

    updateSearch(e) {
        if (e.currentTarget.value !== "") {
            this.setState({
                nameQuery: e.currentTarget.value,
                results: true
            }, this.fetchResults);
        } else {
            this.setState({
                nameQuery: "",
                results: null
            }); 
        }
    }

    searchResults() {
        if (this.state.searchResults) {
            return Object.values(this.state.searchResults).map(searchResult => {
                return <SearchItem
                    key={`${searchResult._id}`}
                    searchResult={searchResult}
                    searchInput={this.state.nameQuery} 
                    fetchUser = {this.props.fetchUser}
                    />
            })
        } else {
            return null;
        }
    }

    render() {
        return (
            <div ref={node => this.searchContainer = node}>
                <div className="header-search-container">
                    <div className="search-bar">
                        <input
                            ref={node => this.searchInput = node}
                            value={this.state.nameQuery} 
                            onChange={this.updateSearch}
                            type="input"
                            placeholder="search" />
                    </div>
                </div>
                <ul className={`${this.state.results ? "" : "hidden-"}search-results-list`}>
                    {this.searchResults()}
                </ul>
            </div>
        )
    }
};

export default Search;