// Windy Day Asgn Start

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let cloudImg = document.getElementById("cloud");

let cloud1x = 130;
let cloud1y = 120;
let cloud2x = 170;
let cloud2y = 100;

// Animation Loop
requestAnimationFrame(awd);

function awd() {
    // UPDATE
    // Animate cloud 1
    cloud1x++; // Move Right
    cloud2x += 2;

    // If cloud goes off Right side of canvas, teleport to left side at random height
    if (cloud1x - 100 > 300) {
        cloud1x = -75;
        cloud1y = Math.random() * 200;
    }
    if (cloud2x - 100 > 300) {
        cloud2x = -75;
        cloud2y = Math.random() * 200;
    }


    // DRAW
    // Blue Background
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Green Grass
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100);

    // Draw Clouds
    ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
    ctx.drawImage(cloudImg, cloud2x, cloud2y); // Cloud 2
    

    // LOOP
    requestAnimationFrame(awd);
}

document.getElementById("btn1").addEventListener("click", norm);
function norm() {

    let cloud1x = 130;
    let cloud1y = 120;
    let cloud2x = 170;
    let cloud2y = 100;
    // Animation Loop
    requestAnimationFrame(animate);

    function animate() {
        // UPDATE
        // Animate cloud 1
        cloud1x++; // Move Right
        cloud2x += 2;

        // If cloud goes off Right side of canvas, teleport to left side at random height
        if (cloud1x - 100 > 300) {
            cloud1x = -75;
            cloud1y = Math.random() * 200;
        }
        if (cloud2x - 100 > 300) {
            cloud2x = -75;
            cloud2y = Math.random() * 200;
        }


        // DRAW
        // Blue Background
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, cnv.width, cnv.height);

        // Green Grass
        ctx.fillStyle = "green";
        ctx.fillRect(0, 300, 400, 100);

        // Draw Clouds
        ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
        ctx.drawImage(cloudImg, cloud2x, cloud2y); // Cloud 2
        

        // LOOP
        requestAnimationFrame(animate);
    }
}

document.getElementById("btn2").addEventListener("click", crazy);
function crazy() {

    let cloud1x = 130;
    let cloud1y = 120;
    let cloud2x = 170;
    let cloud2y = 100;
    // Animation Loop
    requestAnimationFrame(animate2);

    function animate2() {
        // UPDATE
        // Animate cloud 1
        cloud1x++; // Move Right
        cloud2x += 100;

        // If cloud goes off Right side of canvas, teleport to left side at random height
        if (cloud1x - 100 > 300) {
            cloud1x = -75;
            cloud1y = Math.random() * 200;
        }
        if (cloud2x - 100 > 300) {
            cloud2x = -75;
            cloud2y = Math.random() * 200;
        }


        // DRAW
        // Blue Background
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, cnv.width, cnv.height);

        // Green Grass
        ctx.fillStyle = "green";
        ctx.fillRect(0, 300, 400, 100);

        // Draw Clouds
        ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
        ctx.drawImage(cloudImg, cloud2x, cloud2y); // Cloud 2
        

        // LOOP
        requestAnimationFrame(animate2);
    }
}