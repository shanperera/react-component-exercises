import React from 'react';
import '../../styles/socialcard/card-header.css';
import { Box, Card, CardBody, CardHeader, Grommet } from 'grommet';

class CardTitle extends React.Component {
    render() {
        return (
            <CardHeader pad="small" gap="none" justify="stretch">
                <Box pad="medium" background="dark-2">{this.props.image}</Box>
                <Box pad="medium" background="light-2">
                    <div>
                        <Username user={this.props.user}></Username>
                        <Handle handle={this.props.handle}></Handle>
                        <Date date={this.props.date}></Date>
                    </div>
                </Box>
            </CardHeader>
        );
    }
}

function Username(props) {
    return (
        <span className="username">{props.user}</span>
    );
}

function Handle(props) {
    return (
        <span className="handle">{props.handle}</span>
    );
}

function Date(props) {
    return (
        <span className="header-date">{props.date}</span>
    );
}

export default CardTitle;