(function(ng){
	var Baloon = function(config){
		this.isDeflated = true;

		if(config){
			if(config.events){
				this.events = config.events;

				if(config.events.autoDeflate === undefined){
					this.events.autoDeflate = true;
				}
			}else{
				this.events = {
					autoDeflate: true
				};
			}

			if(config.style){
				this.modalStyle = config.style;
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
			templateUrl: 'js/baloons/directive/templates/default.html',
			scope: {
				baloonController: '='
			},
			link: function(scope, element, attrs){
				if(scope.baloonController !== undefined){
					//used to close dialog if the dimmed screen is set to close it
					scope.deflateBaloon = function(e){
						if(scope.baloonController.events.autoDeflate){
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

						if(deflated && scope.baloonController.events.onDeflate){
							scope.baloonController.events.onDeflate();
						}else if(scope.baloonController.events.onInflate){
							scope.baloonController.events.onInflate();
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