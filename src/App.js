import './App.css';
import Navbar from './components/navbarComponent/navbar.component';
import Footer from './components/footerComponent/footer.component';
import HomePage from './pages/homePage/hompage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
