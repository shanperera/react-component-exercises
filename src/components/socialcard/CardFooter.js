import React from "react";
import { Chat, Favorite, ShareOption, ShareRounded } from "grommet-icons";
import { Box, CardFooter as CF, Text } from "grommet";

class CardFooter extends React.Component {
  render() {
    return (
      <CF
        pad={{ horizontal: "small", vertical: "xsmall" }}
        border={{ color: "light-3", size: "xsmall", side: "top" }}
      >
        <Box
          direction="row-responsive"
          pad={{ horizontal: "small" }}
          gap="medium"
        >
          <Box direction="row-responsive" gap="xsmall">
            <Favorite color="red"></Favorite>
            <Text size="small" color="red">
              {this.props.favoriteMetric}
            </Text>
          </Box>
          <Box direction="row-responsive" gap="xsmall">
            <Chat color="brand"></Chat>
            <Text size="small" color="brand">
              {this.props.chatMetric}
            </Text>
          </Box>
          <Box direction="row-responsive" gap="xsmall">
            <ShareRounded color="brand"></ShareRounded>
            <Text size="small" color="brand">
              {this.props.shareMetric}
            </Text>
          </Box>
          <Box rtl fill flex>
            <ShareOption color="brand"></ShareOption>
          </Box>
        </Box>
      </CF>
    );
  }
}

export default CardFooter;
