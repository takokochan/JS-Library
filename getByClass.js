//通过class来获取元素

function getByClass(oParent, sClass) {
    var aEle = document.getElementsByTagName('*');
    var i = 0;
    var aResult = [];

    for (i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}