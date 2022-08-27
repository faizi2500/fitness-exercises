import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchExercise from './components/SearchExercise';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SearchExercise />
    </div>
  );
}

export default App;
