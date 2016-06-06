function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, json, fn) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        var bStop = true; //所有值都到达了

        for (attr in json) {
            var iCur = 0;
            if (attr == 'opacity') {
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }

            var ispeed = (json[attr] - iCur) / 10;
            ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);

            if (iCur != json[attr]) {
                bStop = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (ispeed + iCur) + ')';
                obj.style.opacity = (ispeed + iCur) / 100;
            } else {
                obj.style[attr] = iCur + ispeed + 'px';
            }

        }

        if (bStop) {
            clearInterval(obj.timer);

            if (fn) {
                fn();
            };
        }
    }, 10);
}