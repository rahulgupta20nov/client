// export function NavbarDirective() {
//   'ngInject';
//
//   let directive = {
//     restrict: 'E',
//     templateUrl: 'app/components/navbar/navbar.html',
//     scope: {},
//     controller: NavbarController,
//     controllerAs: 'vm',
//     bindToController: true
//   };
//
//   return directive;
// }

export class NavbarDirective {
  constructor() {
    'ngInject';
    this.restrict = 'E';
    this.templateUrl = 'app/components/navbar/navbar.html';
    this.scope = {};
    this.controller = NavbarController;
    this.controllerAs = 'vm';
    this.bindToController = true;
  }
}


class NavbarController {
  constructor() {
    'ngInject';
    var array = [3, 4, 3, 5];
    // debugger;
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
}

// export.a = ()=>{};
// export.b = ()=>{};
