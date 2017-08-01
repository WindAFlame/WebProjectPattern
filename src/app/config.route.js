/*
    Routing Rules & Config
 */
app.config(function($stateProvider, $urlRouterProvider) {
    
    // Redirection when url not known
    $urlRouterProvider.otherwise('home');

    // Routing Configuration
    angular.forEach(states,function(item,key){
        $stateProvider.state(item);
    })
    
});

// Fix animate in view
app.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});