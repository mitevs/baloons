(function(ng){
	var module = ng.module('MainApp', ['baloons']);

	module.controller('MainCtrl', ['$scope', 'baloonFactory', function($scope, baloonFactory){
		$scope.baloonA = baloonFactory.getNewBaloon({
			onInflate: function(){
				console.log('Baloon inflated');
			},
			onDeflate: function(){
				console.log('Baloon deflated');
			},
			autoDeflate: true
		});

		$scope.baloonB = baloonFactory.getNewBaloon({
			onInflate: function(){
				console.log('Baloon inflated');
			},
			onDeflate: function(){
				console.log('Baloon deflated');
			}
		});
	}]);
}(angular));