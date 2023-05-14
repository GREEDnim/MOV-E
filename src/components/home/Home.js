import {useState,useEffect} from 'react';
import axios from 'axios';
import MovieCard from '../movieCard/MovieCard';
import './Home.css'

function Home(){

    

    const[search,setSearch]=useState("");
    const [fetchedData, setfetchedData] = useState(null);

    useEffect(() => {
        fetchData();
      }, [search])

    function changeSearchField(e){
        setSearch(e.target.value);
    }
    async function fetchData(){
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dd6c9e75&s=${search}`);
            setfetchedData(data.Search);
        } catch (error) {
            console.log(error)
        }
    }
    
return(
    
    <>
        <div className="search-container">
        <input type="text" className='search-input' placeholder='search ra elai' onChange={changeSearchField} ></input>
        </div>
        
        <div className='movie-cards'>
            {
                fetchedData?fetchedData.map(item => {
                    return <MovieCard title={item.Title} year={item.Year} src={item.Poster} id={item.imdbID} ></MovieCard>
                }) :<div className="not-searched-yet">🔝</div>
            }
       </div>
    </>
)
}
export default Home;