import classes from './colorDay.module.css';
import { Header } from '../header/header.component';
import { Lover } from '../lover/lover.component';
import { useParams } from 'react-router-dom';
import tinycolor from 'tinycolor2';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaChevronRight } from "react-icons/fa6";

const RANDOM_DESCRIPTIONS = [
    { title: "Muted Olive", text: "Soft olive echoes sunlit fields and quiet forests." },
    { title: "Ocean Breeze", text: "A refreshing blue that reminds of summer waves." },
    { title: "Sunset Glow", text: "Warm orange tones bringing energy to your design." },
    { title: "Royal Berry", text: "Deep purple elegance for sophisticated projects." },
    { title: "Urban Grey", text: "Modern and sleek neutral for minimalism." }
];
export const ColorDay = () => {

    const [dailyText,setDailyText ] = useState(() => {
        const randomIndex = Math.floor(Math.random() * RANDOM_DESCRIPTIONS.length);
        return RANDOM_DESCRIPTIONS[randomIndex];
    });
    const { colorHex } = useParams();

  
    const fullHex = `#${colorHex}`;

   
    const color = tinycolor(fullHex);
    

    if (!color.isValid()) {
        return (
            <>
                <Header />
                <div style={{padding: '50px', textAlign: 'center'}}>Invalid Color Code</div>
            </>
        );
    }
  
    
    
   

    const rgb = color.toRgb();
    const hsl = color.toHsl();
    const hsv = color.toHsv();
     const hwb = {
        h: hsv.h,
        w: (Math.min(rgb.r, rgb.g, rgb.b) / 255) * 100,
        b: (1 - (Math.max(rgb.r, rgb.g, rgb.b) / 255)) * 100
    };
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const k = 1 - Math.max(r, g, b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    const xyz = rgbToXyz(rgb.r, rgb.g, rgb.b);
    const lab = xyzToLab(xyz.x, xyz.y, xyz.z);
    const lch = labToLch(lab.l, lab.a, lab.b);
    const luv = xyzToLuv(xyz.x, xyz.y, xyz.z);

    return (
        <>
            <Header />
            <div className={classes.pageContainer}>
                
            
                <div className={classes.container}>
                    <div className={classes.firstText}> 
                    <Link to="/" className={classes.ColorsLink}>
                        Coloors
                    </Link>
                    <FaChevronRight className={classes.smth} />
                        <span>{dailyText.title}</span>
                    </div>
                    <div className={classes.colorInfo}>
                        <h1>{dailyText.title}</h1>
                        <p>{dailyText.text}</p>
                                                
                    </div>
                    
                    <div 
                        className={classes.ColorBlock} 
                        style={{ backgroundColor: fullHex }}
                    >
                        <span>{fullHex}</span>
                    </div>
                </div>

                <div className={classes.container2}>
                <div className={classes.conversionSection}>
                    <h2>Conversion</h2>
                    <div className={classes.columnsWrapper}>
                        
                        <div className={classes.tableColumn}>
                            <Row label="HEX" value={colorHex} />
                            <Row label="RGB" value={`${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}`} />
                            <Row label="CMYK" value={`${Math.round(c * 100)}, ${Math.round(m * 100)}, ${Math.round(y * 100)}, ${Math.round(k * 100)}`} />
                            <Row label="HSB" value={`${Math.round(hsv.h)}°, ${Math.round(hsv.s * 100)}%, ${Math.round(hsv.v * 100)}%`} />
                            <Row label="HSL" value={`${Math.round(hsl.h)}°, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%`} />
                        </div>

                        
                        <div className={classes.tableColumn}>
                            <Row label="LAB" value={`${Math.round(lab.l)}, ${Math.round(lab.a)}, ${Math.round(lab.b)}`} />
                            <Row label="XYZ" value={`${Math.round(xyz.x)}, ${Math.round(xyz.y)}, ${Math.round(xyz.z)}`} />
                            <Row label="LCH" value={`${Math.round(lch.l)}, ${Math.round(lch.c)}, ${Math.round(lch.h)}`} />
                            <Row label="LUV" value={`${Math.round(luv.l)}, ${Math.round(luv.u)}, ${Math.round(luv.v)}`} />
                            <Row label="HWB" value={`${Math.round(hwb.h)}°, ${Math.round(hwb.w)}%, ${Math.round(hwb.b)}%`} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Lover />
        </>
    );
};

const Row = ({ label, value }) => (
    <div className={classes.row}>
        <span className={classes.label}>{label}</span>
        <span className={classes.value}>{value}</span>
    </div>
);

// Math Functions
function rgbToXyz(r, g, b) {
    let [var_R, var_G, var_B] = [r, g, b].map(v => {
        v /= 255;
        return v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92;
    });

    var_R *= 100; var_G *= 100; var_B *= 100;

    return {
        x: var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805,
        y: var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722,
        z: var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
    };
}

function xyzToLab(x, y, z) {
    let [var_X, var_Y, var_Z] = [x / 95.047, y / 100.000, z / 108.883].map(v => 
        v > 0.008856 ? Math.pow(v, 1/3) : (7.787 * v) + (16 / 116)
    );

    return {
        l: (116 * var_Y) - 16,
        a: 500 * (var_X - var_Y),
        b: 200 * (var_Y - var_Z)
    };
}

function labToLch(l, a, b) {
    let h = Math.atan2(b, a);
    h > 0 ? h = (h / Math.PI) * 180 : h = 360 - (Math.abs(h) / Math.PI) * 180;

    return {
        l: l,
        c: Math.sqrt(a * a + b * b),
        h: h
    };
}

function xyzToLuv(x, y, z) {
    const u_ref = (4 * 95.047) / (95.047 + (15 * 100.000) + (3 * 108.883));
    const v_ref = (9 * 100.000) / (95.047 + (15 * 100.000) + (3 * 108.883));

    let u_prime = (4 * x) / (x + (15 * y) + (3 * z));
    let v_prime = (9 * y) / (x + (15 * y) + (3 * z));

    if (isNaN(u_prime)) u_prime = 0;
    if (isNaN(v_prime)) v_prime = 0;

    let l = y > 0.008856 ? (116 * Math.pow(y / 100, 1/3)) - 16 : 903.3 * (y / 100);

    return {
        l: l,
        u: 13 * l * (u_prime - u_ref),
        v: 13 * l * (v_prime - v_ref)
    };
}