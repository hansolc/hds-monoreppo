import { useState } from "react";
import { Button } from "@repo/ui";
import "@repo/ui/styles"; // UI 라이브러리 스타일 import
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncIncrement = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCount((count) => count + 1);
    setIsLoading(false);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + @repo/ui</h1>

      <div className="card">
        <p>Count: {count}</p>

        {/* UI 라이브러리 Button 사용 */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            size="lg"
            onClick={handleAsyncIncrement}
            isLoading={isLoading}
            variant="primary"
          >
            Increment (Async)
          </Button>

          <Button variant="secondary" onClick={() => setCount(count + 1)}>
            Quick Increment
          </Button>

          <Button variant="outline" onClick={() => setCount(0)}>
            Reset
          </Button>

          <Button variant="danger" onClick={() => setCount(count - 1)}>
            Decrement
          </Button>
        </div>

        <p style={{ marginTop: "2rem" }}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        디자인 시스템의 Button 컴포넌트를 Vite 프로젝트에서 사용하는 예시입니다.
      </p>
    </>
  );
}

export default App;
