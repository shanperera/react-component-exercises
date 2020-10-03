import React from 'react';
import { Box, CardFooter as CF } from 'grommet';

class CardFooter extends React.Component{
    render(){
        return (
            <CF pad="xsmall" border={{color: "light-3", size: "xsmall", side: "top"}}>TestText</CF>
        );
    }
}

export default CardFooter;