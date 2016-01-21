'use strict';

angular.module('carsApp').directive('question', function () {

    return {
        // A: como atributo
        // C: como clase
        // M: como comentario
        // E: como etiqueta
        restrict: 'EA',
        templateUrl: 'app/directives/question/question.template.html',
        scope: {

          // general
          form: '=', // formulario donde se guarda el campo (opcional)
          type: '@', // tipo de campo
          stylecolValue: '@', // estilo para el campo con el valor
          stylecolError: '@', // estilo para el error de un campo determinado (opcional)
          label: '@', // texto de la etiqueta a mostrar (opcional)
          field: '@', // nombre del campo donde se guarda la info (opcional)
          name: '@', // nombre del campo
          model: '=', // modelo de datos donde se cargará el valor del input (opcional)
          max: '@', // límite máximo (opcional)
          maxtext: '@', // texto a mostrar cuando se supera el límite máximo (opcional)
          min: '@', // límite mínimo (opcional)
          mintext: '@', // texto a mostrar cuando no se alcanza el límite mínimo (opcional)
          pattern: '@', // expresión regular a evaluar (opcional)
          patterntext: '@', // texto a mostrar cuando hay expresión regular (opcional)
          required: '=', // para que un campo sea obligatorio (opcional)
          disabled: '=', // para que un campo esté deshabilitado (opcional)
          visibility: '=', // para que un campo se encuentre en estado no visible (opcional)

          // select
          labelfirst: '=', // primer elemento en un select (opcional)
          options: '=', // opciones para el select
          selBase: '=', // campo a utilizar en el select
          selAs: '@', // campo a utilizar en el select
          disabledProp: '=', // para que un select esté deshabilitado (opcional)

          // radio
          changeRadio: '&', // función a ejecutar al cambiar la selección en un radio (opcional)

          // text, number, email
          place: '@' // placeholder estático (opcional)
        },
        link: function (scope) {


          // MODELO
          // ========================================================

          // expresiones regulares
          scope.ErMail = /^(?!.*\.{2})([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+([\.][a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*)@((([\-]?[a-zA-Z0-9]){2,}[\.])*(([a-zA-Z0-9][\-]?))+).(([\.]([a-zA-Z0-9][\-]?){2,}([a-zA-Z0-9])*)+)$/;



          // FUNCIONES
          // ========================================================

          // LOCALES
          // --------------------------------------------------------

          /**
           * se devuelve la plantilla a cargar
           * @param type
           * @returns {string}
           */
          function chargeTemplate (type) {
              var file = (type === 'number' || type === 'email') ? 'text' : type;
              return 'app/directives/question/views/' + file + '.template.html';
          }


          // DE PLANTILLA
          // --------------------------------------------------------

          /**
           * funciones para las preguntas de tipo radio
           */
          scope.execChange = function () {
              scope.changeRadio();
          };


          // CÓDIGO GENERAL
          // ========================================================

          // plantilla a cargar
          scope.template = chargeTemplate(scope.type);
        }
    };

});
