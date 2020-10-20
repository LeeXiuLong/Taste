import React from "react";
import { fetchSearch } from "../../util/search_api_util";
import SearchItem from "./search-item";
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchContent: "",
            dropped: null,
            searchResults: null
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
    }
    getSearchResults() {
        fetchSearch(this.state.searchContent).then((results) => {
            let searchResults = results.data
            this.setState({
                searchResults
            })
        })
    }

    componentDidMount() {
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("mousedown", this.handleMouseDown);
    }
    componentWillUnmount() {
        document.removeEventListener("mouseup", this.handleMouseUp);
        document.removeEventListener("mousedown", this.handleMouseDown);
    }
    updateSearch(e) {
        this.setState({
            searchContent: e.currentTarget.value
        }, this.getSearchResults);
    }

    handleMouseUp(e) {
        if (this.searchInput && this.searchInput.contains(e.target)) {
            this.setState({
                dropped: true
            })
        }
    }

    handleMouseDown(e) {
        if (this.searchContainer && !this.searchContainer.contains(e.target)) {
            this.setState({
                dropped: null
            })
        }
    }

    closeSearch(e) {
        this.setState({
            dropped: null
        })
    }

    allSearchResults() {
        if (this.state.searchResults) {
            return Object.values(this.state.searchResults).map(searchResult => {
                return <SearchItem
                    key={`${searchResult._id}`}
                    searchResult={searchResult}
                    searchQuery={this.state.searchContent} />
            })
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className={`${this.state.dropped ? "dropped" : ""} search-container`} ref={node => this.searchContainer = node}>
                <div className="header-search-container">
                    <div className={`${this.state.dropped ? "" : "hidden"} back-arrow`}>
                        <i onClick={this.closeSearch} className="fas fa-arrow-left" />
                    </div>

                    <div className="search-bar">
                        <input
                            ref={node => this.searchInput = node}
                            onChange={this.updateSearch}
                            type="input"
                            placeholder="search"
                            value={this.state.searchContent} />
                        <div className="search-icon">
                            <i className="fas fa-search" />
                        </div>
                    </div>
                </div>

                <ul className={`${this.state.dropped ? "" : "hidden"} search-results-list`}>
                    {this.allSearchResults()}
                </ul>
            </div>
        )
    }

}