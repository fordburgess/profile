import './App.css';
import Header from './components/Header.js'
import Bio from './components/Bio.js'
import montenegro from './images/montenegro.jpeg'
import stockholm from './images/stockholm.jpeg'
import sanmiguel from './images/sanmiguel.jpeg'
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
       <Header />
        <div className='images'>
          <img src={montenegro} />
          <img src={stockholm} />
          <img src={sanmiguel} />
        </div>
        <Bio />
        <Projects />
    </div>
  );
}

export default App;
