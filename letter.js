let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '亲爱的小婕，没想到我会以这种方式给你写信吧，哈哈哈哈哈哈哈哈哈<我们已经认识好像很久了，又像是刚刚认识，你常常问我爱不爱你<我的回答是肯定的，也许我有时候不够体贴，不会哄你开心，但是我都会尽我最大努力去爱你<我也能感受到你的爱，有时候你会有点脾气，但是我知道，爱一个人是看清他之后依然爱他<我不是一个完美的人，所以请你多给我一点耐心，我会用时间去证明我会是那个最正确的选择<我有时候会惹你生气，可那些都是我无意的，我希望你开心快乐，我怎么可能让你伤心难过，写到这里，我都有点想哭<我会努力做一个合格的男朋友，让你时刻感受到被爱包围<我们还有很多时间，希望以后我惹你生气了，你打开这个看一看，我是爱你的<最后是一段肉麻的情话，哈哈哈哈哈哈哈，在你伤心难过时打开看一看，也许心情会变好<<写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，像是一只温顺的小兽<躲在情意绵绵的字里行间，被火燎封印起来，等着解封的那一刻窜出来，跳进启信人眼底的柔波里。<你一眨眼，<温驯的小鹿有跳动一下，<柔软的暖风有轻拂一下，<遥远的星星有闪烁一下，<我也有心动<却不止一下'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
