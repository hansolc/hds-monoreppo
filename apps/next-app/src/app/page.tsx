"use client";

import { Button } from "@repo/ui";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCount((prev) => prev + 1);
    setIsLoading(false);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Design System Demo</h1>
        <p>@repo/ui 라이브러리를 사용한 Next.js 앱</p>

        <div className={styles.cta}>
          <h2>Button 컴포넌트 예시</h2>
          <p>Count: {count}</p>

          {/* Primary 버튼 */}
          <div className={styles.buttonGroup}>
            <Button
              variant="primary"
              size="sm"
              onClick={handleClick}
              isLoading={isLoading}
            >
              Small Primary
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleClick}
              isLoading={isLoading}
            >
              Medium Primary
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleClick}
              isLoading={isLoading}
            >
              Large Primary
            </Button>
          </div>

          {/* Secondary 버튼 */}
          <div className={styles.buttonGroup}>
            <Button variant="secondary" onClick={() => setCount(0)}>
              Reset Count
            </Button>
            <Button
              variant="outline"
              leftIcon="👈"
              onClick={() => console.log("Outline clicked")}
            >
              With Left Icon
            </Button>
            <Button
              variant="ghost"
              rightIcon="👉"
              onClick={() => console.log("Ghost clicked")}
            >
              With Right Icon
            </Button>
          </div>

          {/* Danger & Full Width */}
          <div className={styles.buttonGroup}>
            <Button variant="danger" onClick={() => alert("Danger action!")}>
              Danger Button
            </Button>
            <Button
              variant="primary"
              fullWidth
              onClick={() => alert("Full width!")}
            >
              Full Width Button
            </Button>
          </div>

          {/* Disabled */}
          <div className={styles.buttonGroup}>
            <Button variant="primary" disabled>
              Disabled Button
            </Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Built with{" "}
          <a
            href="https://turborepo.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Turborepo
          </a>
          {" + "}
          <a
            href="https://vanilla-extract.style"
            target="_blank"
            rel="noopener noreferrer"
          >
            vanilla-extract
          </a>
          {" + "}
          <a
            href="https://tsup.egoist.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            tsup
          </a>
        </p>
      </footer>
    </div>
  );
}
