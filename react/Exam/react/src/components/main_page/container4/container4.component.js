
import classes from './container4.module.css';


const ArrowIcon = () => (
    <svg width="35" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const tools = [
    {
        title: "Palette Generator",
        description: "Create beautiful color schemes in seconds with the worldwide loved palette tool. Just hit the spacebar!",
        linkText: "START THE GENERATOR",
        bg: "#E2FDFD", 
        color: "#009DA3" 
    },
    {
        title: "Explore Palettes",
        description: "Get inspired by thousands of beautiful color schemes. Search by colors, styles, topics or hex values.",
        linkText: "EXPLORE 10M+ PALETTES",
        bg: "#E3F0FF", 
        color: "#0066FF" 
    },
    {
        title: "Image Picker",
        description: "Extract beautiful colors from your photos and turn them into palettes for your projects.",
        linkText: "LAUNCH THE IMAGE PICKER",
        bg: "#F5E6FF", 
        color: "#8833FF" 
    },
    {
        title: "Contrast Checker",
        description: "Calculate the contrast ratio of text and background colors to make your content more accessible.",
        linkText: "TRY THE CONTRAST CHECKER",
        bg: "#FDEBF6", 
        color: "#E6007A" 
    },
    {
        title: "Palette Visualizer",
        description: "Preview your colors on real designs to see how they look in context before using them in your projects.",
        linkText: "OPEN THE VISUALIZER",
        bg: "#FDF0E8", 
        color: "#D93025" 
    },
    {
        title: "Color Picker",
        description: "Get useful color information like meaning, usage, variations, accessibility and conversion.",
        linkText: "LAUNCH THE COLOR PICKER",
        bg: "#FFF5E0", 
        color: "#E37400" 
    },
    {
        title: "Tailwind Colors",
        description: "Preview Tailwind CSS colors on real designs to see how they look in context before using them in your projects.",
        linkText: "GET YOUR TAILWIND COLORS",
        bg: "#FFFBE6", 
        color: "#B8860B" 
    },
    {
        title: "Color Bot",
        description: "Chat with our AI-powered Color Bot, ask questions and get color suggestions for your projects.",
        linkText: "CHAT WITH COLOR BOT",
        bg: "#E0FBE8", 
        color: "#0F9D58" 
    }
];

export const Container4 = () => {
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>OUR TOOLS, LOVED BY MILLIONS</h3>
            
            <div className={classes.grid}>
                {tools.map((tool, index) => (
                    <div 
                        key={index} 
                        className={classes.card} 
                        style={{ backgroundColor: tool.bg, color: tool.color }}
                    >
                        <h2 style={{ color: tool.color }}>{tool.title}</h2>
                        <p style={{ color: tool.color }}>{tool.description}</p>
                        
                        <div className={classes.Wrapper}>
                            <span className={classes.linkText}>{tool.linkText}</span>
                            <span className={classes.arrow}><ArrowIcon /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};