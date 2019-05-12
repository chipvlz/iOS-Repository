(function(a){"use strict";navigator.userAgent.indexOf("Cydia")!=-1?(a.title=a.title.split(" \u00b7 ")[0],a.documentElement.classList.add("cydia")):a.documentElement.classList.remove("cydia","depiction")})(document)

function iOSVersion() {

    var iOSVer = navigator.appVersion.match(/CPU( iPhone)? OS (\d+)_(\d+)(_(\d+))? like/i);
    if(!iOSVer) {
        return `<li><p style="color: red;">iOS version not detected</p></li>`;
    }
    var osVersion = [ iOSVer[2], iOSVer[3], iOSVer[4] ? iOSVer[5] : 0 ]
    var osString = osVersion[0] + "." + osVersion[1] + (osVersion[2] && osVersion[2] != 0 ? "." + osVersion[2] : "")

    
        return `<li><p>You are running iOS <strong>${osString}</strong></p></li>`
    
    
}