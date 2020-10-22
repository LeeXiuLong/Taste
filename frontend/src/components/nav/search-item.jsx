import React from "react";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {

    userSearch(searchInput, searchResult) {
        if (!(searchResult && searchInput)) {
            return { nameQuery: "", otherResults: searchInput }
        };
        let i = 0;
        while (i < searchInput.length &&
            searchInput[i].toLowerCase() === searchResult[i].toLowerCase()) {
            i += 1;
        }
        let nameQuery = searchResult.substr(0, i);
        let otherResults = searchResult.substr(i);
        return { nameQuery, otherResults }
    }

    render() {
        const usernameSplit = this.userSearch(this.props.searchInput, `${this.props.searchResult.name}`);
        return (
            <div className="search-content">
                <Link onClick={() => this.props.fetchUser(this.props.searchResult._id)} to={`/users/${this.props.searchResult._id}`} className="search-item">
                    {usernameSplit.nameQuery}{usernameSplit.otherResults}
                </Link>
            </div>
        )
    }
};

export default SearchItem;