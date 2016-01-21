'use strict';

angular.module('carsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.NORMAL = 'normal';
    $scope.SPORT = 'sport';

    $scope.showResult = false;
    $scope.successForm = false;
    $scope.errorForm = false;
    $scope.sendingForm = false;

    $scope.selectText = 'Seleccione una opción';

    $scope.options = {
      configurationTypes: [],
      bodyEngines: [],
      engines: [],
      transmissions: [],
      finishes: [],
      tires: [],
      colors: [],
      colorsSport: [],
      extras: []
    };
    $scope.customer = {
      type: '',
      bodyEngine: '',
      engine: '',
      transmission: '',
      finish: '',
      tires: '',
      color: '',
      colorSport: '',
      extras: [],
      comments: '',
      cp: '',
      email: ''
    };

    $scope.init = function () {
      $http.get('/api/options').success(function (options) {
        $scope.options = options;
        $scope.resetForm();
      });
    };

    $scope.resetForm = function () {
      $scope.customer.type = $scope.NORMAL;
      $scope.customer.bodyEngine = null;
      $scope.customer.engine = null;
      $scope.customer.transmission = null;
      $scope.customer.finish = $scope.options.finishes[0].value;
      $scope.customer.tires = $scope.options.tires[0].value;
      $scope.customer.color = null;
      $scope.customer.colorSport = null;
      for (var extra in $scope.options.extras) {
        $scope.customer.extras[extra] = false;
      }
      $scope.customer.comments = '';
      $scope.customer.cp = '';
      $scope.customer.email = '';
    };

    $scope.resetInForm = function(form) {

      // text
      form.email.$dirty = false;
      form.cp.$dirty = false;

      // textarea
      form.comments.$dirty = false;

      // select
      form.bodyEngine.$dirty = false;
      form.engine.$dirty = false;
      form.transmission.$dirty = false;
      form.color.$dirty = false;

      if(typeof form.colorSport !== 'undefined') {
        form.colorSport.$dirty = false;
      }
    };

    $scope.changeOptions = function () {
      if ($scope.customer.type === $scope.SPORT) {
        $scope.customer.bodyEngine = _.find($scope.options.bodyEngines, {type: $scope.SPORT}).value;
        $scope.customer.engine = _.find($scope.options.engines, {type: $scope.SPORT}).value;
        $scope.customer.transmission = _.find($scope.options.transmissions, {type: $scope.SPORT}).value;
        $scope.customer.finish = _.find($scope.options.finishes, {type: $scope.SPORT}).value;
        $scope.customer.tires = _.find($scope.options.tires, {type: $scope.SPORT}).value;
        $scope.customer.colorSport = $scope.options.colorsSport[0].value;
        for (var extra in $scope.options.extras) {
          $scope.customer.extras[extra] = true;
        }
      } else {
        $scope.customer.colorSport = '';
      }
    };

    $scope.activeErrors = function(form, value) {
      var req = form.$error.required;
      if (req !== undefined) {
        for (var i = 0; i < req.length; i++) {
          form.$error.required[i].$dirty = value;
        }
      }
    };

    $scope.sendForm = function () {
      if(!$scope.carsForm.$invalid) {
        $scope.showResult = true;
        $scope.sendingForm = true;
        $scope.errorForm = false;
        $scope.successForm = false;

        $http.post('/api/customers', $scope.customer)
          .then(function () {
            $scope.sendingForm = false;
            $scope.successForm = true;
            $scope.resetForm();
            $scope.resetInForm($scope.carsForm);

          }, function () {
            $scope.sendingForm = false;
            $scope.errorForm = true;

          });
      } else {
        $scope.activeErrors($scope.carsForm, true);
      }

    };

    $scope.closeResult = function () {
      $scope.showResult = false;
    };

  });
