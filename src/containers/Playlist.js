import React, { useContext } from 'react';
import SeriesContext from '../context/series-context';
import Series from '../components/Series';
import { Row, Col } from 'react-bootstrap';

const Playlist = props => {

    const context = useContext(SeriesContext);

    let seriesList = context.playlist.map((series, i) => <Col xs={12} md={4} key={i}>
        <Series 
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
            action2Text="Watch Later"
        />
    </Col>);
        
    return(
        <Row>
            {
                context.playlist.length === 0 
                ? <h1>No series in the playlist</h1>
                : seriesList
            }
        </Row>
    );
};

export default Playlist;