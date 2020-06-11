import React from 'react';
import LapTime from "./LapTime";
import TrackFilter from "./TrackFilter";

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: [],
            tracks: [],
            trackFilter: ''
        }
    };
    componentDidMount() {
        this.getTimes();
        this.getTracks();
    };
    getTracks = () => {
        fetch('http://localhost:4000/tracks')
            .then(result => result.json())
            .then(data => {
                this.setState({tracks: data.data})
            })
    };
    getTimes = () => {
        let url = 'http://localhost:4000/times';
        if (this.state.trackFilter !== '') {
            url += '?tid=' + this.state.trackFilter
        }
        fetch(url)
            .then(result => result.json())
            .then(data => {
                this.setState({times: data.data})
            })
    };
    handleTrackFilterChange = (event) => {
        this.setState({trackFilter: event.target.value},() => {
            this.getTimes();
        });
    };
    render() {
        return (
            <div className="App">
                <TrackFilter tracks={this.state.tracks} onFilterChange={this.handleTrackFilterChange} />
                {this.state.times.map((time, key) =>
                    <LapTime key={key} timeData={time} />
                )}
            </div>
        );
    }
}

export default Leaderboard;