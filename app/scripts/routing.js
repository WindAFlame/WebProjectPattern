/*
    Routing Rules & Config
 */
app.config(function($stateProvider, $urlRouterProvider) {
    
    // Redirection when url not known
    $urlRouterProvider.otherwise('home');

    // Routing Configuration
    $stateProvider
        // Partial
        // - base
        .state('base', {
            abstract: true,
            views: {
                // targets uiview='layout' created in 'index.html'
                'layout@': 'layoutComponent'
            }            
        })
        .state('base.layout', {
            abstract: true,
            views: {
                // targets uiview='header' created in 'base' state
                'header@base': 'headerComponent',
                // targets uiview='footer' created in 'base' state
                'footer@base': 'footerComponent'
            }
        })
        // Homepage
        .state('base.layout.homepage', {
            url: '/home',
            resolve: null,
            onEnter: null,
            views: {
                // targets uiview='content' created in 'base' state
                'content@base': 'homepageComponent'
            },
            onExit: null,
        })
        // Other WebPage
        // - Your Work
});

// Fix animate in view
app.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});