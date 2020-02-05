import React, { useReducer } from 'react';
import SeriesContext from './series-context';
import { myReducer, ADD_TO_LATER, REMOVE_FROM_LATER, ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, ADD_TO_WATCHED, REMOVE_FROM_WATCHED } from './reducers';

const GlobalState = props => {
    const InitialSeries = [
        {
            id: "001",
            title: "The Witcher",
            description: `
            Geralt of Rivia is a witcher, a mutant with special powers who kills monsters for money. The land is in a state of turmoil, due to the empire of Nilfgaard seeking to enlarge its territory. Among the refugees of this struggle is Cirilla, also known as Ciri, the Princess of Cintra, who is persecuted by Nilfgaard. She and Geralt are destinied to each other. In his adventures Geralt also meet Yennefer, a sorceress.`,
            image: "https://i.ytimg.com/vi/ndl1W4ltcmg/maxresdefault.jpg"
        },
        {
            id: "002",
            title: "Sense8",
            description: `
            The story of Sense8 begins when the psychic connection of eight strangers from different cultures and parts of the world is "birthed" by a woman called Angelica, who kills herself to avoid capture by a man named "Whispers". The eight eventually discover they now form a cluster of "sensates": human beings who are mentally and emotionally linked, can sense and communicate with each other, and can share their knowledge, language, and skills.`,
            image: "https://occ-0-987-990.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABZvo5er7M78_rzfB3QIsJ9StGyXItSe-21MCuFEQSIf9t7sZzLMwXqlfM_KwSo5Go966xLmIrSt_YUnW0SlLvdxhtJB4LhVm9fGrG7uDmzZaPRQUEs_j.jpg?r=af3"
        },
        {
            id: "003",
            title: "Game of Thrones",
            description: `
            Game of Thrones is roughly based on the storylines of A Song of Ice and Fire, set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series chronicles the violent dynastic struggles among the realm's noble families for the Iron Throne, while other families fight for independence from it. It opens with additional threats in the icy North and Essos in the east.`,
            image: "https://i.ytimg.com/vi/DkdbetJTZGA/maxresdefault.jpg"
        }
    ];

    const InitialState = { later: InitialSeries, playlist: [], watched: [] };

    const [state, dispatch] = useReducer(myReducer, InitialState);

    const addToLater = series => {
        console.log("dispatch addToLater");
        dispatch({ type: ADD_TO_LATER, series });
        console.log("later in the context:");
        console.log(state.later);
    };

    const removeFromLater = seriesId => {
        console.log("dispatch removeFromLater");
        dispatch({ type: REMOVE_FROM_LATER, seriesId });
        console.log("later in the context:");
        console.log(state.later);
    };

    const addToPlaylist = series => {
        console.log("dispatch addToPlaylist");
        dispatch({ type: ADD_TO_PLAYLIST, series });
        console.log("playlist in the context:");
        console.log(state.playlist);
    };

    const removeFromPlaylist = seriesId => {
        console.log("dispatch removeFromPlaylist");
        dispatch({ type: REMOVE_FROM_PLAYLIST, seriesId });
        console.log("playlist in the context:");
        console.log(state.playlist);
    };

    const addToWatched = series => {
        console.log("dispatch addToWatched");
        dispatch({ type: ADD_TO_WATCHED, series });
        console.log("watched in the context:");
        console.log(state.watched);
    };

    const removeFromWatched = seriesId => {
        console.log("dispatch removeFromWatched");
        dispatch({ type: REMOVE_FROM_WATCHED, seriesId });
        console.log("watched in the context:");
        console.log(state.watched);
    };

    return(
        <SeriesContext.Provider 
            value={{
                later: state.later,
                playlist: state.playlist,
                watched: state.watched,
                addToLater,
                removeFromLater,
                addToPlaylist,
                removeFromPlaylist,
                addToWatched,
                removeFromWatched
            }}>
            {props.children}
        </SeriesContext.Provider>
    );
};

export default GlobalState;