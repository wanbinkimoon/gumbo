import {Spin} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import ReactJson from 'react-json-view';

class ScrapList extends React.Component {
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

ScrapList.propTypes = {
  data: PropTypes.object,
};

ScrapList.defaultProps = {};

function mapStateToProps(state) {
  return {
    data: state.scrapList.data,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     // homeInit: () => dispatch(homeInit()),
//   };
// }

export default connect(mapStateToProps)(ScrapList);
// mapDispatchToProps
