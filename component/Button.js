import styles from  "./button.module.scss";
import classNames from'classnames/bind';
import Link from 'next/link';


let cx = classNames.bind(styles);
// click alert 

export default function Button({label,path,type}) {
        //className = "btn primary"
    let buttonClasses= cx({
            btn : true,
            primary : type === "primary",
            secondary : type === "secondary"
        });
return (<button className={buttonClasses} >  
    {path ?
        <Link href={path}>
        <a>
        {label}
        </a>
         </Link>
    :
       label
    }   

    
           
     </button> ) 
}



//second 

