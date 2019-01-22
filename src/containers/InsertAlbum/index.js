import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormSearch from '../../components/FormSearch';
import AlbumSelector from '../../components/AlbumSelector';
import {Spin, Alert, Input} from 'antd';
import {storeToken} from '../../stores/Services';

export class InsertAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missingField: false,
    };
  }

  checkFields = (name, year) => {
    if (!name || !year) {
      this.setState({
        missingField: true,
      });
    }
  };

  render() {
    const {loading, loaded, token, storeToken} = this.props;
    const {missingField} = this.state;

    const missingFieldMsg = {
      title: 'Missing Fields',
      description:
        "Devi inserire il titolo dell'album e l'anno di uscita per poter cercare e aggiungere al DB",
    };

    return (
      <div>
        {!token && (
          <div
            style={{
              marginBottom: 24,
            }}>
            <Alert
              message={
                'No token found, inserisci il token di spotify e riprova'
              }
              description={
                <Input.Search
                  placeholder="Spotify Token"
                  enterButton="Insert Token"
                  size="large"
                  onSearch={token => storeToken(token, 'spotify')}
                />
              }
              type="error"
              showIcon
            />
          </div>
        )}
        {token &&
          missingField && (
            <div
              style={{
                marginBottom: 24,
              }}>
              <Alert
                message={missingFieldMsg.title}
                description={missingFieldMsg.description}
                type="error"
                showIcon
              />
            </div>
          )}
        <FormSearch
          missingField={missingField}
          checkFields={this.checkFields}
        />
        <hr />
        {loading && (
          <div
            style={{
              textAlign: 'center',
              width: '100%',
            }}>
            <Spin tip="Loading..." />
          </div>
        )}
        {loaded && <AlbumSelector />}
      </div>
    );
  }
}

InsertAlbum.propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool,
  missingField: PropTypes.bool,
  checkFields: PropTypes.func,
  storeToken: PropTypes.func.isRequired,
  token: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    loading: state.search.loading,
    loaded: state.search.loaded,
    token: state.services.spotify.token,
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
)(InsertAlbum);
