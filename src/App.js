import './App.css';
import Navbar from './components/navbarComponent/navbar.component';
import Footer from './components/footerComponent/footer.component';
import HomePage from './pages/homePage/hompage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
