import styles from './Sidebar.module.css'

import perfilBanner from '../assets/profile-perfil-banner.jpg'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={perfilBanner} />
            <div className={styles.profile}>
                <strong>João Paulo Santos</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    );
}