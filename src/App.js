import './App.css';
import Header from './components/header/Header';
import CreateTeam from './components/createteam/CreateTeam';
import MyTeam from './components/myteam/MyTeam';
import { Container } from './MainStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route exact path="/" component={MyTeam} />
        <Route path="/create" component={CreateTeam} />
        <Switch>
          <Route path="/edit/:id" component={CreateTeam} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
