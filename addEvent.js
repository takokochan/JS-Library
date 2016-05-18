function myAddEvent(obj,sEvent,fn){
	if(obj.atteachEvent){
		obj.atteachEvent('on'+ sEvent, fn);
	}else{
		obj.addEventListener(sEvent,fn,false);
	}
}