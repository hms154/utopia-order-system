import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SmartFeatureToggle from './smartfeaturetoggle'
import {smartOptionsEnum} from './actions'
import { Flex, Box } from 'reflexbox'

const styles = {
  imageSize: {
    width: "50%"
  }
};

const SmartFeatureCard = (props) => (
  <Card>
    <Flex wrap>
      <Box col={12} lg={6} sm={6} p={1}>
        <CardMedia style={styles.imageSize}>
          <img src={props.img} />
        </CardMedia>
      </Box>
      <Box col={12} lg={6} sm={6} p={1}>
        <CardActions>
          <SmartFeatureToggle name={props.name} disabled={props.disabled} type={props.type}/>
        </CardActions>
      </Box>
    </Flex>
  </Card>
);

export default SmartFeatureCard;