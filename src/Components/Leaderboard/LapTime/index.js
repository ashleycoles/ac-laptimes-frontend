import React from 'react';

const LapTime = (props) => {
    return (
        <p>{props.timeData.user.name} - {props.timeData.track.name} - {props.timeData.time} - {props.timeData.car.make} {props.timeData.car.model}</p>
    )
};

export default LapTime;