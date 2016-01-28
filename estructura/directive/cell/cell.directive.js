app.directive("cell", function(global, config, cellModel) {

	return {
	    restrict: 'A',
	    templateUrl: 'directive/cell/cell.template.html',
	    scope: {
	    	// code
	    },
  		  link: function(scope, element) {

          // code
			    
          // FUNCIONES
          // ---------

          // Se comprueba el estado del juego
  		  	scope.statusGame = function(player, solutions) {

            // code
            
  		  	}

  		  	// El usuario marca una casilla
  		  	scope.play = function() {
  		  		
  		  		// code
  		  	}  		  	
  		  }
  	};	  
});