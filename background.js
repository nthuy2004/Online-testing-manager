var setting = [];
var countOutScreen_SHUB = 0;
var countOutScreen_AZOTA = 0;
chrome.storage.local.get(['setting'], function(result) {
    if(result.setting === undefined) {
        saveSetting({
            azota: true,
            shub: true 
        }, function() {
            chrome.storage.local.get(['setting'], function(result) {
                setting = JSON.parse(result.setting);
                init();
            })
        })
    }else {
        setting = JSON.parse(result.setting);
        init();
    }
    
  });
chrome.runtime.onMessage.addListener((res, sender, sendRes) => {
    if(res.type === "updateSetting") {
        setting = res.payload;
    }
})
function init() {
    const callback = (d) => {
        if(!d.requestBody) return;
        console.log(d);
        var postedString = decodeURIComponent(String.fromCharCode.apply(null, new Uint8Array(d.requestBody.raw[0].bytes)));
        var parsedata = JSON.parse(postedString);
        console.log(parsedata); 
        if(setting.azota === true && typeof parsedata.name !== 'undefined' && (parsedata.name === "exit_full_screen" || parsedata.name === "re_open_full_screen")) {
            countOutScreen_AZOTA++;
            chrome.browserAction.setBadgeText({"text": countOutScreen_AZOTA+""});
            chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
            sendMessage({
            "type": "changeCount",
            "payload": {
                azota: countOutScreen_AZOTA,
                shub: countOutScreen_SHUB
            }
            });
            return {cancel: true};
        }
        if(setting.azota === true && typeof parsedata.name !== 'undefined' && (parsedata.name === "exit_full_screen" || parsedata.name === "re_open_full_screen")) {
            countOutScreen_AZOTA++;
            chrome.browserAction.setBadgeText({"text": countOutScreen_AZOTA+""});
            chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
            sendMessage({
            "type": "changeCount",
            "payload": {
                azota: countOutScreen_AZOTA,
                shub: countOutScreen_SHUB
            }
            });
            return {cancel: true};
        }
        if(setting.shub === true && typeof parsedata.content.type !== 'undefined' && (parsedata.content.type === "visibility_off" || parsedata.content.type === "visibility_on")) {
            countOutScreen_SHUB++;
            chrome.browserAction.setBadgeText({"text": countOutScreen_SHUB+""});
            chrome.browserAction.setBadgeBackgroundColor({color: '#ff0000'});
            sendMessage({
                "type": "changeCount",
                "payload": {
                    azota: countOutScreen_AZOTA,
                    shub: countOutScreen_SHUB
                }
            });
            return {cancel: true};
        }
        
    }
    var filter = {urls: ["https://api.azota.vn/api/FrontExamTrack/SaveObj", "https://api.shub.edu.vn/api", "https://olm.vn/?g=teachercategory.saveLogUser", "https://api.shub.edu.vn/api/assignment_journeys/add", "https://e1.khaothi.online/api/exam/save-event"]};
    chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["requestBody", "blocking"]);
    const console = {
        log: (da) => chrome.extension.getBackgroundPage().console.log(da)
    }
}
const sendMessage = (arr) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, arr, function(response) {})
    });
}
const saveSetting = (array, callback) => {
    chrome.storage.local.set({setting: JSON.stringify(array)}, function() {
      chrome.runtime.sendMessage({
        "type": "updateSetting",
        "payload": array
      });
      callback();
    });
  }