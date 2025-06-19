import React from 'react';

function Counter({ count, setCount }) {
  const disabled = count === 0;

  return (
    <div className="counter">
      <button type="button" onClick={() => setCount(prev => Math.max(prev - 1, 0))} className="sub" disabled={disabled}>-</button>
      <input type="text" value={count} readOnly className="total" name="total" />
      <button type="button" onClick={() => setCount(prev => prev + 1)} className="add">+</button>
    </div>
  );
}

export default Counter;
