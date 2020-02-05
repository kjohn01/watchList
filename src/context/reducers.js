export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const ADD_TO_WATCHED = "ADD_TO_WATCHED";
export const REMOVE_FROM_WATCHED = "REMOVE_FROM_WATCHED";
export const ADD_TO_LATER = "ADD_TO_LATER";
export const REMOVE_FROM_LATER = "REMOVE_FROM_LATER";

const add = (series, list) => {
    console.log("adding series...");
    console.log(series);
    let updatedList = [...list];
    console.log("updatedList before:");
    console.log(updatedList);
    // if (updatedList.length === 0 || updatedList.findIndex(e => e.id === series.id) <= 0) updatedList.push(series);
    // if (updatedList.length === 0) updatedList.push(series);
    updatedList.push(series);
    console.log("updatedList after:");
    console.log(updatedList);
    return updatedList;
};

const remove = (seriesId, list) => {
    console.log("Removing id...");
    console.log(seriesId);
    let i = 0;
    let updatedList = [...list];
    console.log("updatedList before:");
    console.log(updatedList);
    if (updatedList.length !== 0) i = updatedList.findIndex(series => series.id === seriesId);
    if (i > 0) updatedList.splice(i, 1);
    // updatedList.splice(i, 1);
    console.log("updatedList after:");
    console.log(updatedList);
    return updatedList;
};

export const myReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_LATER:
            state = { ...state, later: add(action.series, state.later) };
            break;
        case REMOVE_FROM_LATER:
            state = { ...state, later: remove(action.seriesId, state.later)};
            break;
        case ADD_TO_PLAYLIST:
            state = { ...state, playlist: add(action.series, state.playlist) };
            break;
        case REMOVE_FROM_PLAYLIST:
            state = { ...state, playlist: remove(action.seriesId, state.playlist) };
            break;
        case ADD_TO_WATCHED:
            state = { ...state, watched: add(action.series, state.watched) };
            break;
        case REMOVE_FROM_WATCHED:
            state = { ...state, watched: remove(action.seriesId, state.watched) };
            break;
        default:
            return state;
    }
    return state;
};

// export const laterReducer = (later, action) => {
//     switch (action.type) {
//         case ADD_TO_LATER:
//             return add(action.series, later);
//         case REMOVE_FROM_LATER:
//             return remove(action.seriesId, later);
//         default:
//             return later;
//     }
// };

// export const playlistReducer = (playlist, action) => {
//     switch (action.type) {
//         case ADD_TO_PLAYLIST:
//             return add(action.series, playlist);
//         case REMOVE_FROM_PLAYLIST:
//             return remove(action.seriesId, playlist);
//         default:
//             return playlist;
//     }
// };

// export const watchedReducer = (watched, action) => {
//     switch (action.type) {
//         case ADD_TO_WATCHED:
//             return add(action.series, watched);
//         case REMOVE_FROM_WATCHED:
//             return remove(action.seriesId, watched);
//         default:
//             return watched;
//     }
// };
