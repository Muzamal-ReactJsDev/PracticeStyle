import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: red;
  color: ${(props) => (props.hwi ? "blue" : "yellow")};
  /* color: ${(props) => (props.hwi === "hiii" ? "blue" : "yellow")}; */
`;
const NewbuttonStyle = styled(ButtonStyle)`
  color: pink;
  background-color: blue;
  border: none;
  &:hover {
    color: green;
    background-color: orange;
  }
`;
const ThemeConst = styled(ButtonStyle)`
  color: ${(props) => props.theme.white.color};
  background: ${(props) => props.theme.dark.color};
`;

export default ButtonStyle;
export { NewbuttonStyle, ThemeConst };
