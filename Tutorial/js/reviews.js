(function(){

	var app = angular.module('store-reviews', [ ]);

	
	app.controller("ReviewController", function(){
			this.review = {};

			this.addReview = function(product){
				product.reviews.push(this.review);
				this.review = {};
			};
	});




})();
