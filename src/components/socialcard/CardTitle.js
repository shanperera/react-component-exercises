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
      <CardHeader gap="none" justify="stretch" border={{color: "light-5", side: "bottom"}}>
        <Box fill direction="row-responsive">
          <Box pad="small" align="center" justify="center" background="light-3">
            <Avatar>
              <Reactjs size="large" color="plain"></Reactjs>
            </Avatar>
          </Box>
          <Box flex direction="column" background="light-1">
            <Box
              margin="none"
              direction="row-responsive"
              pad={{size: "xsmall", top: "xxsmall", left: "small"}}
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
            <Box pad={{size: "xsmall", top: "xxsmall", left: "small"}}>
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
