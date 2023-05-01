import Link from '@mui/material/Link';
 import './NavLink.css';


export default function NavLinks(){
    return(
        <div className='l'>
            <Link href="#" underline="none" >Home </Link>
            <Link href="#" underline="none">/ About </Link>
        </div>
    );
}