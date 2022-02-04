
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import GenderScreen from './screen/genderScreen';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<HomeScreen />} />
          <Route path="/gender" element={<GenderScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;

