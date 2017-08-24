/*

*/
const layoutState = {
    abstract: true,
    resolve: null,
    onEnter: null,
    views: {
        // targets datauiview='header' created in 'layout'
        header: 'layoutHeader',
        // targets datauiview='content' created in 'layout'
        content: {},
        // targets datauiview='footer' created in 'layout'
        footer: 'layoutFooter'
    },
    onExit: null
};
/*

*/
app.component('mdlLayout',{
    bindings: null,
    controller: null,
    templateUrl: 'app/views/layout/layout.html'
});