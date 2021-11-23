import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import NasaPhoto from './components/NasaPhoto';
import NASAimages from './components/NASAimages';
import ISSlocater from './components/ISSlocater';
import SpaceFacts from './components/SpaceFacts';
import SpaceFactForm from './components/SpaceFactForm';
import background from "./images/double-bubble-dark.png"

function App() {
  return (
    <BrowserRouter>
      <div id="background" style={{backgroundImage: `url(${background})`}} className="App">
        <Switch>

          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>

          <Route exact path="/nasapic">
            <NasaPhoto></NasaPhoto>
          </Route>

          <Route exact path="/nasaimages">
            <NASAimages></NASAimages>
          </Route>

          <Route exact path="/issLocation">
            <ISSlocater></ISSlocater>
          </Route>

          <Route exact path="/spaceFacts">
            <SpaceFacts></SpaceFacts>
          </Route>

          <Route exact path="/spaceFactForm">
            <SpaceFactForm></SpaceFactForm>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
