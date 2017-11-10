var scr = document.createElement("script");
scr.type="text/javascript";
fn = "var have_tag = false; for(k in window){ if( k.match('nvg[1-9]')){ have_tag = true;}} console.log(have_tag)"
scr.innerHTML = fn;
document.body.appendChild(scr)
