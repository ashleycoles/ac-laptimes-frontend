import React from "react";

class TrackFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.tracks !== this.props.tracks) {
            this.setState({tracks: this.props.tracks})
        }
    }

    render() {
        return (
            <select value={this.state.trackFilter} onChange={this.props.onFilterChange}>
                <option value="">All</option>
                {this.state.tracks.map((track, key) =>
                    <option key={key} value={track._id}>{track.name}</option>
                )}
            </select>
        );
    }
}

export default TrackFilter;