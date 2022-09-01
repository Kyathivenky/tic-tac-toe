import React from 'react'

const StatusMessage = ( {winner ,current}) => {
    

    const noMove =current.board.every(el => el!==null);
    return (
    
    <div className='status-message'>
      {winner &&
      <>
      Winner is <span className={winner ==='X' ? 'text-green' : 'text-orange'}
      >{winner}</span></>}

    {!winner && !noMove && 
    <>
    Next player is {''} <span className={current.isXNext ? 'text-green' : 'text-orange'}>{current.isXNext ?'x':'O'}{' '}</span></>
    }
   
   
   
   
    {
        !winner && noMove && `Tied`
    }</div>
  );
};

export default StatusMessage
