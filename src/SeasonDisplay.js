import React from 'react';

const seasonConfig = {
    Summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    Winter: {
        text: "Brrr, it's chilly!",
        iconName: "snowflake"
    }
};

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9){
        return latitude > 0 ? "Summer" : "Winter";
    } else {
        return latitude < 0 ? "Winter" : "Summer";
    }
}

const SeasonDisplay = (props)=>{
    const season = getSeason(props.latitude, new Date().getMonth());

    //returns text and iconName:
    const {text, iconName} = seasonConfig[season];

    return <div>
        <i className={`${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon`} />
        </div>
}

export default SeasonDisplay;