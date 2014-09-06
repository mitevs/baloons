Baloons
=======

This is simple angular module that contains directive and factory for creating modals.
The modals are fully responsive to the content they hold and always centered both horizontally
and vertically.

You simply need to define a controller with the help of the factory. This
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

Then you define the UI part with your content inside, here is an example:

```
<baloon baloon-controller="baloonInstance">
	<header>
		<h3>Simple Modal</h3>
	</header>
	
	<section>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsa sapiente corporis dolorem ab ut molestias possimus commodi magni maiores iure ipsam amet at odio sunt voluptate temporibus rerum quos!
	</section>

	<footer>
		<button
			ng-click="baloonInstance.toggle();">Confirm</button>
		<button
			ng-click="baloonInstance.toggle();">Cancel</button>
	</footer>
</baloon>
```

The baloonFactory's getNewBaloon method gets a configuration object in which you define two keys.
The first one is the events and the second one is style.

Events
===

* onInflate -- called when the baloon (modal) is inflated (opened).
* onDeflate -- called when the baloon (modal) is deflated (closed).
* autoDeflate -- true/false if the baloon is deflated on clicking outside it (clicking the dimmed screen). By default this is set to true.
* toggle -- Predefined event that toggles the baloon, directly accessible through the instance, meant
to be used for controlling the state of the baloon.

Style
===

The style key holds js object that is applied to the modal wrapper itself. Here you can set the width.
It is advisable not to set any height because they modal itself is responsive depending on the content it holds.