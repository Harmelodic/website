import React from 'react';
import { Store } from '../Store.js';
import Actions from './Actions.js';

export default class TrackMobileView extends React.Component {
  constructor(props) {
    super(props);
    this.updateMobileViewTracker = this.updateMobileViewTracker.bind(this);
  }

  componentDidMount() {
    this.updateMobileViewTracker();
    window.addEventListener('resize', this.updateMobileViewTracker);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateMobileViewTracker);
  }

  updateMobileViewTracker() {
    Store.dispatch(
        Actions.setMobileView(window.innerWidth > 900 ? false : true),
    );
  }

  render() {
    return (
      <div />
    );
  }
}
