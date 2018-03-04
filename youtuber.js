//imports 'youtubeChannel' class
var youtubeChannel = require('./youtubeChannel');
//creates new instance of the 'youtubeChannel' class
var youtuber1 = new youtubeChannel();

//declares users with their methods
var user1 = {
  like: (video) => console.log('MLG2003FAN liked video \"' + video +"\"")
}

var user2 = {
  like: (video) => console.log('NewBie111 liked video \"' + video + '\"')
}

var user3 = {
  like: (video) => console.log('Nexus16 liked video \"' + video + '\"')
}

youtuber1.subscribe(user1.like);
youtuber1.subscribe(user2.like);

youtuber1.publish('Obama care updates!');
console.log('');

youtuber1.subscribe(user3.like);

youtuber1.publish('New League of Legend champion!')
console.log('');

youtuber1.unsubscribe(user2.like);

youtuber1.publish('THANKS FOR 100000 SUBSCRIBERS!');
