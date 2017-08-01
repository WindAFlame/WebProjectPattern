/*

*/
states.push({
    name: 'base',
    abstract: true,
    views: {
        // targets uiview='layout' created in 'index.html'
        'layout@': 'layoutComponent'
    }      
});
/*

*/
app.component('layoutComponent',{
    bindings: null,
    controller: null,
    templateUrl: 'views/layout/_layout.html'
})