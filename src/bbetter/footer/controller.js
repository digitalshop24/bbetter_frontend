import PublicOfertCtrl from './public-ofert/controller';
import PublicOfertModalTemplate from './public-ofert/template';

export default class FooterCtrl {
  constructor(modal) {
    "ngInject";
    this.modal = modal;
  }

  openModal() {
    return this.modal.open({
      controller: PublicOfertCtrl,
      template: PublicOfertModalTemplate
    });
  }

}
