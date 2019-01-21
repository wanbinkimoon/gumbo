import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormSearch from '../../components/FormSearch';
import AlbumSelector from '../../components/AlbumSelector';
import {Spin, Alert} from 'antd';

export class InsertAlbum extends React.Component {
  render() {
    const {loading, loaded} = this.props;
    const errorMsg = {
      title: 'Api Error',
      description:
        'Si consiglia di controllare la tab network o la console per avere più dettagli',
    };
    return (
      <div>
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
        <FormSearch />
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
};

function mapStateToProps(state) {
  return {
    loading: state.search.loading,
    loaded: state.search.loaded,
  };
}

export default connect(mapStateToProps)(InsertAlbum);
