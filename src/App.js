import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DetailSurah from './DetailSurah'
import Home from './Home'
import { Navbar } from './Navbar'
import Search from './Search'


function App() {


  return (
  <Router>
  <Navbar />
   <main>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/surah/:id">
      <DetailSurah />
    </Route>
    <Route path="/result/:id">
      <Search />
    </Route>
   </main>
   </Router>
  );
}

export default App;
