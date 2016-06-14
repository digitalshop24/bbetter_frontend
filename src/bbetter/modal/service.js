import controller from './controller';
import template from './template';

const defaultModalOptions = {
  controller,
  controllerAs: 'ctrl',
  template
};

export default class ModalService {
  constructor($uibModal) {
    "ngInject";
    this.modal = $uibModal;
  }

  open(extraOptions) {
    const options = Object.assign({}, defaultModalOptions, extraOptions);

    return this.modal.open(options);
  }
}
