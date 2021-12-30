/*jshint esversion: 6 */
export let api = (function(){
  let module = {};
  /***********************************
   * Commands
   ***********************************/

  module.ping = function() {
    fetch("/ping")
      .then(function(res) {
        return res.json();
      })
      .then(function(resJson) {
        console.log(resJson);
      });
  }
  /**
   * Send tweet
   */
  module.sendTweet = function(tweet) {
    return fetch("/api/tweet/", {
      method: 'POST',
      body: JSON.stringify(tweet)
    });
  }

  module.getMessages = function(userID) {
    return fetch("/api/messages/" + userID);
  }

  module.addMessage = function(message) {
    return fetch("/api/messages/", {
      method: 'POST',
      body: JSON.stringify(message)
    });
  }

  module.getBookMarks = function(userID) {
    return fetch("/api/bookmarks/"+ userID);
  }

  module.profile = function (userID) {
    return fetch("/api/profile/" + userID);
  }

  module.home = function() {
    return fetch("/api/home/");
  }

  module.explore = function() {

  }

  return module;
})();