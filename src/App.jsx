import { Post } from './Post';
import { Header } from './componets/Header';

import './style.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Joao Paulo Santos"
        content="Wayter foi lavar o carro e chuveu! kkkkk"
      />
      <Post
      author="Wayter Paulo"
      content="Chuva me atrapalhou :´(" 
      />
    </div>
  )
}

