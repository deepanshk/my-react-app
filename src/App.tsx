
import React, { Suspense, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
const PageOne = React.lazy(() => import('./pages/PageOne'));
const PageTwo = React.lazy(() => import('./pages/PageTwo'));


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/page-one">Page One</Link> |{' '}
        <Link to="/page-two">Page Two</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>
                  <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
              </div>
            }
          />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App
