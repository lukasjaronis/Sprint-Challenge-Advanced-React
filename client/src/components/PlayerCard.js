import React from "react";
import styled from "styled-components";

const PlayerCardStyles = styled.div`
  .outerContainer {
    background: #3aafa9;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    height: 10rem;
    border-radius: 10px;

    span {
          letter-spacing: 2px;
          text-transform: uppercase;
      }

    .content-divider {
        
      width: 33%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    
      

      .name {
        font-size: 1.5rem;
        font-weight: 900;
        color: #feffff;
      }

      .country {
        font-size: 1.5rem;
        font-weight: 900;
        color: #17252a;
      }

      .searches {
        font-size: 1.5rem;
      }
    }
  }
`;

const PlayerCard = ({ player }) => {
  return (
    <PlayerCardStyles>
      <div className="outerContainer">
        <div className="content-divider">
          <span className="name">{player.name}</span>
        </div>
        <div className="content-divider">
          <span className="country">{player.country}</span>
        </div>
        <div className="content-divider">
          <span className="searches">{player.searches}</span>
        </div>
      </div>
    </PlayerCardStyles>
  );
};

export default PlayerCard;
