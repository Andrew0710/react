import { useState } from 'react'; 
import classes from './registration.module.css';
import { Link } from 'react-router-dom'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

export const Registration = () => {
    
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={classes.fullScreen}>
            
            <div className={classes.leftSide}>
                <div className={classes.centerContent}>
                    <div className={classes.formBox}>
                        <div className={classes.headerText}>Sign up!</div>
                        <div className={classes.description}>Create a free account with your email.</div>
                        
                        <div className={classes.inputsGroup}>
                            <input className={classes.stdInput} type="text" placeholder="Full Name"/>
                            <input className={classes.stdInput} type="email" placeholder="Email"/>
                            
                           
                            <div className={classes.passContainer}>
                                <input 
                                    className={classes.stdInput} 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Password"
                                />
                                
                                <span className={classes.eyeBtn} onClick={togglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            
                            <Link to="/" className={classes.submitBtn}>Create your free account</Link>
                        </div>
                        
                        <span>Already have an account? <Link className={classes.blueLink} to="/login">Sign in</Link></span>
                        
                    </div>
                </div>
                
                <div className={classes.footerText}>
                        By continuing, you agree to our <a href="#">Terms of Service</a>. Read our <a href="#">Privacy Policy</a>.
                </div>
            </div>
            
           
            <div className={classes.rightSideBg}></div>
        </div>
    );
};