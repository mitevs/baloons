Baloons
=======

This is simple angular module that contains directive and factory for creating modals.
The modals are fully responsive to the content they hold, and always centered both horizontally
and vertically.

You simply need to define the UI part and a controller with the help of the factory. This
controller is then connected to a specific UI baloon markup element and is the handle that will
help you controll the state of the baloon (inflated / deflated).

In this project you can find simple example of two modals that are controller by two separate controllers. Anyway, here is an example how to use the baloons module in your angular projects.

First you need to define the controller:

```
var module = ng.module('MyApp', ['baloons']);

module.controller('MyCtrl', ['$scope', 'baloonFactory', function($scope, baloonFactory){
	$scope.baloonInstance = baloonFactory.getNewBaloon({
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
```

The baloonFactory's getNewBaloon method gets a configuration object in which you define two keys.
The first one is the events and the second one is style.

Events
===

* onInflate -- called when the baloon (modal) is inflated (opened).
* onDeflate -- called when the baloon (modal) is deflated (closed).
* autoDeflate -- true/false if the baloon is deflated on clicking outside it (clicking the dimmed screen). By default this is set to true.

Style
===

The style key holds js object that is applied to the modal wrapper itself. Here you can set the width.
It is advisable not to set any height because they modal itself is responsive depending on the content it holds.