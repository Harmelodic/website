import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Actions from './Actions.js';

export default function TrackMobileView() {
  const dispatch = useDispatch();
  function updateMobileViewTracker() {
    dispatch(Actions.setMobileView(window.innerWidth > 900 ? false : true));
  }

  useEffect(() => {
    updateMobileViewTracker();

    window.addEventListener('resize', updateMobileViewTracker);

    return function cleanup() {
      window.removeEventListener('resize', updateMobileViewTracker);
    };
  }, []);

  return (
    <div />
  );
}
