import './global.css'
import styles from './App.module.css'

import sheet from './data.json'

// TODO: Uncomment the component you want to use. You can use either functional or class components.
import Sheet from './components/Sheet/Sheet.class'
// import Sheet from './components/Sheet/Sheet.functional'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <header className={styles.header}>
        <div className={styles.logo} />
        <h1 className={styles.heading}>Role Sheet Coding Challenge</h1>
      </header>
      <article className={styles.content}>
        <Sheet sheet={sheet} />
      </article>
    </div>
  )
}

export default App
