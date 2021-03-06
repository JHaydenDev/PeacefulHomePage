import React from "react";
import { Wrapper } from "../StylingFolder/style";

function Clock(props) {
  const timer = useNewTimer(new Date());

  return (
    <Wrapper>
      <div>
        <h2>Welcome, It is {timer.toLocaleTimeString()}.</h2>
      </div>
    </Wrapper>
  );
}

function useNewTimer(currentDate) {
  const [date, setDate] = React.useState(currentDate);

  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return date;
}

export default Clock;
