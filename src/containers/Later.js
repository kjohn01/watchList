import React, { useContext } from 'react';
import SeriesContext from '../context/series-context';
import Series from '../components/Series';
import { Row, Col } from 'react-bootstrap';

const Later = props => {

    const context = useContext(SeriesContext);
    let seriesList = context.later.map((series, i) => <Col xs={12} md={4} key={i}>
        <Series  
            id={series.id} 
            title={series.title}
            description={series.description}
            image={series.image}
            action1={() => { 
                context.addToPlaylist(series); 
                context.removeFromLater(series.id);
            }}
            action1Text="Add to Playlist"
        />
    </Col>);
        
    return(
        <Row>
            {
                context.later.length === 0 
                ? <h1>No new series</h1>
                : seriesList
            }
        </Row>
    );
};

export default Later;