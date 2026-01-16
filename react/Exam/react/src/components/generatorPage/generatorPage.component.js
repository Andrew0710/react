import { getRandomPalette } from '../../shared/colorPaletteGenerator'; 
import { useState, useEffect } from 'react';
import classes from './generatorPage.module.css';


import { FaHeart, FaRegHeart, FaPlus } from 'react-icons/fa'; 
import { IoMdClose, IoIosCopy } from "react-icons/io"; 
import { CiUnlock } from "react-icons/ci"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { MdDragHandle } from "react-icons/md"; 
import { BsArrowLeftRight } from "react-icons/bs"; 
import { IoMdContrast } from "react-icons/io"; 

import { Header } from '../header/header.component';


const RANDOM_NAMES = ['Sky Blue', 'Grass Green', 'Sunset', 'Berry', 'Charcoal', 'Lemon', 'Rose', 'Ocean'];

export const GeneratorPage = () => {
    const [colors, setColors] = useState([]);
    
   
    const [isSaved, setIsSaved] = useState(false);

    const createColorObjects = (hexArray) => {
        return hexArray.map(hex => ({
            hex: hex,
            name: RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)],
        }));
    };

   
    useEffect(() => {
        setColors(createColorObjects(getRandomPalette(5)));
    }, []);

    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                setColors(prev => {
                    const newHexes = getRandomPalette(prev.length);
                    return createColorObjects(newHexes);
                });
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    
    const addColor = (index, e) => {
        if (e && e.currentTarget) {
            e.currentTarget.blur();
        }
        if (colors.length >= 7) return;
        const newHex = getRandomPalette(1)[0];
        const newColorObj = {
            hex: newHex,
            name: RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)],
        };
        setColors(prev => {
            const newColors = [...prev];
            newColors.splice(index + 1, 0, newColorObj);
            return newColors;
        });
    };

    return (
        <>
            <Header/>
            <div className={classes.Container}>
                
                
                <div className={classes.Bar}>
                    <div className={classes.instructionText}>
                        Press the spacebar to generate color palettes!
                    </div>
                    
                    <button 
                        className={`${classes.saveButton} ${isSaved ? classes.savedActive : ''}`} 
                        onClick={(e) => {
                            e.currentTarget.blur();
                            setIsSaved(true);
                        }}
                    >

                    {isSaved ? <FaHeart /> : <FaRegHeart />}
    
                    <span>Save</span>
                    </button>
                </div>

                
                <div className={classes.colorsContainer}>
                    {colors.map((color, index) => (
                        <div 
                            key={index} 
                            className={classes.colorColumn} 
                            style={{ backgroundColor: color.hex }}
                        >
                           
                            <div className={classes.columnIcons}>
                                
                                <button className={classes.iconBtn}><IoMdClose /></button>       {/* 1. Хрестик */}
                                <button className={classes.iconBtn}><IoMdContrast /></button>    {/* 2. Контраст */}
                                <button className={classes.iconBtn}><MdDragHandle /></button>    {/* 3. Драг */}
                                <button className={classes.iconBtn}><FaRegHeart /></button>      {/* 4. Серце */}
                                <button className={classes.iconBtn}><BsArrowLeftRight /></button>{/* 5. Стрілки */}
                                <button className={classes.iconBtn}><IoIosCopy /></button>       {/* 6. Копіювати */}
                                <button className={classes.iconBtn}><AiOutlineInfoCircle /></button>{/* 7. Інфо */}
                                <button className={classes.iconBtn}><CiUnlock /></button>        {/* 8. Замок */}

                            </div>

                            <div className={classes.colorInfo}>
                                <div className={classes.hexText}>{color.hex}</div>
                                <div className={classes.colorName}>{color.name}</div>
                            </div>

                           
                            {colors.length < 7 && index < colors.length - 1 && (
                                <div className={classes.plusButtonWrapper}>
                                    <div className={classes.plusBtn} onClick={(e) => addColor(index, e)}>
                                        <FaPlus size={12} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};