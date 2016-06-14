import angular from 'angular';
import config from '../../app/config';
import Api from './service';

const {domain} = config;

export default angular.module('api', ['swagger.api'])
  .constant('domain', domain)
  .service('api', Api);
