define(['todoView'], function(TodoView) {
    var todoView;

    describe('Render View', function() {

        beforeEach(function() {
            var el = $('<div></div>');
            todoView = new TodoView({el: el });
            todoView.render();
        });

        it('Initiate view', function() {
            expect(todoView.$('span').hasClass('text-content')).toBe(true);
        });

    });

     describe('Add Text', function() {

         beforeEach(function() {
            var el = $('<div></div>');
            todoView = new TodoView({el: el });
            todoView.render();
            todoView.addText();

        });
         it('Initiate view', function() {
             setTimeout(function(){
                expect(todoView.$('span')).toContainText('New');
            }, 500);
        });


 });

});

