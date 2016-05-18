function css(obj,value,attr){
	if (arguments.length == 2) {
		alert(toStyle(obj,value));
	}
	else if(arguments.length == 3){
		obj.style[value] = attr;

	}
}