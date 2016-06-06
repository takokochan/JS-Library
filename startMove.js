 function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj,attr,itarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iCur = 0;
		if(attr == 'opacity'){
			iCur = parseInt(parseFloat(getStyle(obj,attr))*100) //作为整数保存小数 这样可以保证不会因为小数变换而闪烁  	//*100是与其他程序保持一致，否则还需要修改ispeed等参数			
		}else{
			iCur =  parseInt(getStyle(obj,attr))
		};

		var ispeed = (itarget - iCur)/10;
		ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);

		if( iCur == itarget){
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(ispeed+iCur)+')';
				obj.style.opacity = (ispeed+iCur)/100;
			}else{
				obj.style[attr] = iCur + ispeed +'px';
			}
		}
	},10);

}