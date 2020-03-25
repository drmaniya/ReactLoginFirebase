import React from 'react';
import Login from './component/Login';
import { Switch , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <React.Fragment>
      	   <Switch>
      	   <Route exact path="/" component={Login} />
      	   	<Route path="/home" component={Home} />
           </Switch>
      </React.Fragment>
    

    </div>
  );
}

export default App;
