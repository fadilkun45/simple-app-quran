import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DetailSurah from 'components/DetailSurah'
import Home from 'components/Home'
import { Navbar } from 'components/Navbar'
import Search from 'components/Search'
import 'css/app.css'; // adding css fro styling
import { useState } from 'react' // import react


function App() {

  /**
   *  some logic for styling navbar while scrolled with certain height
   * */ 
  const [scrolled, setScrolled] = useState()  


  const scrollListener = () => {
    if (window.scrollY > 15) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener('scroll', scrollListener);


  return (
  <Router>
  <Navbar scrolled={scrolled}/>
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
