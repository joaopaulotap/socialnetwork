import { Post } from './componets/Post';
import { Header } from './componets/Header';
import { Sidebar } from './componets/Sidebar';

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaopaulotap.png',
      name: 'João Paulo Santos',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia.'},

      { type: 'paragraph', content: 'Testando Primeiro Post da nova Rede Social!!!'},

      { type: 'link', content: 'github.com/joaopaulotap'},
    ],
    publishedAt: new Date('2023-10-13 12:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/wayter95.png',
      name: 'Wayter Paulo',
      role: 'Developer Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Bom Dia Pessoal'},

      { type: 'paragraph', content: 'Consegui hoje o telefone do Tio Elon, muito gnt fina'},

      { type: 'link', content: 'github.com/wayter95'},
    ],
    publishedAt: new Date('2023-10-13 13:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
      
    </div>
  )
}

