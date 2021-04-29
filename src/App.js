import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import {exploringData} from "./data";
import {whyHiking} from "./data";
import {destinations} from "./data";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import Mountain from './components/Mountain';
import MountainDetails from './pages/MountainDetails';
import About from './pages/About';


function App() {
  return (
   <div>
    
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home exploreData={exploringData} whyHiking={whyHiking} />
      </Route>
      <Route path="/destinations" component={Destinations}>
        <Destinations destinations={destinations} />
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>
      <Route path="/contact" component={Contact}>
        <Contact />
      </Route>
      <Route path="/mountain/:id">
          <MountainDetails />
        </Route>
    </Switch>
    <Footer />
   
   
   </div>
  );
}

export default App;
