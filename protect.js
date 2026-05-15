!function(){var d=document;
d.addEventListener('contextmenu',function(e){e.preventDefault();});
d.addEventListener('keydown',function(e){if(e.keyCode===123||(e.ctrlKey&&e.shiftKey&&(e.keyCode===73||e.keyCode===74))||(e.ctrlKey&&e.keyCode===85)){e.preventDefault();}});
var _t=!1,_dt=new Date;Object.defineProperty(_dt,'id',{get:function(){_t=!0;}});setInterval(function(){_t=!1;console.log(_dt);console.clear();},1e3);
}();
