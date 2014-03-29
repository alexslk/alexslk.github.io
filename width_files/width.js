var open = new Boolean(false);

function gi(id){
    return document.getElementById(id);
}

function animate(opts) {

  var start = new Date; // сохранить время начала

  var timer = setInterval(function() {

    // вычислить сколько времени прошло
    var progress = (new Date - start) / opts.duration;
    if (progress > 1) progress = 1;

    // отрисовать анимацию
    opts.step(progress);

    if (progress == 1) clearInterval(timer); // конец :)

  }, opts.delay || 10);

}

function stretch() {
 if(open == false)
 {
  open = true;
  animate({
    duration: 1000,
    step: function(progress) {
      gi("blue_block").style.width = 50 - Math.pow(progress, 4)*40 + "%";
	  gi("green_block").style.width = 50 - Math.pow(progress, 4)*40 + "%"
	  gi("img_1").style.opacity = 1 - Math.pow(progress, 4)*80/100;
	  gi("img_2").style.opacity = 1 - Math.pow(progress, 4)*80/100;
	  gi("main_logo").style.opacity = 0.1 + Math.pow(progress, 4)*90/100;
    }
  });
  }
}

function mOver()
{
   if(open == false)
    {
      gi("img_1").style.opacity = 1;
	  gi("img_2").style.opacity = 1;
	}
}

function mOut(obj)
{
   if(open == false)
    {
      gi("img_1").style.opacity = 0.8;
	  gi("img_2").style.opacity = 0.8;
	}
}
