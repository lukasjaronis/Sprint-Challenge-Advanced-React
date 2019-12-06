import React from 'react';

const PlayerCard = ({ player }) => {
    return(
        <div>
        <span>Name: {player.name}</span>
        <span>Country: {player.country}</span>
        <span>Searches: {player.searches}</span>
        </div>
    )
}

export default PlayerCard;