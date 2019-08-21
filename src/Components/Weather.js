import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
border: black solid 1px;
`;

function Weather(props) {

  return (
    <Wrapper>
    <div>
      <h2>WEATHER!!!!</h2>
    </div>
    </Wrapper>
  );
}


export default Weather;
