export class HomeController {
  constructor(toastr) {
    'ngInject';
    this.toastr = toastr;
    this.lists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  showToastr() {
    this.toastr.info('welcoem welcome welcome');
    this.classAnimation = '';
  }
}
