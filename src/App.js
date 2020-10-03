import React from "react";
import { Box, Card, Grommet } from "grommet";
import CardTitle from "./components/socialcard/CardTitle";
import CardBody from "./components/socialcard/CardBody";
import CardFooter from "./components/socialcard/CardFooter";

function App() {
  return (
    <Grommet plain>
      <Box align="center" justify="center">
        <Card animation="fadeIn" justify="between">
          <CardTitle
            image="IMG"
            user="Shan Perera"
            handle="@ShanPerera"
            date="Sept 10"
            paragraphText="Paragraph Text - Social Card description goes here"
          ></CardTitle>
          <CardBody
            image="IMG"
            titleText="Title Text - Sample Text"
            paragraphText="Paragraph Text - sample text, lots of space for text"
          ></CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Box>
    </Grommet>
  );
}

export default App;
