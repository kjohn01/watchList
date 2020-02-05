export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const ADD_TO_WATCHED = "ADD_TO_WATCHED";
export const REMOVE_FROM_WATCHED = "REMOVE_FROM_WATCHED";
export const ADD_TO_LATER = "ADD_TO_LATER";
export const REMOVE_FROM_LATER = "REMOVE_FROM_LATER";

const add = (series, list) => {
    let updatedList = [...list];
    if (updatedList.length === 0 || updatedList.findIndex(e => e.id === series.id) <= 0) updatedList.push(series);
    return updatedList;
};

const remove = (seriesId, list) => {
    let i = 0;
    let updatedList = [...list];
    if (updatedList.length !== 0) i = updatedList.findIndex(series => series.id === seriesId);
    if (i > 0) updatedList.splice(i, 1);
    return updatedList;
};

export const laterReducer = (later, action) => {
    switch (action.type) {
        case ADD_TO_LATER:
            return add(action.series, later);
        case REMOVE_FROM_LATER:
            return remove(action.seriesId, later);
        default:
            return later;
    }
};

export const playlistReducer = (playlist, action) => {
    switch (action.type) {
        case ADD_TO_PLAYLIST:
            return add(action.series, playlist);
        case REMOVE_FROM_PLAYLIST:
            return remove(action.seriesId, playlist);
        default:
            return playlist;
    }
};

export const watchedReducer = (watched, action) => {
    switch (action.type) {
        case ADD_TO_WATCHED:
            return add(action.series, watched);
        case REMOVE_FROM_WATCHED:
            return remove(action.seriesId, watched);
        default:
            return watched;
    }
};
