import React from 'react';
import PropTypes from 'prop-types';

// import {FormattedMessage} from 'react-intl';
// import messages from './messages';

import {Wrap} from './styles';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {label} = this.props;
    return (
      <Wrap>
        <button>{label}</button>
      </Wrap>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: 'this is a button',
};

export default Button;
