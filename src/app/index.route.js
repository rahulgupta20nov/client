export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('site', {
    templateUrl: 'app/site/site.html',
    controller: 'SiteController',
    controllerAs: 'site',
    abstract: true
  }).state('site.home', {
    url: '/',
    templateUrl: 'app/site/home/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  }).state('site.about', {
    url: '/about',
    templateUrl: 'app/site/about/about.html',
    controller: 'AboutController',
    controllerAs: 'about'
  });

  $urlRouterProvider.otherwise('/');
}
