/*
var linkc = document.querySelector('#linkc')
var cc = document.querySelector('#cc')

function to(toEl){
    //toEl为指定跳转到该位置的DOM节点
    let bridge = toEl;
    let body = document.body;
    let height = 0;

    do{
        height += bridge.offsetTop;
        bridge = bridge.offsetparent;
    }while(bridge !== body)

    //  滚动到指定位置
    window.scrollTo({
        top: height,
        behavior:'smooth'
    })
}

linkc.addEventListener('click',function(){
    to(cc)
});

*/

/*var anchorLink = document.querySelector("a[href='#four']"),
target = document.getElementById("four");
anchorLink.addEventListener("click", function(e) {
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
    }
})

*/

// 控制按钮的显示和消失
$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('#return-top').fadeIn(300);
        }
     else{$('#return-top').fadeOut(200);}
         })


// 点击按钮，使得页面返回顶部
$("#return-top").click(function(){
scrollTo(0,0);
});
// 鼠标悬浮按钮之上，图片消失，文字显示
$(".top_e").mouseover(function(){
$("#img").hide();
$("#font").show();
})
//鼠标离开，文字消失，图片显示。
$(".top_e").mouseout(function(){
$("#font").hide();
$("#img").show();
})
