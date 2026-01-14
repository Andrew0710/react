import classes from './container5.module.css';

const resources = [
    {
        title: "Color Names",
        description: "Browse and search through a comprehensive list of color names to find the perfect shade for your project."
    },
    {
        title: "Free Fonts",
        description: "Discover and collect beautiful free fonts for your designs from our curated list of typography resources."
    },
    {
        title: "Collage Maker",
        description: "Create stylish collages by combining your photos and palettes in seconds."
    },
    {
        title: "Browse Gradients",
        description: "Explore beautiful gradients for your projects or create your own gradient with the Gradient Maker."
    },
    {
        title: "Gradient Palette",
        description: "Create a gradient palette between two colors and export it in various formats."
    },
    {
        title: "Image Converter",
        description: "Convert images to different formats with ease."
    }
];

export const Container5 = () => {
    return (
        <div className={classes.container}>
            <h3 className={classes.sectionTitle}>MORE USEFUL RESOURCES</h3>
            
            <div className={classes.grid}>
                {resources.map((item, index) => (
                    <div key={index} className={classes.card}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};