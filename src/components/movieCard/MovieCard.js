import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateMovie } from '../../Slices/movieSlice';
import axios from 'axios';

import './MovieCard.css'

function MovieCard({title,year,src,id}){

    const dispatch = useDispatch();

    const updateStore = () => {
        dispatch(fetchMovie(id));
      };
    
    const fetchMovie = (id) => async (dispatch) => {
        try {
          const movie = await axios.get(`https://www.omdbapi.com/?apikey=dd6c9e75&i=${id}&plot=full`);
          console.log(movie); 
          dispatch(updateMovie(movie.data));
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <Link to="/details"  onClick={updateStore}>
            <div className="movie-card" id={id}>
                <img src={src} alt={title} className="movie-poster" />
                <div className="movie-details">
                    <h2 className="movie-title">{title}</h2>
                    <p className="movie-year">{year}</p>
                </div>
            </div>
        </Link>
        
    )
}
export default MovieCard;