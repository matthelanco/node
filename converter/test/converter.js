const {expect} = require("chai");
const {celciusToFahrenheit, fahrenheitToCelcius} =  require("../app/converter");


describe("temp converter", function (){
	describe("celcius to fahrenheit conversion",  function() {
		function makeTest (celcius) {
			let expected = ((celcius / (5/9)) + 32).toFixed(2) ;
			it (`${celcius} to fahrenheit is: ${expected}`, function(){
				expect (celciusToFahrenheit(celcius).toFixed(2)).to.equal(expected);
			});
		};
		for (let x = 1 ; x < 50; x++){
			makeTest(x);
		}
	});
	describe("fahrenheit to celcius conversion",  function() {
		function makeTest (fahrenheit) {
			let expected = ((fahrenheit - 32) * (5/9)).toFixed(2);

			it (`${fahrenheit} to celcius is: ${expected}`, function(){
				expect (fahrenheitToCelcius(fahrenheit).toFixed(2)).to.equal(expected);
			});
		};
		for (let x = 1 ; x < 50; x++){
			makeTest(x);
		}
	});
});
