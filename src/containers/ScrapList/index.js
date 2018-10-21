import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import {Spin} from 'antd';
import ReactJson from 'react-json-view';

class ScrapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    // API calls goes here
    const scrapList = firebase
      .database()
      .ref()
      .child('scrapping_list');
    scrapList.on('value', snap => this.setState({list: snap.val()}));
  }

  render() {
    const {list} = this.state;
    if (list.length == 0) {
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

    return <ReactJson src={list} />;
  }
}

ScrapList.propTypes = {};

ScrapList.defaultProps = {};

// function mapStateToProps(state) {
//   return {};
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     // homeInit: () => dispatch(homeInit()),
//   };
// }

export default connect()(ScrapList);
// mapStateToProps,
// mapDispatchToProps
