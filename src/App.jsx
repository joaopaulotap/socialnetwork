import { Post } from './componets/Post';
import { Header } from './componets/Header';
import { Sidebar } from './componets/Sidebar';

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post />
        <Post />
        </main>
      </div>
      
    </div>
  )
}

