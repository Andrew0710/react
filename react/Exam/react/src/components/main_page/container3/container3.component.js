
import classes from './container3.module.css';
import { Link } from 'react-router-dom';

const logos = [
    "https://res.cloudinary.com/coolors/image/upload/v1757421975/media/1622439415c22e4475400432eae4619d1592a8bc-71x22.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757422329/media/c641bb5bbe69c6b42344fd2333924a206ef43736-92x18.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757421770/media/cc8b81fd47ded1e82d83258e2f674e0951e20fcc-86x18.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757421784/media/63efa1d3d16c97552586e2ac6a280a6b2389b88f-100x48.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757422338/media/5e789db505180ee41e0612d7d53e2ec48c9c5837-153x20.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757421758/media/a9bfb23cca986ee16b0547274bcd7461ffd373aa-67x18.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757421980/media/fb78b2f382a2d2d93b155601fbc9032379d2515d-79x20.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757422149/media/warnerbros.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757422148/media/ea.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757422624/media/DreamWorks2016.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757422145/media/apple.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757421886/media/idSXQnMw-Q.svg",
    "https://res.cloudinary.com/coolors/image/upload/v1757421653/media/Disney_wordmark.svg"
];

export const Container3 = () => {
    return (
        <div className={classes.container}>
            <div className={classes.topSection}>
                <h3 className={classes.trustedTitle}>
                    TRUSTED BY 8+ MILLION CREATIVE MINDS AND TOP COMPANIES
                </h3>
                
                
                <div className={classes.slider}>
                    <div className={classes.slideTrack}>
                        
                        {logos.map((logo, index) => (
                            <div className={classes.slide} key={`1-${index}`}>
                                <img src={logo} alt="brand logo" />
                            </div>
                        ))}
                        {logos.map((logo, index) => (
                            <div className={classes.slide} key={`2-${index}`}>
                                <img src={logo} alt="brand logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={classes.bottomContent}>
                <div className={classes.textBlock}>
                    
                    <p>
                    Coolors is the lightning-fast, ultra-intuitive color palette generator for designers, creators, and anyone seeking visual harmony.
                       Instantly generate beautiful palettes by hitting the spacebar, or explore millions of popular ones. Extract colors from images, check accessibility, and preview them on real designs. Organize your palettes into projects and export them in multiple formats—effortlessly across web, apps, and plugins. Now with AI!
                    </p>
                </div>

                <button className={classes.colorCard}>
                    <span className={classes.cardLabel}>COLOR OF THE DAY</span>
                    <div className={classes.cardContent}>
                        <Link to="/colors" style={{ textDecoration: 'none' }}>
                        <div className={classes.colorSample} style={{backgroundColor: '#9AB973'}}></div>
                        <div className={classes.colorInfo}>
                            <h3>Muted Olive</h3>
                            <p>Soft olive echoes sunlit fields and quiet forests, bringing gentle calm and understated natural elegance indoors.</p>
                            <span className={classes.hexCode}>#9AB973</span>
                        </div>
                        </Link>
                    </div>
                </button>
            </div>
        </div>
    );
};