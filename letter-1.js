let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

let lines = [
    '写信真是一件温柔的事',
    '细腻的小心思就藏在横竖撇捺之中',
    '像是一只温顺的小兽',
    '躲在情意绵绵的字里行间',
    '被火燎封印起来',
    '等着解封的那一刻窜出来，跳进启信人眼底的柔波里',
    '你一眨眼，温驯的小鹿有跳动一下',
    '柔软的暖风有轻拂一下',
    '遥远的星星有闪烁一下',
    '我也有心动却不止一下'
];

let currentLine = 0;  // 当前正在打印的行
let box = document.getElementById("box");  // 获取输出的元素

function printLine() {
    if (currentLine < lines.length) {  // 检查是否还有行未打印
        box.innerHTML += lines[currentLine] + "<br>";  // 打印当前行并换行
        currentLine++;  // 移动到下一行
    } else {
        clearInterval(printInterval);  // 如果所有行都打印完，停止定时器
    }
}

// 设置第一行的打印延迟
setTimeout(() => {
    printLine();  // 打印第一行
    // 设置后续行的打印间隔为 1 秒
    let printInterval = setInterval(() => {
        printLine();  // 打印后续行
        if (currentLine >= lines.length) {
            clearInterval(printInterval);  // 如果所有行都打印完，停止定时器
        }
    }, 2500);  // 1 秒间隔
}, 5500);


// 设置定时器，每隔 190 毫秒打印一行
let printInterval = setInterval(printLine, 5500);

// 背景出现
function appearBackground() {
    setTimeout(() => {
        box.style.opacity = 1;  // 在 1500 毫秒后设置 box 的透明度为 1，显示背景
    }, 1500);
}

// 延迟 5500 毫秒后开始打印
setTimeout(() => {
  
}, 5500);

appearBackground();  // 调用背景出现函数

})
