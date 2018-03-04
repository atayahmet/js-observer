class youtubeChannel {

  //constructor with array of subs
  constructor () {
    this.subscribers = [];
  }

  //publishing method. executes subscriber's <user.method> with <message>
  publish (message) {
    this.subscribers.forEach(function(func) {
      func(message)
    });
  }

//subsribing method. puts <user.method> into the array
  subscribe (handler) {
    this.subscribers.push(handler);
  }

//unsubscribing method. deletes matching exapmle from the array
  unsubscribe(handler) {
    this.subscribers.forEach(function(item, i, arr) {
      if (item  == handler)
        arr.pop(item);
    })
  }
}

//exports 'youtubeChannel' class to the <require('./youtubeChannel')> function
module.exports = youtubeChannel;
