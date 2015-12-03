import React from 'react';

// Components
import SideMenu from './SideMenu.js';
import Header from './Header.js';
import Articles from './Articles.js';
import { Grid,Row,Col,Button } from 'react-bootstrap'
const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%'
    // justifyContent: 'center'
  }
};

const HomePage = React.createClass({
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md="2">
            <SideMenu />
            <Header />

          </Col>
          <Col md="10">
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
});

module.exports = HomePage;
