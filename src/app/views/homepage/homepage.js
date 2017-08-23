/*

*/
app.config(function($stateProvider){

    $stateProvider.state({
        parent: 'main.layout',
        name: 'homepage',
        url: '/home',
        resolve: null,
        onEnter: null,
        views: {
            // targets uiview='content' created in 'base' layout
            'content@main': 'homepageComponent'
        },
        onExit: null,
    })
});
/*

*/
app.component('homepageComponent',{
    bindings: null,
    controller: null,
    templateUrl: 'app/views/homepage/homepage.html'
});