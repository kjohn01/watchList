import React, { useContext } from 'react';
import SeriesContext from '../context/series-context';
import Series from '../components/Series';
import { Row, Col } from 'react-bootstrap';

const Watched = props => {

    const context = useContext(SeriesContext);
    let seriesList = context.watched.map((series, i) => <Col xs={12} md={4} key={i}>
        <Series 
            id={series.id} 
            title={series.title}
            description={series.description}
            image={series.image}
            action1={() => { 
                context.addToLater(series);
                context.removeFromWatched(series.id);
            }}
            action1Text="Watch Later"
            action2={() => {
                context.addToPlaylist(series);
                context.removeFromWatched(series.id);
            }}
            action2Text="Add to playlist"
        />
    </Col>);
        
    return(
        <Row>
            {
                context.watched.length === 0 
                ? <h1>No series watched</h1>
                : seriesList
            }
        </Row>
    );
};

export default Watched;