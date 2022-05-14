//  网页鼠标点击特效爱心
// !function(e,t,a){function r(){for(var e=0;e<n.length;e++)n[e].alpha<=0?(t.body.removeChild(n[e].el),n.splice(e,1)):(n[e].y--,n[e].scale+=.004,n[e].alpha-=.013,n[e].el.style.cssText="left:"+n[e].x+"px;top:"+n[e].y+"px;opacity:"+n[e].alpha+";transform:scale("+n[e].scale+","+n[e].scale+") rotate(45deg);background:"+n[e].color+";z-index:99999");requestAnimationFrame(r)}var n=[];e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),function(){var a="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){a&&a(),function(e){var a=t.createElement("div");a.className="heart",n.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),t.body.appendChild(a)}(e)}}(),r()}(window,document);

// 鼠标点击弹出文字
(function () {
  var a_idx = 0;
  window.onclick = function (event) {
    var a = new Array(
      "❤富强❤",
      "❤民主❤",
      "❤文明❤",
      "❤和谐❤",
      "❤自由❤",
      "❤平等❤",
      "❤公正❤",
      "❤法治❤",
      "❤爱国❤",
      "❤敬业❤",
      "❤诚信❤",
      "❤友善❤"
    );

    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function("event.returnValue=false"); //防止拖动

    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    a_idx = (a_idx + 1) % a.length;
    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

    var f = 16, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a = 1, // 透明度
      s = 1.2; // 放大缩小

    var timer = setInterval(function () {
      //添加定时器
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText =
          "font-size:16px;cursor: default;position: fixed;color:" +
          c +
          ";left:" +
          x +
          "px;top:" +
          y +
          "px;opacity:" +
          a +
          ";transform:scale(" +
          s +
          ");";

        y--;
        a -= 0.016;
        s += 0.002;
      }
    }, 15);
  };
  // 随机颜色
  function randomColor() {
    return (
      "rgb(" +
      ~~(Math.random() * 255) +
      "," +
      ~~(Math.random() * 255) +
      "," +
      ~~(Math.random() * 255) +
      ")"
    );
  }
})();
