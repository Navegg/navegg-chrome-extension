/*
*  This js is injected into the pages
*  So the name of all variables mus be UNIQUE
*  Because generic names maybe have 
*  conflicts with site variable names
*/
var navegg_scr_element = document.createElement("script");
navegg_scr_element.type="text/javascript";
fn = "var have_navegg_tag = false; \
        for(var navegg_window_loop in window){ \
            if( navegg_window_loop.match('nvg[1-9]')){ \
            have_navegg_tag = true;} \
        }; \
        var navegg_inject_dv = document.createElement('div'); \
        navegg_inject_dv.id='nvg_have'; \
        navegg_inject_dv.style.display='none'; \
        navegg_inject_dv.innerHTML = have_navegg_tag; \
        document.body.appendChild(navegg_inject_dv);"
navegg_scr_element.innerHTML = fn;
document.body.appendChild(navegg_scr_element);
