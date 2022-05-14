import styles from './main.module.scss'
import classNames from 'classnames';



const Main =({children})=>{
    return <main className={styles.main}>{children}</main>
}

export default Main;