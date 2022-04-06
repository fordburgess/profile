import './App.css';
import mexico_warmer from './images/mexico_warmer.jpg'


function App() {
  return (
    <div className="App">
      <div className='intro'>
        <div className='header'>
          <h2 style={{marginBottom: '-10px'}}>Ford Burgess</h2>
          <h4>London, UK</h4>
        </div>
        <img src={mexico_warmer} alt='mexico'/>
      </div>
    </div>
  );
}

export default App;
