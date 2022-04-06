import './App.css';
import montenegro from './images/montenegro.jpeg'
import stockholm from './images/stockholm.jpeg'
import sanmiguel from './images/sanmiguel.jpeg'

function App() {
  return (
    <div className="App">
      <div className='intro'>
        <div className='header'>
          <h2 style={{marginBottom: '-10px'}}>Ford Burgess</h2>
          <h4>London, UK</h4>
        </div>
        <div className='images'>
          <img src={montenegro} />
          <img src={stockholm} />
          <img src={sanmiguel} />
        </div>
      </div>
    </div>
  );
}

export default App;
