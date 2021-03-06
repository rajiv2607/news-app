import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TechNews from './components/TechNews'
import AppleNews  from './components/AppleNews';
import  DashBoard  from './components/Dashboard';

/**
 *  Responsible for Routing to different Components
 * */ 

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={DashBoard}/>
                    <Route path="/technology-news" component={TechNews}/>
                    <Route path="/apple-news" component={AppleNews}/>
                    <Route path="/bitcoin-news" component={TechNews}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
