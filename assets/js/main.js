var already_processed = false;
setInterval(function(){
    chrome.tabs.query({'active': true,'currentWindow':true},function(tab){
      chrome.tabs.sendMessage(tab[0].id,"", function(response){
          if(response != 'waiting' && !already_processed){
            already_processed = true;
            do_the_magic(response);
          }
      });
    });
},500);

function do_the_magic(tag_status){
    console.log(tag_status);
    var el = document.getElementById('tag_status');
    if(tag_status){
        status = "Active";
        icon = "checked.png";
    }else{
        status = "Inactive";
        icon = "cross.png"
    }
    
    el.innerHTML = "<p><img class='status_icon' src='../assets/img/" + icon + "' />" + status + "</p>";
}


