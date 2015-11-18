// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'todoView'
], function($, _, Backbone, TodoView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
        },
    });

    var initialize = function(){

    var app_router = new AppRouter;
    var vent = _.extend({}, Backbone.Events);

    app_router.on('route:home', function (actions) {

        var todoView = new TodoView({el: '#content'});
        todoView.render();
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});