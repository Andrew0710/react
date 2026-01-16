import { ColorPaletteGenerator } from '@martinlaxenaire/color-palette-generator'

export const getRandomPalette = (count = 3) => {
    
    const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
   
    const generator = new ColorPaletteGenerator({
        baseColor: randomHex
    });

    let colors = generator.getRandomPalette({ length: count }).map(el => el.hex);

    while (colors.length < count) {
        const extraColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        colors.push(extraColor);
    }

   
    return colors.slice(0, count);
}


export const getPalette = (colorHex, count = 6) => {
    return new ColorPaletteGenerator({
        baseColor: colorHex,
    }).getDistributedPalette({ includeBaseColor: true, length: count, sortByBrightness: true }).map(el => el.hex)
}