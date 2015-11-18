define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/todo/todo.html'
], function($, _, Backbone, TodoTemplate) {

    var TodoView = Backbone.View.extend({
        tagName: 'div',

        render: function() {
            this.$el.html(TodoTemplate);
            return this;
        },
        addText: function(){
            this.$el.html('New Text');
        }


    });

    return TodoView;
});
