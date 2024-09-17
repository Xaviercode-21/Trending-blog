//import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  console.log("Components rendered")
  //here you can write any valid javascript code
  //we cannot output booleans and objects
  //const title='App Component';
  //const subscribers=5000;
  //const link="http://www.google.com";
  //below was in the return section
  /*
  <h2>{title}</h2>
  <p>Site has {subscribers} subscribers</p>
      <p>{"hello "}</p>
        <p>{Math.random()*20}</p>
        <a href={link}>Google site</a>*/
  return (
       // <div> <h1>Testing this</h1></div>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/blog/:id" element={<BlogDetails/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
