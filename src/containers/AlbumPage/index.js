import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Spin} from 'antd';

import ReactJson from 'react-json-view';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      list: props.data,
    };
  }

  componentDidMount() {
    this.setState({
      list: this.props.data,
    });
  }

  render() {
    const {list} = this.state;
    if (!list) {
      return (
        <div
          style={{
            textAlign: 'center',
            width: '100%',
          }}>
          <Spin tip="Loading..." />
        </div>
      );
    }

    return (
      <ReactJson
        name="scraping list"
        displayObjectSize={false}
        displayDataTypes={false}
        enableClipboard={false}
        src={list}
      />
    );
  }
}

AlbumPage.propTypes = {
  data: PropTypes.object,
};

AlbumPage.defaultProps = {};

function mapStateToProps(state) {
  return {
    data: state.albums.data,
  };
}

// function mapStateToProps(state) {
//   return {};
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     // homeInit: () => dispatch(homeInit()),
//   };
// }

export default connect(mapStateToProps)(AlbumPage);
// mapStateToProps,
// mapDispatchToProps
