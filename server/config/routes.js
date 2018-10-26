module.exports = function(app){
    app.get('/', function(request, response){
        response.render('index');
    })
    app.get('/express_scratch', function(request, response){
        response.render('expsrc');
    });
    app.get('/hello_world', function(request, response){
        response.render('helwo');
    });
    app.get('/neighborhood', function(request, response){
        response.render('neigh');
    });
    app.get('/my_travel', function(request, response){
        response.render('mytrv');
    });
    app.get('/simple_duel', function(request, response){
        response.render('simdu');
    });
    app.get('/crazy_maze', function(request, response){
        response.render('crzma');
    });
    app.get('*', function(request, response){
        response.redirect('/');
    });
};