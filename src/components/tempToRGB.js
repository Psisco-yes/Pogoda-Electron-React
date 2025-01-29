export default function tempToRGB(temp,darken=false) {
    let r, g, b;

    if (temp > 40) {
        r = 255;
        b = 0;
        g = 0;
    } else if (temp > 30) {
        const ratio = 1 - (temp - 30) / 10
        r = 255;
        g = Math.round(255 * ratio);
        b = 0;
    } else if (temp > 15) {
        const ratio = (temp - 15) / 15;
        r = Math.round(255 * (ratio));
        g = 255;
        b = 0;
    } else if (temp >= 0) {
        const ratio = 1 - (temp) / 20;
        r = Math.round(255 * ratio);
        g = 255;
        b = Math.round(255 * ratio);
    } else if (temp > -10) {
        const ratio = (temp + 10) / 10;
        r = Math.round(255 * ratio);
        g = 255;
        b = 255;
    } else if (temp > -20){
        const ratio = (temp + 20) / 10;
        r = 0;
        g = Math.round(255 * ratio);
        b = 255;
    } else {
        r = 0;
        g = 0;
        b = 255;
    }

    const rgbToHex = (r, g, b) => {
        const componentToHex = (c) => {
            const hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    if(darken) return rgbToHex(Math.round(r * 0.8), Math.round(g * 0.8), Math.round(b * 0.8));
    else return rgbToHex(r, g, b);
}