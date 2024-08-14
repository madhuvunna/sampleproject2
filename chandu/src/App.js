import './App.css';
import React from 'react';
import Counter from './Components/Counter';
import AutoFocusInput from './Components/AutoFocusInput';
import FetchData from './Components/FetchData';
import ReducerCounter from './Components/ReducerCounter';
import ThemeSwitcher from './Components/ThemeSwitcher';
import { ThemeProvider } from './ThemeContext';

import DragAndDrop from './Components/DragAndDrop';

import ErrorBoundary from './Chandu/ErrorBoundary';
import ErrorProneComponent from './Chandu/ErrorProneComponent';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
                <Counter />
                <FetchData />
                <ThemeSwitcher />
                <ReducerCounter />
                <AutoFocusInput />

       <h1>React Drag and Drop</h1>
       <DragAndDrop/>

       <h1>Error Boundary Example</h1>
       <ErrorBoundary/>
       <ErrorProneComponent/>
    </div>
    </ThemeProvider>
  );
}

export default App;
