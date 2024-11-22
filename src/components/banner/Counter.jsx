import React from "react";
import CountUp from "react-countup";
const Counter = ({ contValue, delay  }) => {
  return (
    <div>
      <CountUp 
        start={0} 
        end={contValue} 
        duration={3} 
        delay={delay}
      />
    </div>
  );
};

export default Counter;
