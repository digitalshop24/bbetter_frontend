import fs from 'fs';
import {CodeGen} from 'swagger-js-codegen';

const swaggerPath = 'app/build/config/swagger/spec.json';
const requestPath = 'app/build/config/swagger/request.mustache'
/**
 * @return {String} source - Angularjs code for swagger api
 */
export default function generateSwaggerApi() {
  const spec = fs.readFileSync(swaggerPath, 'utf-8');
  const request = fs.readFileSync(requestPath, 'utf-8');
  const swagger = JSON.parse(spec);

  return CodeGen.getAngularCode({
    beautify: false,
    moduleName: 'swagger.api',
    className: 'SwaggerApi',
    swagger: swagger,
    template: {request}
  });
}
