import React from "react";
import { Box, CardBody as CB, Heading, Paragraph } from "grommet";

class CardBody extends React.Component {
  render() {
    return (
      <CB
        pad={{ top: "small", bottom: "none", left: "small", right: "small" }}
        gap="none"
        justify="stretch"
      >
        <Box
          round={{ size: "xsmall", corner: "top" }}
          direction="row-responsive"
          pad="small"
          background="dark-1"
          fill="horizontal"
          height={{ min: "14em" }}
          align="center"
          justify="center"
        >
          {this.props.image}
        </Box>
        <Box
          margin="none"
          direction="column"
          pad="small"
          background="light-1"
          border={{size: "xsmall", color: "light-3", side: "vertical"}}
        >
          <Heading level="5" margin="none" pad="small">
            {this.props.titleText}
          </Heading>
          <Paragraph size="small">{this.props.paragraphText}</Paragraph>
        </Box>
      </CB>
    );
  }
}

export default CardBody;
