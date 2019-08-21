import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
border: black solid 1px;
`;

function Clock(props) {
  const timer = useNewTimer(new Date());

  return (
    <Wrapper>
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {timer.toLocaleTimeString()}.</h2>
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
