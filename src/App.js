import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Friends from './Component/Friends/Friends';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import FriendDetails from './Component/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
   
     <Router>
     <Header></Header>
       <Switch>
         <Route path='/home'>
           <Home></Home>
         </Route>

         <Route path='/about'>
    <About></About>
        </Route>
        <Route path='/friends'>
          <Friends></Friends>
        </Route>

        <Route path='/friend/:friendId'>
          <FriendDetails></FriendDetails>
        </Route>

        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
       </Switch>
       
     </Router>

       
    </div>
  );
}

export default App;
