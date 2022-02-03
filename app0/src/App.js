//import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { GenderScreen } from './screen/genderScreen';
import { HomeScreen } from './screen/HomeScreen';


function App(){

  return (<div className="App">
    <Header/>
    <HomeScreen/>
    <Footer/>

    </div>
  );
}

export default App;

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>