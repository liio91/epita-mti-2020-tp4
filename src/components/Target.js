import React from 'react';
// import { red, green } from 'ansi-colors';

const colors = {
  1 : "#FF0000",
  2 : "#00FF00",
  3 : "#0000FF"
}

const Target = ({ x = 0, y = 0, value = 0, onClick = () => {} }) => (
  <div
    style={{
      position: 'absolute',
      top: `${y}%`,
      left: `${x}%`,
      width: '25px',
      height: '25px',
      textAlign: 'center',
      lineHeight: '25px',
      cursor: 'pointer',
      backgroundColor: colors[value]
    }}
    onClick={onClick}
  >
    {value}
  </div>
);

export default Target;
