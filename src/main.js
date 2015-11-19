requirejs.config({
    baseUrl: '',
    paths: {
        jquery: '../lib/jquery/jquery.min',
        underscore: '../lib/underscore/underscore.min',
        backbone: '../lib/backbone/backbone.min',
        text: '../lib/require/text',
        templates: '../templates',
        todoView: 'src/views/todo'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'text' : {
            exports : 'text'
        }
    },
});

requirejs([
    // Load our app module and pass it to our definition function
    'src/app',
], function(App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
