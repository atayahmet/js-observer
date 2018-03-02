function Status () {
  this.observers = [];
}

Status.prototype = {
  raise : function (data)
  {
    for (var i in this.observers)
        {
          var item = this.observers[i];
          item.observer.call(item.context, data)
        }
  },
  subscribe : function (observer, context){
    var ctx = context || null;
    this.observers.push({observer:observer, context:ctx})
  },
  unsubscribe: function(observer, context){
    for (var i in this.observers)
      if (this.observers[i].observer == observer &&
        this.observers[i].context == context)
          delete this.observers[i]
    }
  }

module.exports = Status;
