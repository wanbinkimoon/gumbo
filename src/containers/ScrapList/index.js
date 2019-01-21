import {Spin} from 'antd';
import React from 'react';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
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
    const db = firebase.firestore();
    db.collection('scrapping_list ')
      .get()
      .then(snap => {
        let listSnap = {};
        snap.forEach(
          doc =>
            (listSnap = {
              ...listSnap,
              [doc.id]: doc.data(),
            })
        );
        this.setState({
          list: listSnap,
        });
      });
  }

  render() {
    const {list} = this.state;
    if (list.length === 0) {
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
