module.exports = function(sails) {
  return {
    defaults: {
      basic: {
        timeout: 5000,
        domain: 'www.myapi.com'
      }
    },

    configure: function() {
      // If SSL is on, use the HTTPS endpoint
      if (sails.config[this.configKey].ssl == true) {
        sails.config[this.configKey].url = 'https://' + sails.config[this.configKey].domain;
      }
      // Otherwise use HTTP
      else {
        sails.config[this.configKey].url = 'http://' + sails.config[this.configKey].domain;
      }
    },

    initialize: function(cb) {
      try {
        return sails.hooks[this.configKey].registerActions(cb);
      } catch (err) {
        return cb(err);
      }
    },

    registerActions: function(cb) {
      // Register an action as `basic/greet` that an app can bind to any route they like.
      sails.registerAction(function greet(req, res) {
        var name = req.param('name') || 'stranger';
        return res.status(200).send('Hey there, ' + name + '!');
      }, 'basic/greet');

      return cb();
    }
  };
};
