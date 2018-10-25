module.exports = function(app){
    app.get('/', function(request, response){
        response.render('index');
    })
    app.get('/express_scratch', function(request, response){

    });
    app.get('/hello_world', function(request, response){

    });
    app.get('/neighborhood', function(request, response){

    });
    app.get('/my_travel', function(request, response){

    });
    app.get('/simple_duel', function(request, response){

    });
    app.get('/crazy_maze', function(request, response){

    });
    app.get('*', function(request, response){
        response.redirect('/');
    });
};