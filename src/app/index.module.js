// global malarkey:false, moment:false

import {
  config
} from './index.config';
import {
  routerConfig
} from './index.route';
import {
  runBlock
} from './index.run';
import {
  Constants
} from './index.constants';
import {
  SiteController
} from './site/site.controller';
import {
  HomeController
} from './site/home/home.controller';
import {
  AboutController
} from './site/about/about.controller';
import {
  NavbarDirective
} from '../app/components/navbar/navbar.directive';

// , 'ngTouch' it is optional
angular.module('client', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('AppConstants', Constants)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .directive('myNavbar', () => new NavbarDirective())
  .controller('SiteController', SiteController)
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController);

  var array = [1];
  console.log(array[0]);
