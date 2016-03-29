angular.module('tweet', [
	'ui.router'
	])
	.config(['$stateProvider', '$urlStateProvider', function($stateProvider, $urlStateProvider) {
		$stateProvider 
			.$state('home', {
				url: '/',
				templateUrl: 'index.html',
				controller: 'Post'
			})
	}])