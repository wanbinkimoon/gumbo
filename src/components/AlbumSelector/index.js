import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Select, Button, Form} from 'antd';

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

class AlbumSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const {} = this.props;
  }

  handleSave = () => {};

  render() {
    return (
      <Form>
        <Form.Item {...formItemLayout} label="Album name">
          <Select size="large">
            <Select.Option value="kind-of-blue">Kind of Blue</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button onClick={() => this.handleSave()} type="primary" icon="save">
            Save in local store
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

AlbumSelector.propTypes = {};

AlbumSelector.defaultProps = {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(AlbumSelector));
