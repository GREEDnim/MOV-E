
import { useSelector } from "react-redux";
import '../detail/Detail.css'
function Detail(){
    const movie = useSelector((state) => {
        return  state.movie.value;
      });
    
    if(!movie) {
        console.log("movie",movie);
        return <></>
    }
    const {
        Title,Year,Rated,Released,Runtime,Genre,Director,Writer,Actors,Plot,Language,Country,Awards,Poster,Ratings,Metascore,imdbRating,imdbVotes,imdbID,Type,DVD,BoxOffice,Production,Website,
      } = movie;
    
      return (
        <div className="movie-details">
          <div className="poster">
            <img src={Poster} alt="Movie poster" />
          </div>
          <div className="info"> 
            <h1>{Title}</h1>
            <p>
              <strong>Year: </strong>
              {Year}
            </p>
            <p>
              <strong>Rated: </strong>
              {Rated}
            </p>
            <p>
              <strong>Released: </strong>
              {Released}
            </p>
            <p>
              <strong>Runtime: </strong>
              {Runtime}
            </p>
            <p>
              <strong>Genre: </strong>
              {Genre}
            </p>
            <p>
              <strong>Director: </strong>
              {Director}
            </p>
            <p>
              <strong>Writer: </strong>
              {Writer}
            </p>
            <p>
              <strong>Actors: </strong>
              {Actors}
            </p>
            <p>
              <strong>Plot: </strong>
              {Plot}
            </p>
            <p>
              <strong>Language: </strong>
              {Language}
            </p>
            <p>
              <strong>Country: </strong>
              {Country}
            </p>
            <p>
              <strong>Awards: </strong>
              {Awards}
            </p>
            <p>
              <strong>Ratings: </strong>
              {Ratings?Ratings.map((rating) => (
                <span key={rating.Source}>
                  {rating.Source}: {rating.Value} <br />
                </span>
              )):null}
            </p>
            <p>
              <strong>Metascore: </strong>
              {Metascore}
            </p>
            <p>
              <strong>IMDb Rating: </strong>
              {imdbRating}
            </p>
            <p>
              <strong>IMDb Votes: </strong>
              {imdbVotes}
            </p>
            <p>
              <strong>IMDb ID: </strong>
              {imdbID}
            </p>
            <p>
              <strong>Type: </strong>
              {Type}
            </p>
            <p>
              <strong>DVD: </strong>
              {DVD}
            </p>
            <p>
              <strong>Box Office: </strong>
              {BoxOffice}
            </p>
            <p>
              <strong>Production: </strong>
              {Production}
            </p>
            <p>
              <strong>Website: </strong>
              <a href={Website}>{Website}</a>
            </p>
          </div>
        </div>
      );
}
export default Detail;