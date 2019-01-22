import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Wrap} from './styles';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // API calls goes here
  }

  render() {
    return (
      <Wrap>
        <article>
          <h1>Hello there!</h1>
          <hr />
          <p>This is your new AlbumPage page.</p>
        </article>
      </Wrap>
    );
  }
}

AlbumPage.propTypes = {};

AlbumPage.defaultProps = {};

// function mapStateToProps(state) {
//   return {};
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     // homeInit: () => dispatch(homeInit()),
//   };
// }

export default connect()(AlbumPage);
// mapStateToProps,
// mapDispatchToProps
