var status = require('./Status');

var pageLoadingStatus = new status();
pageLoadingStatus.subscribe(function() {console.log("Loading")});

var pageLoading = {
  chunks: 0,
  loadChunk: function(chunks) {
    chunks++;
    if((chunks % 10) == 0)
      console.log("Loaded " + chunks + " chunks!")
  }
}

pageLoadingStatus.subscribe(pageLoading.loadChunk, pageLoading);

for (var i = 1; i < 100; i++)
  pageLoadingStatus.raise(i);
