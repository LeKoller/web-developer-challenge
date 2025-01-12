import styled from "styled-components";

const Container = styled.main`
  width: ${props => props.width < 560 ? `${props.width - 40}px` : "38vw"};
  min-width: ${props => props.width < 560 ? "0" : "516px"};
  height: 353px;
  background-color: #313131;
  padding: 24px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 56px;
  border: 2px solid #3b3b3b;
  border-radius: 3px;
  box-sizing: border-box;
`;

export { Container };
