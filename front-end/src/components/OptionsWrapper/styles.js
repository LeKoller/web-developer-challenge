import styled from "styled-components";

const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 32px;
`;

const DiscardButton = styled.div `
  width: fit-content;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const PublishButton = styled.div `
  width: 98px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
  background-color: ${props => props.enabled ? "#71bb00" : "#5f5f5f"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  box-sizing: border-box;
  transition: 300ms;
  cursor: ${props => props.enabled ? "pointer" : "default"};;
`;

const PublishLabel = styled.span`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => props.enabled ? "#fff" : "#313131"};
  transition: 300ms;
`

const DiscardLabel = styled.span`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #5f5f5f;
  text-decoration: underline;
`

export {
  Container,
  DiscardButton,
  PublishButton,
  PublishLabel,
  DiscardLabel,
};