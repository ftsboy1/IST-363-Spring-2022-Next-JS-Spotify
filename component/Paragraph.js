import styles from './paragraph.module.scss'
import className from 'classnames/bind'

let cx = className.bind(styles)

const paragraph = ({children, intro , marginBottom}) =>{
    let introparagraph = cx({
        paragraph: true,
        [`margin-bottom-${marginBottom}`] : marginBottom,
        intro : intro
    })
    return <p className = {introparagraph}>{children}</p>
}

export default paragraph;