import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div>
     <Header />
     <Technologies />
    </div>
  ); 
}

function Header() {
  return (
    <div className="App">
      <a className='app-link' href="#">News</a>
      <a className='app-link' href="#">Messages</a>
      <a className='app-link' href="#">Home</a>
    </div>
  );
}
const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
      
    </div>
  ); 
}


export default App;
