import React, { useContext } from 'react';
import SeriesContext from '../context/series-context';
import Series from '../components/Series';
// import { Button } from 'react-bootstrap';

const Playlist = props => {

    const context = useContext(SeriesContext);

    let seriesList = context.playlist.map((series, i) => <Series 
        key={i} 
        id={series.id} 
        title={series.title}
        description={series.description}
        image={series.image}
        action1={() => { 
            context.addToWatched(series);
            context.removeFromPlaylist(series.id);
        }}
        action1Text="Finished!!"
        action2={() => {
            context.addToLater(series);
            context.removeFromPlaylist(series.id);
        }}
        action2Text="Put to watch later"
        />);
        
    return(
        <div className="d-flex justify-content-center">
            {
                context.later.length === 0 
                ? <h1>No series in the playlist</h1>
                : seriesList
            }
            {/* <Button onClick={()=>{console.log(context.later)}}>Show later</Button> */}
        </div>
    );
};

export default Playlist;