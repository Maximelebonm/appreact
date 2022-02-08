import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import React, {Suspense} from 'react';
import BaseScreen from './screen/BaseScreen';
import LoadingSpinner from './components/LoadingSpinner';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TestScreen from './screen/testScreen';
const HomeScreen = React.lazy(() => import("./screen/HomeScreen"));
const GenderScreen = React.lazy(() => import("./screen/genderScreen"));
const NotFoundScreen = React.lazy(() => import("./screen/NotFoundScreen"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route 
            index 
            element={ 
              <Suspense fallback={<LoadingSpinner/>}>
                <HomeScreen />
              </Suspense>
            }             
          />
            <Route 
            path="/test"
            element={ 
              <Suspense fallback={<LoadingSpinner/>}>
                <TestScreen />
              </Suspense>
            } 
          />
            <Route 
            path="/gender"
            element={ 
              <Suspense fallback={<LoadingSpinner/>}>
                <GenderScreen />
              </Suspense>
            } 
          />
          <Route 
            path="/gender/:id"
            element={ 
              <Suspense fallback={<LoadingSpinner/>}>
                <GenderScreen />
              </Suspense>
            } 
          />
             <Route 
            path="*"
            element={ 
              <Suspense fallback={<LoadingSpinner/>}>
                <NotFoundScreen />
              </Suspense>
            } 
          />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

