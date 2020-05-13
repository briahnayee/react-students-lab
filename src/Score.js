import React from 'react';

const Score = (props) => {
    const score = props.score

    return <div>
       score: {score.score}
       <br />
        date: {score.date}
    </div>

}

export default Score