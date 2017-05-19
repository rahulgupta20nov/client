describe('controllers', () => {
  // let vm;

  beforeEach(angular.mock.module('client'));

  beforeEach(inject(($controller, toastr) => {
    spyOn(toastr, 'info').and.callThrough();

    // vm = $controller('SiteController');
    $controller('SiteController');
  }));
});
