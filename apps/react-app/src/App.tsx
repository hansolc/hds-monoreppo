import { useEffect, useState } from 'react';
import { Button } from '@hds/ui';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count', count);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h2>@hds/ui 공유 컴포넌트</h2>
        <p>아래 버튼은 packages/ui에서 가져온 공유 Button 컴포넌트입니다.</p>
        <Button
          onClick={() => alert('React + Vite에서 실행된 Button 컴포넌트!')}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}
        >
          React Button 클릭!
        </Button>
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
