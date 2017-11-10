already_processed = false;
setInterval(function(){
    have_tag = document.getElementById('nvg_have');
    if(have_tag && !already_processed){
        already_processed = true;
        have_tag = have_tag.innerHTML == 'true';

    }
}, 1000);
