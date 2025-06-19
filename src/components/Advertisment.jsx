import {LuBadgeDollarSign} from 'react-icons/lu';


function Advertisment({onClick}) {
  return (
    <div className="advertisment">
      <div className="inner-ad flex">
        <div className="flex ad-top">
          <div className="flex icons gold">
            <LuBadgeDollarSign className="icon" />
            <LuBadgeDollarSign className="icon" />
            <LuBadgeDollarSign className="icon" />
          </div>
          <h2>Today's Feature Deal</h2>
        </div>
        <div>
          <p>Stylish picks under 30$</p>
          <p>Only while supplies last</p>
        </div>
        <button onClick={onClick}>View Deals</button>
      </div>
    </div>
  );
}

export default Advertisment;