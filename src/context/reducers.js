export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const ADD_TO_WATCHED = "ADD_TO_WATCHED";
export const REMOVE_FROM_WATCHED = "REMOVE_FROM_WATCHED";
export const ADD_TO_LATER = "ADD_TO_LATER";
export const REMOVE_FROM_LATER = "REMOVE_FROM_LATER";

const add = (series, list) => {
    let updatedList = [...list];
    updatedList.push(series);
    return updatedList;
};

const remove = (seriesId, list) => {
    let i = 0;
    let updatedList = [...list];
    if (updatedList.length !== 0) i = updatedList.findIndex(series => series.id === seriesId);
    if (i >= 0) updatedList.splice(i, 1);
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