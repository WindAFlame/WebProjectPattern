/*

*/
states.push({
    name: 'base.layout',
    abstract: true,
    views: {
        // targets uiview='header' created in 'base' state
        'header@base': 'headerComponent',
        // targets uiview='footer' created in 'base' state
        'footer@base': 'footerComponent'
    }
});
/*
    
*/
app.component('headerComponent',{
    bindings: null,
    controller: null,    
    templateUrl: 'views/layout/header.html'
});
/*

*/
app.component('footerComponent',{
    bindings: null,
    controller: null,    
    templateUrl: 'views/layout/footer.html'
});