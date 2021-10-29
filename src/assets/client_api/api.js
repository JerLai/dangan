let api = (function(){
  "use strict";

  /**********************************
   * Send *
   **********************************/

  function send(method, url, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status !== 200) callback("[" + xhr.status + "]" + xhr.responseText, null);
        else callback(null, JSON.parse(xhr.responseText));
    };
    xhr.open(method, url, true);
    if (!data) xhr.send();
    else{
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    }
  }


  /***********************************
   * Commands
   ***********************************/

  /**
   * Send tweet
   */
  module.sendTweet = function(tweet) {
    send("POST", "/api/tweet", tweet, function(err, res){
      //if (err) return notifyErrorListeners(err);
      //notifyUserListeners(getUsername());
 });
  }
  return module;
})();