import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'

import perfilBanner from '../assets/profile-perfil-banner.jpg'
import perfilImg from '../assets/profile-perfil-img.jpg'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={perfilBanner} />
            <div className={styles.profile}>
            <img className={styles.imgProfile} src={perfilImg} />
                <strong>João Paulo Santos</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
