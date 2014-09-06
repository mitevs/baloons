(function(ng){
	var module = ng.module('MainApp', ['baloons']);

	module.controller('MainCtrl', ['$scope', 'baloonFactory', function($scope, baloonFactory){
		$scope.baloonA = baloonFactory.getNewBaloon({
			events: {
				onInflate: function(){
					console.log('Baloon inflated');
				},
				onDeflate: function(){
					console.log('Baloon deflated');
				}
			},
			style: {
				width: '350px'
			}
		});

		$scope.baloonB = baloonFactory.getNewBaloon({
			events: {
				onInflate: function(){
					console.log('Baloon inflated');
				},
				onDeflate: function(){
					console.log('Baloon deflated');
				}
			},
			style: {
				width: '350px'
			}
		});
	}]);
}(angular));