import styles from "./col.module.scss"
import className from 'classnames/bind'
let cx = className.bind(styles)


const Col = ({children,xs , sm, md, lg,textAlign="left"}) =>{
    let colClasses= cx ({
        col : true,
        [`col-xs-${xs}`] : xs,
        [`col-sm-${sm}`] : sm,
        [`col-md-${md}`] : md,
        [`col-lg-${lg}`] : lg,
        [`text-align-${textAlign}`]: textAlign
    })

    return <div className={colClasses}>{children}</div>
}
export default Col;