const status_id = document.getElementById("status_id");
const context_menu = document.getElementById("context-menu");
var isContextOpened = 0;

status_id.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if(isContextOpened === 0 ) {
        toggleContextMenu(1);
        positionMenu(e);
    } else {
        toggleContextMenu(0);
    }
})
document.addEventListener("click", (e) => {
    var open = clickInsideElement(e, "context-menu");
    // if(isContextOpened === 1 && open === false) {
    //     toggleContextMenu(0);
    // }
    var clickeElIsLink = clickInsideElement( e, "context-menu__link" );
    if ( clickeElIsLink ) {
        toggleContextMenu(0);
        //e.preventDefault();
      } else {
        var button = e.which || e.button;
        if ( button === 1 ) { // chuot trai
            toggleContextMenu(0);
        }
      }
})
window.onkeyup = function(e) {
    if ( e.keyCode === 27 ) {
      toggleMenuOff();
    }
}
function getPosition(e) {
    var posx = 0;
    var posy = 0;

    if (!e) var e = window.event;
    
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    }
  }
function positionMenu(e) {
    clickCoords = getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;

    menuWidth = context_menu.offsetWidth + 4;
    menuHeight = context_menu.offsetHeight + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if ( (windowWidth - clickCoordsX) < menuWidth ) {
        context_menu.style.left = windowWidth - menuWidth + "px";
    } else {
        context_menu.style.left = clickCoordsX + "px";
    }

    if ( (windowHeight - clickCoordsY) < menuHeight ) {
        context_menu.style.top = windowHeight - menuHeight + "px";
    } else {
        context_menu.style.top = clickCoordsY + "px";
    }
}
function clickInsideElement( e, className ) {
    
    var el = e.srcElement || e.target;
    if ( el.classList.contains(className) ) {
      return el;
    } else {
      while ( el = el.parentNode ) {
        if ( el.classList && el.classList.contains(className) ) {
          return el;
        }
      }
    }
    return false;
}
const toggleContextMenu = (value) => {
    isContextOpened = value;
    if(value === 1) {
        context_menu.classList.add("context-menu--active");
    }else {
        context_menu.classList.remove("context-menu--active");
    }
}
