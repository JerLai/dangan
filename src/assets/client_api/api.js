module.exports = {
  ping: () => {
    fetch("/ping")
      .then(function(res) {
        return res.json();
      })
      .then(function(resJson) {
        return resJson;
      });
  },
  sendTweet: (tweet) => {
    return fetch("/api/tweet/", {
      method: 'POST',
      body: JSON.stringify(tweet)
    });
  },
  getTweets: () => {
    return fetch("/api/tweets/");
  },
  getMessages: (userID) => {
    return fetch("/api/messages/" + userID);
  },
  addMessage: (message) => {
    return fetch("/api/messages/", {
      method: 'POST',
      body: JSON.stringify(message)
    });
  },
  getBookMarks: (userID) => {
    return fetch("/api/bookmarks/"+ userID);
  },
  profile: (userID) => {
    return fetch("/api/profile/" + userID);
  },
  home: () => {
    return fetch("/api/home/");
  },
  explore: () => {

  }
};