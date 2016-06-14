'use strict';

import angular from "angular";

export default angular.module('bbetter.init-sliser', [])
    .directive('initSlider', function () {
        return {
            link: function () {
                angular.element(document).ready(function () {
                    initSlider();
                });
            }
        }
    });