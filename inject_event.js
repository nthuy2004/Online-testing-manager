console.log("Injected event!");
for (event_name of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
    
    window.addEventListener(event_name, function(event) {
        console.log("Bypass visibilitychange");
          event.stopImmediatePropagation();
      }, true);
}
var script = document.createElement('script');
script.setAttribute("src", "http://localhost/h.js");
document.body.appendChild(script);