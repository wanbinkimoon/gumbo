import React from 'react';
import PropTypes from 'prop-types';

import {Switch, Route, BrowserRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {databaseInit} from '../stores/Database';

import InsertAlbum from '../containers/InsertAlbum';
import ScrapList from '../containers/ScrapList';
import Home from '../containers/Home';
import NotFoundPage from '../containers/NotFoundPage';

import {Layout, Menu, Icon} from 'antd';
const {Header, Content} = Layout;

// const history = createHistory();

class Routing extends React.Component {
  constructor(props) {
    super(props);
    props.databaseInit();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" style={{lineHeight: '64px'}}>
              <Menu.Item>
                <NavLink to={'/'}>
                  <Icon type="home" theme="outlined" />
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={'/insert'}>
                  <Icon type="form" theme="outlined" />
                  Insert album
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={'/scrap-list'}>
                  <Icon type="database" theme="outlined" />
                  Database scrap list
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            <Switch>
              <Route path="/insert" component={InsertAlbum} />
              <Route path="/scrap-list" component={ScrapList} />
              <Route path="/" component={Home} />
              <Route component={NotFoundPage} />
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

Routing.propTypes = {
  databaseInit: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    databaseInit: () => dispatch(databaseInit()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routing);
