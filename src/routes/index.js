import React from 'react';
import {Switch, Route, BrowserRouter, NavLink} from 'react-router-dom';

import InsertAlbum from '../containers/InsertAlbum';
import NotFoundPage from '../containers/NotFoundPage';
import {Layout, Menu, Icon} from 'antd';
const {Header, Content} = Layout;

// const history = createHistory();

export default function Routing() {
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
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
