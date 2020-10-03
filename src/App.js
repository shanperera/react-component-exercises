import React from "react";
import { Box, Card, Grommet } from "grommet";
import CardTitle from "./components/socialcard/CardTitle";
import CardBody from "./components/socialcard/CardBody";
import CardFooter from "./components/socialcard/CardFooter";

const theme = {
  global: {
    // colors: {
    //   brand: '#61dbfb'
    // },
    font: {
      family: "Lato",
      size: "1em",
      height: "1em",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box align="center" justify="center">
        <Card animation="fadeIn" justify="between">
          <CardTitle
            image="IMG"
            user="Shan Perera"
            handle="@ShanPerera"
            date="Sept 10"
            paragraphText="Paragraph Text - Social Card description goes here, the text will fill the parent container 
            and wrap around any overflow."
          ></CardTitle>
          <CardBody
            image="IMG"
            titleText="Title Text - Sample Text"
            paragraphText="Paragraph Text - sample text, lots of space for text"
          ></CardBody>
          <CardFooter chatMetric="3" shareMetric="46" favoriteMetric="168"></CardFooter>
        </Card>
      </Box>
    </Grommet>
  );
}

export default App;
