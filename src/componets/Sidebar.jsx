import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'

import perfilBanner from '../assets/profile-perfil-banner.jpg'
import { Avatar } from './Avatar';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={perfilBanner} />
            <div className={styles.profile}>
            <Avatar src="./src/assets/profile-perfil-img.jpg"/>
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
