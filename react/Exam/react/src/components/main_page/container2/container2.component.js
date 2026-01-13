import { useState, useEffect } from 'react';
import classes from './container2.module.css'
import { HoverColorLetters } from '../../hoverColorLetters/hoverColorLetters.js'
import { ReactComponent as AndMuchMoreSvg } from '../../imgs/and_much_more.svg';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
const generateRandomPalette = () => {
    return [
        getRandomColor(),
        getRandomColor(),
        getRandomColor(),
        getRandomColor(),
        getRandomColor()
    ];
};
export const Container2 = () => {
    const [currentColors, setCurrentColors] = useState(generateRandomPalette());

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColors(generateRandomPalette());
        }, 1500); 

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={classes.container}>
            <div className={classes.leftbox}>
                <div className={classes.maintext}>
                <HoverColorLetters
                    text="The super fast color palettes generator!"
                    defaultColor="black"
                    colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
                />
                <AndMuchMoreSvg className={classes.decorationImage} />
                </div>

                <div className={classes.text}>Create the perfect palette or get inspired by thousands of beautiful color schemes.</div>

                <div className={classes.buttons}>
                    <button> Start the Generator</button>
                    <button> Explore 10M+ Palettes</button>
                </div>
            </div>
            <div className={classes.rightbox}>
                <div className={classes.changedcoloros}> 
                {currentColors.map((color, index) => (
                        <div 
                            key={index} 
                            className={classes.colorColumn} 
                            style={{ backgroundColor: color }} 
                        >
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}