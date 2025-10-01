'use client'

import { Button } from '@hds/ui'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Next.js App with Shared UI</h1>
        <p>이 버튼은 @hds/ui 패키지에서 가져온 공유 컴포넌트입니다.</p>
        <Button
          test={123}
          onClick={() => alert('Next.js에서 실행된 Button 컴포넌트!')}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Next.js Button 클릭!
        </Button>
      </main>
    </div>
  )
}
