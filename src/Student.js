import React from 'react';
import Score from './Score'

const Student = (props) => {
    const student = props.student

const scores = student.scores.map( (score, i) => 
    <Score key={i} score={score} />)


    return <div>
        <h1>Name: {student.name}</h1>
        <h3>Bio: {student.bio}</h3>
        <p>{ scores }</p>

    </div>
}

export default Student