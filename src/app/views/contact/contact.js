/*

*/
const contactState = {
        parent: 'layout',
        url: '/contact',
        resolve: null,
        onEnter: null,
        views: {
            // targets datauiview='content' created in 'layout'
            'content@': 'contact'
        },
        onExit: null,
};
/*

*/
app.component('contact',{
    bindings: null,
    controller: null,
    templateUrl: 'app/views/contact/contact.html'
});