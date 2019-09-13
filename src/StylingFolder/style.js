import styled from "styled-components";

export const WeatherImg = styled.div`
  height: auto;
  background-size: cover;
  padding: 10px;
  border-radius: 25px;
  width:100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
export const WeatherInfo = styled.div`
  display: flex;
  width:50%;
  border-radius: 25px;
  flex-direction: column;
  background-color: rgba(0, 22 , 46, 0.5);
  margin: auto;

`;
export const WeatherWrapper = styled.div`
  display: flex;
  width:100%;
  flex-direction: row-reverse;
  justify-content: center;
  margin: auto;
  margin:3% auto;
  max-width:1000px;
`;
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width:100%;
  margin: auto;
`;
export const GoogleInput = styled.input`
border-radius: 25px;
height: 30px;
width: 30%;
`;
export const GoogleButton = styled.button`
border-radius: 25px;
height: 30px;
width: 100px;
margin: 0 1%;
`;