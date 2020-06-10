import React from 'react';
import './App.css';

const LapTime = (props) => {
    return (
        <p>{props.timeData.track.name} - {props.timeData.time} - {props.timeData.car.make} {props.timeData.car.model}</p>
        )
};

class App extends React.Component {
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
                <select value={this.state.trackFilter} onChange={this.handleTrackFilterChange}>
                    {this.state.tracks.map((track, key) =>
                        <option key={key} value={track._id}>{track.name}</option>
                    )}
                </select>
                {this.state.times.map((time, key) =>
                    <LapTime key={key} timeData={time} />
                )}
            </div>
        );
    }
}

export default App;
