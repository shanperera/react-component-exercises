import React from "react";
import "../../styles/socialcard/card-header.css";
import {
  Avatar,
  Box,
  CardHeader,
  Paragraph,
  Text,
} from "grommet";
import { Reactjs } from "grommet-icons";

class CardTitle extends React.Component {
  render() {
    return (
      <CardHeader gap="none" justify="stretch">
        <Box fill direction="row-responsive">
          <Box pad="small" align="center" justify="center" background="dark-2">
            <Avatar>
              <Reactjs size="large" color="plain"></Reactjs>
            </Avatar>
          </Box>
          <Box flex direction="column" background="light-2">
            <Box
              margin="none"
              direction="row-responsive"
              pad="xsmall"
              gap="xsmall"
            >
              <Text size="small" weight="bold">
                {this.props.user}
              </Text>
              <Text size="small" color="grey">
                {this.props.handle}
              </Text>
              <Text size="small" color="grey">
                {" "}
                - {this.props.date}
              </Text>
            </Box>
            <Box pad="xsmall" flex>
              <Paragraph size="small" margin="none">
                {this.props.paragraphText}
              </Paragraph>
            </Box>
          </Box>
        </Box>
      </CardHeader>
    );
  }
}

export default CardTitle;
