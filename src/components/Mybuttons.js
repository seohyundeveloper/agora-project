import React from 'react';

const Mybottons = (({text, onClick}) => {
  return (
    <>
    <button className="mybuttons__wrapper" onClick={onClick}>
      {text}
    </button>
    </>
  )
})

export default Mybottons;