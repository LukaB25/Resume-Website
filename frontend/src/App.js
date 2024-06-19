import appStyles from './App.module.css';
import NavBar from './components/NavBar';

import { Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Homepage from './pages/homepage/Homepage';
import HeroSection from './components/HeroSection';
import Education from './pages/education/Education';

function App() {
  return (
    <div className={appStyles.App}>
      <NavBar />
      <Container className={appStyles.PaddingTop}>
        <HeroSection />
        <Switch>
          <Route exact path='/' render={() => <Homepage />} />
          <Route exact path='/education' render={() => <Education />} />
          <Route exact path='/experience' render={() => <h1>Experience</h1>} />
          <Route exact path='/skills' render={() => <h1>Skills</h1>} />
          <Route exact path='/projects' render={() => <h1>Projects</h1>} />
          <Route exact path='/contact' render={() => <h1>Contact</h1>} />
          {/* <Route exact path='/' render={() => <h1>Homepage</h1>} /> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;