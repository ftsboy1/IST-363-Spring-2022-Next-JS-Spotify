import {useState} from 'react'
import Tabs from './Tabs'
import Tracks from './Tracks'
import {
	getTracks, getGenres, filterTracksByGenre
} from '../lib/api'

const TracksByGenre = ( ) => {
	// const [stateVaribale, SetStateFunction] = useState(初始值)
	const tracks = getTracks();
	const genres = getGenres();
	
	const[activeGenre, setActiveGenre] = useState('Country');
	
    return <div> 
        <h2> Top songs by Genre</h2>         
        <Tabs 
        items = {genres} 
        activeItem ={activeGenre}
        clickHandler={setActiveGenre}
        />
        <Tracks items={filterTracksByGenre(tracks, activeGenre)}/>
     </div>
}
export default TracksByGenre;
