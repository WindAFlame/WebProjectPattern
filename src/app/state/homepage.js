/*

*/
states.push({
    name: 'base.layout.homepage',
    url: '/home',
    resolve: null,
    onEnter: null,
    views: {
        // targets uiview='content' created in 'base' state
        'content@base': 'homepageComponent'
    },
    onExit: null,
});
/*

*/
app.component('homepageComponent',{
    bindings: null,
    controller: null,
    templateUrl: 'views/homepage.html'
})