import React, { useContext } from 'react';
import SeriesContext from '../context/series-context';
import Series from '../components/Series';
// import { Button } from 'react-bootstrap';

const Later = props => {

    const context = useContext(SeriesContext);
    let seriesList = context.later.map((series, i) => <Series 
        key={i} 
        id={series.id} 
        title={series.title}
        description={series.description}
        image={series.image}
        action1={() => { 
            context.addToPlaylist(series); 
            context.removeFromLater(series.id);
        }}
        action1Text="Add to Playlist"
        />);
        
    return(
        <div className="d-flex justify-content-center">
            {seriesList}
            {/* <Button onClick={()=>{console.log(context.later)}}>Show later</Button> */}
        </div>
    );
};

export default Later;