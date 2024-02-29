import { ThemeProvider } from "styled-components";
import ButtonStyle, { NewbuttonStyle, ThemeConst } from "./Styling";

const StyleComponents = () => {
  const Theme = {
    dark: {
      color: "white",
      backgroundColor: "black",
    },
    white: {
      color: "black",
      backgroundColor: "white",
    },
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Style Components</h1>
      <ThemeProvider theme={Theme}>
        <button>This is the simple Style Button</button>
        <br />
        <br />
        <ButtonStyle>This is the simple Style Button</ButtonStyle>
        <br />
        <br />
        <ButtonStyle hwi="hiii">This is the simple Style Button</ButtonStyle>
        <br />
        <br />
        <NewbuttonStyle>
          This is the Style Button getting the value from{" "}
        </NewbuttonStyle>
        <br />
        <br />
        <ThemeConst>
          This is the Style Button getting the value from theme
        </ThemeConst>
      </ThemeProvider>
    </div>
  );
};

export default StyleComponents;
