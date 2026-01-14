
import classes from './container6.module.css';
import { HoverColorLetters } from '../../hoverColorLetters/hoverColorLetters.js'

export const Container6 = () => {
    return (
        <div className={classes.container}>
            <h3>Plugins and Apps</h3>

            <div className={classes.buttons}>
                <button> IOS APP</button>
                <button> FIGMA PlUGIN</button>
                <button> ADOBE EXTENSION</button>
            </div>
            <div className={classes.maintext}>
                <HoverColorLetters
                    text="Make something coolorful!"
                    defaultColor="#E5E5E5"
                    colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
                    className={classes.title}
                />
            </div>
        </div>
    );
};