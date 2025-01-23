import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/Error'
import Header from './components/Header';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/success" component={Success} />
        <Route path="/error" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
