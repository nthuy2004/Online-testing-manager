
document.body.insertAdjacentHTML("beforeend", `

<div onclick="" id="status_id" style="position: fixed; bottom: 15px; left: 15px; text-shadow: rgba(150, 150, 150, 0.9) 2px 2px 8px; color: rgb(255, 255, 255); padding: 5px 8px; background-color: rgb(0, 0, 0); border-radius: 10px; opacity: 0.7; font-size: 18px; display: block;"><span>OTM 1.0.0 BY HUY#2004<div id="status_id" style="display: inline;"></div></span></div>
<nav id="context-menu" class="context-menu">
    <ul class="context-menu__items">
      <li class="context-menu__item">
        <a id="show-dialog" class="context-menu__link"><i class="fa fa-eye"></i> Open / Hide mini-browser</a>
      </li>
      <hr class="context_hr">
      <li class="context-menu__item">
        <a id="show-about" class="context-menu__link"><i class="fa fa-times"></i> About(s)</a>
      </li>
      <li class="context-menu__item">
        <a id="show-setting" class="context-menu__link"><i class="fa fa-times" disabled></i> Setting</a>
      </li>
    </ul>
</nav>
<div id="dialog-box" class="dialog-box dlg-hidden" >
    <h3 id="dialog-title" class="dialog-title">Mini web browser ( Don't support CORS )</h3>
    <a id="close-dlg-box" class="dialog-close" title="Close">&times;</a>
    <div class="dialog-content">
      <iframe id="iframe_id" src="https://www.google.com/webhp?igu=1"></iframe>
    </div>
    <div class="dialog-action">
      <button class="btn" alt="comming soon" disabled>Back</button>
      <button class="btn" disabled>Next</button>
      <button id="btn-homepage" class="btn">Homepage ( google.vn )</button>
    </div>
    <div id="resizer" class="resize">

    </div>
</div>
<div id="dialog-box-2" class="dialog-box dlg-hidden">
    <h3 id="dialog-title" class="dialog-title">Setting</h3>
    <a id="close-dlg-box" class="dialog-close" title="Close">&times;</a>
    <div class="dialog-content">
      <div class="container mt-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Setting</h4>
            <div class="form-group">
              <div class="form-check mt-1">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="checkbox_azota" value="checkedValue" checked>
                  Active for AZOTA
                </label>
              </div>
              <div class="form-check mt-1">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="checkbox_shub" value="checkedValue" checked>
                  Active for SHUB
                </label>
              </div>
              <div class="form-check mt-1">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="checkbox_olm" value="checkedValue" checked disabled>
                  Active for OLM (ALWAY ON)
                </label>
              </div>
              <div class="form-check mt-1">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" disabled>
                  No time limit for homework
                </label>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Only for AZOTA_DOGZ</h4>
            <div class="form-check mt-1">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" value="checkedValue" checked>
                    Stop camera permission
                </label>
            </div>
            <div class="form-check mt-1">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" value="checkedValue" checked>
                    Warning when azota using your microphone for auto record
                </label>
            </div>
            <button type="button" id="btn-log" class="btn btn-primary">View log</button>
          </div>
          <div class="card-body">
            <h4 class="card-title">Status</h4>
            <h6>Number of blocked requests (Azota): <span id="label_azota_count" class="badge badge-secondary">0</span></h6>
            <h6>Number of blocked requests (Shub): <span id="label_shub_count" class="badge badge-success">0</span></h6>
            <h6>Number of blocked requests (OLM): <span id="label_shub_count" class="badge badge-danger">0</span></h6>
          </div>
          <div class="card-body">
            <h4 class="card-title">License & update</h4>
            <button type="button" class="btn btn-primary">Check update</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-action btn-right">
      <button class="btn" id="btn-save-setting">Save</button>
    </div>
</div>
<div id="dialog-box-3" class="dialog-box dlg-hidden" >
    <h3 id="dialog-title" class="dialog-title">View log ( Azota )</h3>
    <a id="close-dlg-box" class="dialog-close" title="Close">&times;</a>
    <div class="dialog-content">
    <table style="width:100%">
      <tr>
        <td>ID</td>
        <td>Type</td>
        <td>Result</td>
      </tr>
      <tr>
      <td>1</td>
      <td>focus</td>
      <td>block:other (net::ERR_BLOCKED_BY_CLIENT)</td>
  </tr>
  <tr>
      <td>2</td>
      <td>blur</td>
      <td>block:other (net::ERR_BLOCKED_BY_CLIENT)</td>
  </tr>
  <tr>
      <td>3</td>
      <td>focus</td>
      <td>block:other (net::ERR_BLOCKED_BY_CLIENT)</td>
  </tr>
  <tr>
      <td>4</td>
      <td>blur</td>
      <td>block:other (net::ERR_BLOCKED_BY_CLIENT)</td>
  </tr>
  <tr>
      <td>5</td>
      <td>focus</td>
      <td>block:other (net::ERR_BLOCKED_BY_CLIENT)</td>
  </tr>
  <tr>
      <td>6</td>
      <td>blur</td>
      <td>block:other (net::ERR_BLOCKED_BY_CLIENT)</td>
  </tr>
  <tr>
      <td>7</td>
      <td>submit</td>
      <td>{code: 20, data: null}</td>
  </tr>
    </table>
    </div>
    <div id="resizer" class="resize">

    </div>
</div>
`);
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
toastr["success"]("Injected script", "OTM")
var show_mini = document.getElementById("show-dialog");
const label_azota_count = document.getElementById("label_azota_count");
const label_shub_count = document.getElementById("label_shub_count");
show_mini.addEventListener("click", () => {
  Dialog('dialog-box');
});
document.getElementById("btn-log").addEventListener("click", () => {
  Dialog("dialog-box-3", {width: 600, height: 450})
});
document.getElementById("show-about").addEventListener("click", () => {
  Swal.fire({
    icon: "question",
    title: "About",
    html: `
      <p>OTM 1.0.0</p>
      <p>By: <b>HUY#2004</b></p>
    `,
    grow: "row",
  });
});
document.getElementById("show-setting").addEventListener("click", () => {
  Dialog('dialog-box-2', {"width": 400, "height": 500});
  var act_azota = document.getElementById("checkbox_azota");
  var act_shub = document.getElementById("checkbox_shub");
  chrome.storage.local.get(['setting'], function(result) {
    var array = JSON.parse(result.setting);
    act_azota.checked = array.azota;
    act_shub.checked = array.shub;
  });
  //var currentSetting = readSetting();
  //console.log(currentSetting);

  document.getElementById("btn-save-setting").addEventListener("click", () => {
    saveSetting({
      azota: act_azota.checked,
      shub: act_shub.checked
    });
    
  })
})

const iframe_id = document.getElementById("iframe_id");
const iframe_btn_homepage = document.getElementById("btn-homepage");
iframe_btn_homepage.onclick = () => {
  iframe_id.src = "https://www.google.com/webhp?igu=1";
}

const saveSetting = (array) => {
  chrome.storage.local.set({setting: JSON.stringify(array)}, function() {
    chrome.runtime.sendMessage({
      "type": "updateSetting",
      "payload": array
    });
    toastr["success"]("Saved!", "OTM")
  });
}
const readSetting = new Promise((resolve, reject) => {
  chrome.storage.local.get(['setting'], function(result) {
    if(result) {
      resolve(result);
    }else {
      reject("Can't access to local storage");
    }
  });
})
readSetting.then((res) => {
  console.log(res);
})
chrome.runtime.onMessage.addListener((res, sender, sendRes) => {
  if(res.type === "changeCount") {
    label_azota_count.innerText = res.payload.azota;
    label_azota_count.innerText = res.payload.shub;
  }
})
