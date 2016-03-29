angular.module('tweet', ['ngTwitter'])
	.controller('Post', ['$scope', '$http', '$twitterApi', function($scope, $http, $twitterApi) {
		$scope.name = 'carine';
		
		$scope.create = function() {
			console.log('info', $scope.name)
			return $http.post('https://api.twitter.com/1.1/statuses/update.json', $scope.name)
			.success(function(data) {
				console.log('this worked', data)
			});
		}


	}])