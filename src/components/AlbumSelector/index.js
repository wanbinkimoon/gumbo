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
    const {spotify} = this.props;
    const spotifyData = Object.keys(spotify);
    spotifyData.map(t =>
      this.setState({
        [t]: spotify[t][0],
      })
    );
  }

  handleSave() {
    console.log('HANDLE SAVE');
  }

  render() {
    const {spotify} = this.props;
    const spotifyData = Object.keys(spotify);
    return (
      <Form>
        {spotifyData.map(t => (
          <Form.Item key={t} {...formItemLayout} label={t}>
            <Select
              onChange={v =>
                this.setState({
                  [t]: v,
                })
              }
              defaultValue={spotify[t][0]}
              size="large">
              {spotify[t].map(d => (
                <Select.Option key={d} value={d}>
                  {d}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ))}
        <Form.Item {...tailFormItemLayout}>
          <Button onClick={() => this.handleSave()} type="primary" icon="save">
            Save in local store
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

AlbumSelector.propTypes = {
  spotify: PropTypes.object.isRequired,
};

AlbumSelector.defaultProps = {};

function mapStateToProps(state) {
  return {
    spotify: state.search.spotify,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(AlbumSelector));
