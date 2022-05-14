import styles from "./col.module.scss"
import className from 'classnames/bind'
let cx = className.bind(styles)


const Col = ({children,xs , sm, md, lg,textAlign="left",alignItems="flex-start",marginBottom,flexDirection="column",justifyContent="flex-start"}) =>{
    let colClasses= cx ({
        col : true,
        [`col-xs-${xs}`] : xs,
        [`col-sm-${sm}`] : sm,
        [`col-md-${md}`] : md,
        [`col-lg-${lg}`] : lg,
        [`text-align-${textAlign}`]: textAlign,
        [`justify-content-${justifyContent}`]: justifyContent,
        [`align-items-${alignItems}`]: alignItems,
        [`flex-direction-${flexDirection}`]: flexDirection,
        [`margin-bottom-${marginBottom}`] : marginBottom

    })

    return <div className={colClasses}>{children}</div>
}
export default Col;