import React from "react";
import { Link } from "react-router-dom";
// href={`/users/${this.props.id}`}
export default class SearchItem extends React.Component {
    matchUsers(searchQuery, searchResult) {
        if (!(searchResult && searchQuery)) {
            return {
                matching: "",
                nonMatching: searchQuery
            }
        };
        let i = 0;
        while (i < searchQuery.length &&
            searchQuery[i].toLowerCase() === searchResult[i].toLowerCase()) {
            i += 1;
        }
        let matching = searchResult.substr(0, i);
        let notMatching = searchResult.substr(i);
        return {
            matching,
            notMatching
        }
    }
    render() {
        const wordSplit = this.matchUsers(this.props.searchQuery, `${this.props.searchResult.name}`);
        return (
            <Link to={`/users/${this.props.searchResult._id}`} className="search-item">
                <div className="search-icon">
                    <i className="fas fa-search" />
                </div>

                <div className="search-content">
                    {wordSplit.matching}<strong>{wordSplit.notMatching}</strong>
                </div>
            </Link>

        )
    }
}