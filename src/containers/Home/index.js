import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {storeToken} from '../../stores/Services';

import {Spin, Alert, Input} from 'antd';

import {Wrap} from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // API calls goes here
  }

  render() {
    const {loading, loaded, data, storeToken} = this.props;
    const errorMsg = {
      title: 'Api Error',
      description:
        "C'è incontrato un errore durante una delle chiamate ai servizi, controlla la tab network o la console per avere più dettagli",
    };
    return (
      <Wrap>
        {!loaded &&
          loaded !== null && (
            <div
              style={{
                marginBottom: 24,
              }}>
              <Alert
                message={errorMsg.title}
                description={errorMsg.description}
                type="error"
                showIcon
              />
            </div>
          )}
        {loading && (
          <div
            style={{
              textAlign: 'center',
              width: '100%',
            }}>
            <Spin tip="Loading..." />
          </div>
        )}
        {data && (
          <Alert
            message={'Scrap List loaded'}
            description={'Il backoffice è pronto a lavorare'}
            type="success"
            showIcon
          />
        )}
        <hr />
        <br />
        <br />
        <Input.Search
          placeholder="Spotify Token"
          enterButton="Insert Token"
          size="large"
          onSearch={token => storeToken(token, 'spotify')}
        />
      </Wrap>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool,
  data: PropTypes.object,
  storeToken: PropTypes.func,
};

Home.defaultProps = {};

function mapStateToProps(state) {
  return {
    loading: state.scrapList.loading,
    loaded: state.scrapList.loaded,
    data: state.scrapList.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    storeToken: (token, service) => dispatch(storeToken(token, service)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
