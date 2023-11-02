import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Article from './Pages/Article';
import Articles from './Pages/Articles';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
function App() {
  return (
    <Router>
    <Navbar/>
    <div className="max-w-screen-md mx-auto pt-20">
    <Routes>  
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/articles' element={<Articles/>}/>
    <Route path='/article/:name' element={<Article/>}/>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
