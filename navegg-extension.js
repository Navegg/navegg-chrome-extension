var already_processed = false;
var _tag = false;
setInterval(function(){
    have_tag = document.getElementById('nvg_have');
    if(have_tag && !already_processed){
        already_processed = true;
        _tag = have_tag.innerHTML == 'true';

    }
}, 1000);

//send message to popup
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){

  if(already_processed){
    sendResponse(_tag);
  }else{
    sendResponse('waiting');
  }
});


