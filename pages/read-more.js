import React from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../store';
import Counter from '../components/counter';
import Example from '../components/examples';

class ReadMore extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <Counter />
         <Example />
      </div>
    );
  }
}

export default connect()(ReadMore);
