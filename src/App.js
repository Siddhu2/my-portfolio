import {Route,Routes} from 'react-router';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/project';
import MainNavigation from './components/layouts/MainNavigation';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
