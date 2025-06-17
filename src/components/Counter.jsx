import { useState } from 'react';

function Counter() {
  const[count, setCount] = useState(0);

  let disabled = count === 0;
  
  return (
      <div className="counter">
        <button type="button" onClick={() => { setCount(count - 1) }} className="sub" disabled={disabled}>-</button>
        <input type="text" value={count} readOnly className="total" name="total"/>
        <button type="button" onClick={() => { setCount(count + 1) }} className="add">+</button>
      </div>
  );
}

export default Counter;