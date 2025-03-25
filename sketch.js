let button1, button2;
let walkSprite, jumpSprite;
let currentSprite;
let walkImages = [];
let jumpImages = [];
let frameIndex = 0;
let frameRate = 10; // 動畫速度

function preload() {
  let walkSheet = loadImage('walk.png', img => {
    console.log('walk.png loaded');
    img.loadPixels();
    for (let i = 0; i < 7; i++) {
      walkImages[i] = img.get(i * 33, 0, 33, 51);
    }
  }, err => {
    console.error('Failed to load walk.png');
  });

  let jumpSheet = loadImage('jump.png', img => {
    console.log('jump.png loaded');
    img.loadPixels();
    for (let i = 0; i < 6; i++) {
      jumpImages[i] = img.get(i * 41, 0, 41, 44);
    }
  }, err => {
    console.error('Failed to load jump.png');
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => {
    currentSprite = 'walk';
    console.log('Mouse over 自我介紹');
  });
  button1.mouseOut(() => {
    currentSprite = null;
    console.log('Mouse out 自我介紹');
  });

  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => {
    currentSprite = 'jump';
    console.log('Mouse over 作品簡介');
  });
  button2.mouseOut(() => {
    currentSprite = null;
    console.log('Mouse out 作品簡介');
  });
}

function draw() {
  background(220);
  if (currentSprite === 'walk') {
    image(walkImages[frameIndex % walkImages.length], 50, 150, 33, 51);
  } else if (currentSprite === 'jump') {
    image(jumpImages[frameIndex % jumpImages.length], 50, 150, 41, 44);
  }
  if (frameCount % frameRate === 0) {
    frameIndex++;
  }
}
