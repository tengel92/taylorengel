import Navbar from './components/navbar/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-900">
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Resume></Resume>
      {/* <Contact></Contact> */}
    </div>
  );
}

export default App;
