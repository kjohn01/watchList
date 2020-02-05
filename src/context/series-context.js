import React from 'react';

export default React.createContext({
    later: [],
    playlist: [],
    watched: [],
    addToLater: () => {},
    removeFromLater: () => {},
    addToPlaylist: () => {},
    removeFromPlaylist: () => {},
    addToWatched: () => {},
    removeFromWatched: () => {}
});
