// 캔버스 부르기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 캔버스 크기 조정
canvas.width = 800;
canvas.height = 800;


ctx.fillRect(200, 200, 20, 200);
ctx.fillRect(400, 200, 20, 200);
ctx.fillRect(290, 300, 40, 100);
ctx.fillRect(200, 200, 200, 20);

// line 두 개 그어주고 fill하기
ctx.moveTo(200, 200);
ctx.lineTo(310, 100);
ctx.lineTo(420, 200);
ctx.fill();

ctx.beginPath();
ctx.arc(550, 300, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(700, 300, 50, 0.75 * Math.PI, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();