/* global SwaggerApi */

export default function(SwaggerApi, domain, $cacheFactory) {
  "ngInject";
  return new SwaggerApi(domain, $cacheFactory('swagger.api.cache'));
}
