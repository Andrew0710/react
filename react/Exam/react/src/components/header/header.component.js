import classes from './header.module.css'
import { Link } from 'react-router-dom';

export const Header = () => {


    return (
        <header className={classes.container}>

            <div className={classes.title}>coloors</div>
            <div className={classes.allmenu}>
            <div className={classes.menu}>
                <div>Tools 
                    <svg width="20" height="14" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>Go pro</div>
            </div>
            <div className={classes.registration}>
                    <Link to="/login">
                        <button>Sign in</button>
                    </Link>

                   
                    <Link to="/registration">
                        <button>Sign up</button>
                    </Link>
            </div>
            </div>
        </header>
    )
}