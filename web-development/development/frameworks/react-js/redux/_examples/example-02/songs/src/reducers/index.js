import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "Some Song 1", duration: '1:00'},
        { title: "Some Song 2", duration: '2:00'},
        { title: "Some Song 3", duration: '3:00'},
        { title: "Some Song 4", duration: '4:00'},
        { title: "Some Song 5", duration: '5:00'},
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});