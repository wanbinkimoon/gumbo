import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormSearch from '../../components/FormSearch';
import AlbumSelector from '../../components/AlbumSelector';
import {Spin, Alert} from 'antd';

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
    const {loading, loaded} = this.props;
    const {missingField} = this.state;

    const missingFieldMsg = {
      title: 'Missing Fields',
      description:
        "Devi inserire il titolo dell'album e l'anno di uscita per poter cercare e aggiungere al DB",
    };

    return (
      <div>
        {missingField && (
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
};

function mapStateToProps(state) {
  return {
    loading: state.search.loading,
    loaded: state.search.loaded,
  };
}

export default connect(mapStateToProps)(InsertAlbum);
