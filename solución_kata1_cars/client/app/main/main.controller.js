'use strict';

angular.module('carsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.NORMAL = 'normal';
    $scope.SPORT = 'sport';

    $scope.showResult = false;
    $scope.successForm = false;
    $scope.errorForm = false;
    $scope.sendingForm = false;

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
      $scope.customer.bodyEngine = $scope.options.bodyEngines[0].value;
      $scope.customer.engine = $scope.options.engines[0].value;
      $scope.customer.transmission = $scope.options.transmissions[0].value;
      $scope.customer.finish = $scope.options.finishes[0].value;
      $scope.customer.tires = $scope.options.tires[0].value;
      $scope.customer.color = $scope.options.colors[0].value;
      $scope.customer.colorSport = $scope.options.colorsSport[0].value;
      for (var extra in $scope.options.extras) {
        $scope.customer.extras[extra] = false;
      }
      $scope.customer.comments = '';
      $scope.customer.cp = '';
      $scope.customer.email = '';
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

    $scope.sendForm = function () {
      $scope.showResult = true;
      $scope.sendingForm = true;
      $scope.errorForm = false;
      $scope.successForm = false;

      $http.post('/api/customers', $scope.customer)
        .then(function (response) {
          $scope.sendingForm = false;
          $scope.successForm = true;
          $scope.resetForm();

        }, function (error) {
          $scope.sendingForm = false;
          $scope.errorForm = true;

        });
    };

    $scope.closeResult = function () {
      $scope.showResult = false;
    }

  });
