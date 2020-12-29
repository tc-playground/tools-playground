import React from "react";
import { connect } from "react-redux";
// NB: 'selectSongs' is a 'named export' (not a default export)
//      so we use curly braces to import it...
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props => { songs: state.songs }
    console.log("SongList render() - this.props: ", this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Take some state from the store.
// NB: Later pass it as props to a react component.
const mapStateToProps = state => {
  console.log("SongList mapStateToProps - state: ", state);
  // Select the required state for the component.
  return { songs: state.songs };
};

// Pass the 'provider state': { songs: state.songs } to the SongList component as props.
// Pass the ' action creator' function : { selectedSong: selectedSong } to the SongList component as props.
// NB: We have to pass the `action creator` to the connector so it can register it with the `redux dispatch function`:
//     `store.dispatch(selectSong(song))`. This passes the created 'action' to all reducers in the redux store.
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
