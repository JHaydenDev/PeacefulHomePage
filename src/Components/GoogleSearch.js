import React from "react";
import { Wrapper, GoogleButton, GoogleInput } from "../StylingFolder/style";

function GoogleSearch(props) {
  return (
    <Wrapper>
      <div>
        <form action="https://www.google.com/search" method="GET">
          <GoogleInput type="text" name="q" placeholder="Google" />
          <GoogleButton value="Search">Search</GoogleButton>
        </form>
      </div>
    </Wrapper>
  );
}

export default GoogleSearch;
