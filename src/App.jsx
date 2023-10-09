import { Post } from './Post';
import { Header } from './componets/Header';

import styles from './App.module.css'

import './global.css';
import { Sidebar } from './componets/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="Joao Paulo Santos"
        content="Wayter foi lavar o carro e chuveu! kkkkk"
        />
        <Post
        author="Wayter Paulo"
        content="Chuva me atrapalhou :´(" 
        />
        </main>
      </div>
      
    </div>
  )
}

