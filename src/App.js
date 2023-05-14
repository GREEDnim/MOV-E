import {Route,Routes} from 'react-router-dom'
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Header from './components/header/header';
function App(){
  
    return(
        <>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/details" element={<Detail/>}></Route>
            </Routes>
        </>

        
    )
}
export default App;