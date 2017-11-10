var scr = document.createElement("script");
scr.type="text/javascript";
fn = "var have_tag = false; for(k in window){ if( k.match('nvg[1-9]')){ have_tag = true;}}; var dv = document.createElement('div'); dv.id='nvg_have'; dv.style.display='none'; dv.innerHTML = have_tag; document.body.appendChild(dv);"
scr.innerHTML = fn;
document.body.appendChild(scr)
