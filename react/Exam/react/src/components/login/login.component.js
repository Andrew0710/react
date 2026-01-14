import classes from './login.module.css'; 
import { Link } from 'react-router-dom'; 
import { FcGoogle } from 'react-icons/fc'; 
import { FaApple } from 'react-icons/fa';  

export const Login = () => {
    return (
        <div className={classes.fullScreen}>
            
            <div className={classes.leftSide}>
                <div className={classes.centerContent}>
                    <div className={classes.loginBox}>
                        <div className={classes.headerText}>Hello!</div>
                        <div className={classes.description}>Use your email or another service to continue with Coolors.</div>

                        <div className={classes.buttonsGroup}>
                            
                           
                            <Link to="/registration" className={classes.simpleBtn}>
                                <FcGoogle className={classes.myIcon} size={24} />
                                <span>Continue with Google</span>
                            </Link>

                            <Link to="/registration" className={classes.simpleBtn}>
                                <FaApple className={classes.myIcon} size={24} />
                                <span>Continue with Apple</span>
                            </Link>

                            <div className={classes.orLine}>
                                <span className={classes.orText}>OR</span>
                            </div>

                            
                            <Link to="/registration" className={classes.blueBtn}>
                                Continue with email
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className={classes.bottomLinks}>
                    By continuing, you agree to our <a href="#">Terms of Service</a>. Read our <a href="#">Privacy Policy</a>.
                </div>
            </div>
            
           
            <div className={classes.rightSideBg}></div>
        </div>
    );
};