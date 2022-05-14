
import styles from './heading.module.scss'
import className from 'classnames/bind'
//cx could be any name
let cx = className.bind(styles)



const Heading = ({children, level, marginBottom}) =>{
   
    let headingClasses = cx({
        heading : true,
        heading1 : level === "1",
        heading2 : level === "2",
        heading3 : level === "3",
        heading4 : level === "4",
        [`margin-bottom-${marginBottom}`] : marginBottom,
    });
 if (level === "1") {
    return   <h1 className={headingClasses}>{children}</h1> 
} else if  (level === "2") {
    return   <h2 className={headingClasses}> {children} </h2> 
}  else if (level === "3") {
    return   <h3 className={headingClasses}>{children}</h3> 
}  else if (level === "4") {
    return   <h4 className={headingClasses}>{children}</h4> 
}

     
 else 
    return <p> </p>}

export default Heading;