import { useState } from 'react';
import './App.css';
import ExerciseComponent from './components/ExerciseComponent';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchExercise from './components/SearchExercise';

function App() {
  const [bodyPartSelected, setBodyPartSelected] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <SearchExercise
        setExercises={setExercises}
        bodyPartSelected={bodyPartSelected}
        setBodyPartSelected={setBodyPartSelected}
      />
      <ExerciseComponent
        exercises={exercises}
        bodyPartSelected={bodyPartSelected}
      />
    </div>
  );
}

export default App;
