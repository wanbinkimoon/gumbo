import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Input, Button, Form} from 'antd';

import {searchInit} from '../../stores/Search';

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 8},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {
        name: null,
        year: null,
      },
    };
  }

  handleSubmit = e => {
    e.preventDefault;
    const {searchInit} = this.props;
    const {album} = this.state;
    searchInit(album);
  };

  render() {
    const {album} = this.state;
    return (
      <Form>
        <Form.Item {...formItemLayout} label="Album name">
          <Input
            onChange={e =>
              this.setState({
                album: {
                  ...album,
                  name: e.target.value,
                },
              })
            }
            value={album.name}
            size="large"
            placeholder="es. kind of blues"
          />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Album year">
          <Input
            onChange={e =>
              this.setState({
                album: {
                  ...album,
                  year: e.target.value,
                },
              })
            }
            value={album.year}
            size="large"
            placeholder="es. 1959"
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            onClick={e => this.handleSubmit(e)}
            htmlType="submit"
            type="primary"
            icon="search">
            Search on services
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

FormSearch.propTypes = {
  searchInit: PropTypes.func.isRequired,
};

FormSearch.defaultProps = {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    searchInit: album => dispatch(searchInit(album)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(FormSearch));
