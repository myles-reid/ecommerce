import { useState } from 'react';

function Counter() {
  const[count, setCount] = useState(0);

  let disabled = count === 0;
  
  return (
      <div className="counter">
        <input type="button" value="-" onClick={() => { setCount(count - 1) }} className="sub" disabled={disabled}/>
        <input type="text" value={count} readOnly className="sum"/>
        <input type="button" value="+" onClick={() => { setCount(count + 1) }} className="add"/>
      </div>
  );
}

export default Counter;