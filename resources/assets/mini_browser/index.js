function Dialog(id, option = {"width": 900, "height": 500}) {
parameter = option;
const dialog_box = document.getElementById(id);
const dialog_title = dialog_box.querySelector("#dialog-title");
const dialog_close = dialog_box.querySelector("#close-dlg-box");
const resizer = dialog_box.querySelector("#resizer");
const minW = 300, minH = 200;
var pos1, pos2, pos3, pos4;
var startX, startY, startWidth, startHeight;
console.log(parameter);
dialog_box.style.width = parameter.width + "px";
dialog_box.style.height = parameter.height + "px";
dialog_title.addEventListener("mousedown", (e) => {
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = moveDragElement;
})

if(resizer) {
  resizer.addEventListener("mousedown", (e) => {
    e = e || window.event;
    e.preventDefault();
    initDrag(e);
    document.onmouseup = closeDragElement;
  })
}
function closeDragElement() {
  // stop moving when mouse button is released:
  console.log("Remove listener MouseMove");
  document.onmouseup = null;
  document.onmousemove = null;
}
function moveDragElement(e) {
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  dialog_box.style.top = (dialog_box.offsetTop - pos2) + "px";
  dialog_box.style.left = (dialog_box.offsetLeft - pos1) + "px";
}


function initDrag(e) {
  startX = e.clientX;
  startY = e.clientY;
  startWidth = parseInt(document.defaultView.getComputedStyle(dialog_box).width, 10);
  startHeight = parseInt(document.defaultView.getComputedStyle(dialog_box).height, 10);
  document.documentElement.addEventListener('mousemove', doDrag, false);
  document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
  var neww = startWidth + e.clientX - startX;
  var newh = startHeight + e.clientY - startY;
  if(newh >= minH) {
    dialog_box.style.height = (newh) + 'px';
  }
  if(neww >= minW) {
    dialog_box.style.width = (neww) + 'px';
  }
  
}
function stopDrag(e) {
  document.documentElement.removeEventListener('mousemove', doDrag, false);
  document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

const init = () => {
    if(dialog_box.classList.contains("dlg-hidden")) {
      dialog_box.classList.remove("dlg-hidden");
    }else {
      dialog_box.classList.add("dlg-hidden");
    }
};
dialog_close.addEventListener("click", () => {
  dialog_box.classList.add("dlg-hidden");
});
init();
}