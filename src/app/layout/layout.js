/*

*/
app.config(function($stateProvider){

    $stateProvider.state({
        name: 'main.layout',
        abstract: true,
        views: {
            // targets uiview='header' created in 'base' layout
            'header@main': 'headerComponent',
            // targets uiview='footer' created in 'base' layout
            'footer@main': 'footerComponent'
        }
    })
});
/*

*/
app.component('layoutComponent',{
    bindings: null,
    controller: null,
    templateUrl: 'app/layout/layout.html'
});