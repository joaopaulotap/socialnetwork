import { Avatar } from './Avatar'
import styles from './Comment.module.css'


import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://scontent.faax1-1.fna.fbcdn.net/v/t1.6435-9/137292917_107978231254617_2454471362041621372_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=TKiOrkl2G1wAX_clek0&_nc_ht=scontent.faax1-1.fna&oh=00_AfDvySIkgAVrpUSYvWVFKvaF0I457xboa0l9uLj2tOf67Q&oe=6550E7B2"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Samuel Almeida</strong>
                            <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">
                            Cerca de 1h atras
                            </time>
                        </div>
                        <button title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito Bom, Parabens!!
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}