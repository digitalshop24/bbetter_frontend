import config from '../../app/config';

const {appTokenName} = config;

export default class User {
  constructor($localStorage, $cookies) {
    "ngInject";
    this._storage = $localStorage.$default({user: {}});
    this._cookies = $cookies;
  }

  deauthorize() {
    this._storage.$reset({user: {}});
    this._cookies.remove(appTokenName);
  }

  get authorized() {
    return Boolean(this.token);
  }

  /* Gettes\setters to cookies */
  get token() {
    return this._cookies.get(appTokenName);
  }

  set token(value) {
    this._cookies.put(appTokenName, value);
  }

  /* Gettes\setters to localStorage */
  get age() {
    return this._storage.user.age;
  }

  set age(value) {
    this._storage.user.age = value;
  }

  get city() {
    return this._storage.user.city;
  }

  set city(value) {
    this._storage.user.city = value;
  }

  get email() {
    return this._storage.user.email;
  }

  set email(value) {
    this._storage.user.email = value;
  }

  get motivation() {
    return this._storage.uer.motivation;
  }

  set motivation(value) {
    this._storage.user.motivation = value;
  }

  get name() {
    return this._storage.user.name;
  }

  set name(value) {
    this._storage.user.name = value;
  }

  get sex() {
    return this._storage.user.sex;
  }

  set sex(value) {
    this._storage.user.sex = value;
  }
}
