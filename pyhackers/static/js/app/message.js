// Generated by CoffeeScript 1.6.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Message = (function() {
    function Message() {
      this.showMessage = __bind(this.showMessage, this);
      this.listen();
    }

    Message.prototype.listen = function() {
      var _this = this;
      return $(document).on('click', '[data-trigger="message"]', function(evt) {
        return _this.showMessage(evt);
      });
    };

    Message.prototype.showMessage = function(evt) {
      return vex.dialog.open({
        message: "Whats up",
        input: "<textarea rows=\"3\" name=\"message\" required ></textarea>",
        buttons: [
          $.extend({}, vex.dialog.buttons.YES, {
            text: 'Post'
          }), $.extend({}, vex.dialog.buttons.NO, {
            text: 'Back',
            "class": 'pull-left'
          })
        ],
        callback: function(data) {
          if (data === false) {
            return console.log('Cancelled');
          }
          console.log('Username', data.message);
          return $.post('/ajax/message/new', {
            message: data.message
          }, function() {
            console.log("Ok");
            return Messenger().post({
              message: "Message has been sent",
              type: "success"
            });
          });
        }
      });
    };

    return Message;

  })();

  jQuery(function() {
    var msg;
    return msg = new Message();
  });

}).call(this);
