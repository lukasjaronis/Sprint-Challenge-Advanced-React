import React from 'react';

import PlayerCard from './PlayerCard';
import useDarkMode from '../hooks/useDarkMode';

const PlayerList = ({ players }) => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggle = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <div>
        {players.map(player => (
            <PlayerCard player={player} key={player.id} />
        ))}
        </div>
    )
}