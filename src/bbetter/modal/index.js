import angular from 'angular';
import uibModal from 'angular-ui-bootstrap/src/modal';
import service from './service';

export default angular.module('bbetter.modal', [uibModal])
  .service('modal', service);
