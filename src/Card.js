import React from "react";

const Card = ({id,name,email}) => {
    return(
        <React.StrictMode>
        
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt='robots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </React.StrictMode>
    );
}

export default Card;