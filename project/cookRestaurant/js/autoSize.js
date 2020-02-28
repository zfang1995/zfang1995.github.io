/**
 * forked from lovo_bdk on 2015-12-17.
 * modified by zfang on 2017-7-29
 */
function autoSize(forFixedHeight,aspectRatioOfBlueprint){
    // =============================
    // argument name: forFixedHeight
    // sketch: if this argument pass in, the elements of web page will zoom for keep the same height ratio as blueprint, and their width ratio will be destroyed.
    // algorithm of Implementation: fontSize * (aspectRatioOfDevice / aspectRatioOfBlueprint)
    // value format: 'forFixedHeight'
    // --------------
    // argument name: aspectRatioOfBlueprint
    // sketch: its a decimalFraction from widthOFBlueprint divide heightOfBlueprint.
    // value format: number
    // =============================
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth =  window.innerWidth;
        document.documentElement.style.fontSize = (winWidth / 720) * 100 + 'px' ;
        return window.getHtmlFontSize = function () {
            var a = (window.innerWidth / 720) * 100;
                 return a;
            }
    }

    var evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';

    var timer = null;

    window.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }, false);

    window.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, false);

    //初始化
    setFontSize();

};


