import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Wrap} from './styles';

export class Home extends React.Component {
  render() {
    const {label} = this.props;
    return (
      <Wrap>
        <article>
          <h1>{label}</h1>
          <hr />
          <p>This is your new home page.</p>
        </article>
      </Wrap>
    );
  }
}

Home.propTypes = {
  label: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    label: state.home.label,
  };
}

export default connect(mapStateToProps)(Home);
