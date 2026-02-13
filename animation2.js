console.log("JS файл подключен!"); // Добавим для проверки

const heartFrames = [
`           
  ###  ###  
 ########## 
  ########  
    ####    
     ##     `,
`           
 ####  #### 
############
 ########## 
   ######   
     ##     `,
];

let currentHeartFrame = 0;
let currentrFlowerFrame = 0;
const heartElement = document.getElementById('heart-frame');
const rflowerElement = document.getElementById('rflower-frame'); // Добавьте этот элемент в HTML

function updateHeartFrame() {
    console.log("Смена кадра сердца:", currentHeartFrame);
    heartElement.textContent = heartFrames[currentHeartFrame];
    currentHeartFrame = (currentHeartFrame + 1) % heartFrames.length;
}

function updaterFlowerFrame() {
    console.log("Смена кадра цветка:", currentrFlowerFrame);
    rflowerElement.textContent = rflowerFrames[currentrFlowerFrame];
    currentrFlowerFrame = (currentrFlowerFrame + 1) % rflowerFrames.length;
}

// Запускаем анимации
setInterval(updateHeartFrame, 1000);
setInterval(updaterFlowerFrame, 1000); // Можно установить другое время для цветка

// Запускаем сразу первые кадры
updateHeartFrame();
updaterFlowerFrame();