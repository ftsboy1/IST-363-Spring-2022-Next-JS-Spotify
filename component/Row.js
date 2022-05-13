import className from 'classnames/bind'
import styles from './row.module.scss'

let cx = className.bind(styles)

const Row = ({children,justifyContent,alignItem}) => {
    let Rowclass = cx({
        row : true,
        [`justify-content-${justifyContent}`]: justifyContent,
        [`align-items-${alignItem}`] : alignItem
    });
    return <div className={Rowclass}>
        {children}
    </div>
}
export default Row;