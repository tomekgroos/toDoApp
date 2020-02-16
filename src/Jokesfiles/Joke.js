import React from 'react';
export default Joke;

function Joke(props) {
  return (
    <div>
      <h2 style={{display: !props.question && "none" }}>Pytanie: {props.question}</h2>
      <h3 style={{color: !props.question && "888888"}}>Odpowiedź: {props.punchLine}</h3>
      <hr/>
    </div>
  );
}


