(function(ng){
	var Baloon = function(config){
		this.isDeflated = true;

		if(config){
			if(config.onInflate){
				this.onInflate = config.onInflate;
			}

			if(config.onDeflate){
				this.onDeflate = config.onDeflate;
			}

			if(config.autoDeflate){
				this.autoDeflate = config.autoDeflate;
			}
		}

		this.toggle = function(deflate){
			if(deflate !== undefined){
				this.isDeflated = deflate;
			}else{
				this.isDeflated = !this.isDeflated;
			}
		};
	};

	ng
	.module('baloons', [])
	.directive('baloon', function(){
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			templateUrl: 'templates/default.html',
			scope: {
				baloonController: '=',
				claz: '@baloonClass'
			},
			link: function(scope, element, attrs){
				if(scope.baloonController !== undefined){
					//used to close dialog if the dimmed screen is set to close it
					scope.deflateBaloon = function(e){
						if(scope.baloonController.autoDeflate){
							if(ng.element(e.target).hasClass('baloon-main')){
								scope.baloonController.toggle(true);
							}
						}
					};

					//watch for changes of the modal controller state
					scope.$watch('baloonController.isDeflated', function(deflated, oldState){
						if(deflated === oldState){
							return;
						}

						if(deflated && scope.baloonController.onDeflate){
							scope.baloonController.onDeflate();
						}else if(scope.baloonController.onInflate){
							scope.baloonController.onInflate();
						}
					});
				}
			}
		};
	}).factory('baloonFactory', function(){
		return {
			getNewBaloon: function(config){
				return new Baloon(config);
			}
		};
	});
}(angular));