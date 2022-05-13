import classNames from'classnames/bind';
import Link from 'next/link';
import styles from './button.module.scss';

let cx = classNames.bind(styles);
// click alert 
function sayHello() {
    alert('李子昕是大哥');
  }
export default function Button({label,path,type}) {
        //className = "btn primary"
    let buttonClasses= cx({
            btn : true,
            primary : type === "primary",
            secondary : type === "secondary"
        });
return (<button className={buttonClasses} onClick={sayHello}>  
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

