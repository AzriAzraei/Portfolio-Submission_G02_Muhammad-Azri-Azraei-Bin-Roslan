/* DN1010 Experimental Interaction, Ashley Hi 2026
 * Week 4 - Generative Drawing
 * Basic Shapes Example
*/

function setup() {
    // set canvas to 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
}

function draw() {
    // set background colour
    background(0);
    // no outline on shape
    noStroke();

    // colour fill w/ rgb values: (r-value, g-value, b-value, opacity)
    fill(138, 206, 0, 255);
    
    // coordinates position (x1, y1, x2, y2, x3, y3)
    triangle(30, 30, 18, 360, 81, 360);

    // rect coordinates position (x, y, width, height)
    rect(81, 81, 63, 100);
    
    fill(250, 128, 114, 255);
    
    // quad same as triangle
    quad(189, 18, 216, 18, 216, 360, 144, 360);
    
    fill(255,181,192);

    // ellipse coordinates position (x, y, width, height)
    ellipse(272, 154, 72, 200);

    // my character
    fill(179, 11, 152, 200);
    arc(500, 500, 100, 100, PI, TWO_PI);
    
    fill(255,181,192);
    ellipse(400, 154, 72, 72);
    
    fill(189, 189, 189);
    rect(360, 130, 80, 20);
    
    fill(189, 189, 189);
    triangle(400, 70, 420, 150, 380, 150);
    
    fill(189, 189, 189);
    triangle(380, 100, 370, 150, 398, 150);

    fill(189, 189, 189);
    triangle(420, 100, 435, 150, 398, 150);
    
    fill(189, 189, 189);
    ellipse(272, 154, 10, 10);

    fill(0,0,0);
    ellipse(410, 160, 10, 10);

    fill(0,0,0);
    ellipse(390, 160, 10, 10);
}