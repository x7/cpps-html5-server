export function getRandomWarning() {
    // Image
    const imageX = 269;
    const imageY = 200;
    const imageScaleX = 0.7106714957345415;
    const imageScaleY = 0.6119120825117418;

    // Text
    const textX = 305;
    const textY = 215;
    const textScaleX = 1.0585856215070626;
    const textScaleY = 1.0993152667516197;
    const textFontSize = 28;

    const warnings = [
        {
            "image": {
                "image_parent": "login_1",
                "image_name": "login-screen/carousel0",
                "x": imageX,
                "y": imageY,
                "scaleX": imageScaleX,
                "scaleY": imageScaleY
            },
            "text": {
                "text": "They could spend\nyour coins!",
                "font": "BurbankSmallBold",
                "fontSize": textFontSize,
                "color": "0x000000",
                "x": textX,
                "y": textY,
                "scaleX": textScaleX,
                "scaleY": textScaleY
            }
        },
        {
            "image": {
                "image_parent": "login_1",
                "image_name": "login-screen/carousel1",
                "x": imageX,
                "y": imageY,
                "scaleX": imageScaleX,
                "scaleY": imageScaleY
            },
            "text": {
                "text": "They could change\nyour igloo!",
                "font": "BurbankSmallBold",
                "fontSize": textFontSize,
                "color": "0xffffff",
                "x": textX,
                "y": textY,
                "scaleX": textScaleX,
                "scaleY": textScaleY
            }
        },
        {
            "image": {
                "image_parent": "login_1",
                "image_name": "login-screen/carousel2",
                "x": imageX,
                "y": imageY,
                "scaleX": imageScaleX,
                "scaleY": imageScaleY
            },
            "text": {
                "text": "They could get your\npenguin banned!",
                "font": "BurbankSmallBold",
                "fontSize": textFontSize,
                "color": "0x000000",
                "x": textX,
                "y": textY,
                "scaleX": textScaleX,
                "scaleY": textScaleY
            }
        }
    ]

    return warnings[Math.floor(Math.random() * warnings.length)]; 
}