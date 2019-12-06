import React from 'react';

import PlayerCard from './PlayerCard';
import useDarkMode from '../hooks/useDarkMode';
import styled from 'styled-components';

const PlayerListStyles = styled.div`

button {
    width: 10rem;
    height: 2rem;
    background: #17252a;
    border: 2px solid #3aafa9;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 900;
    color: #feffff;

    &:hover {
        border-radius: 15px;
        color: #feffff;
        background: #17252a;
        border: 2px solid #feffff;
    }

    &:focus {
        border: none;
        text-decoration: none;
    }
}

`;

const PlayerList = ({ players }) => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggle = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <PlayerListStyles>
        <div>
        <div>
        <button onClick={toggle}>Dark Mode</button>
        </div>
        {players.map(player => (
            <PlayerCard player={player} key={player.id} />
        ))}
        </div>
        </PlayerListStyles>
    )
}

export default PlayerList;