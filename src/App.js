import {Route,Routes} from 'react-router';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
