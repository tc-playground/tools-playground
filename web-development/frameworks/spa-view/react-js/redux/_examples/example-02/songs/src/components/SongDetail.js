import React from "react";

import { connect } from "react-redux";

const SongDetail = props => {
  console.log("SongDetail- Functional Component - props: ", props);
  const { song } = props;
  if (!song) {
    return <div>Select a song.</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

// Get the required state from the store.
const mapStateToProps = state => {
  console.log("SongDetail mapStateToProps() - state: ", state);
  // Will get passed into `props` of functional component.
  return { song: state.selectedSong };
  // NB: When I accidentally had this: `return { song: state.SelectedSong };`
  //     The state of 'song' in the functional component was `undefined` instead
  //     of `null` on first render. This prevented the component being called
  //     for re-render when actions were dispatched - hence leaving me confused!
  //     Be careful of typos!
};

export default connect(mapStateToProps)(SongDetail);
