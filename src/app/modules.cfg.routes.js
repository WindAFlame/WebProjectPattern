/*
    Routing Rules & Config
 */
app.config(function($stateProvider, $urlRouterProvider) {
    
    // Redirection when url not known
    $urlRouterProvider.otherwise('home');

    $stateProvider.state({
        name: 'main',
        abstract: true,
        views: {
            // targets uiview created in 'index.html'
            '@': 'layoutComponent'
        }
    })
    // For others states, look each component of this project.
});

// Fix animate in view
app.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});