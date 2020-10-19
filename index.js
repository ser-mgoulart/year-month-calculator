const YMCalculator = require("./ym-calculator")

function assert(test, expec){
	let testr = YMCalculator.diff(test.tests, test.teste);
	if (testr == expec){
		console.log("Test "+test.number+" passed");
	} else {
		console.log("Test "+test.number+" failed. Expected: "+expec+" but got "+testr);
	}
}

function main() {
	
	let test = {
		tests: "",
		teste: "",
		number: 0
	};

	test.tests = "202205";
	test.teste = "202010";
	test.number = 1;
	assert(test, 19);

	test.tests = "202010";
	test.teste = "202205";
	test.number = 2;
	assert(test, 19);

	test.tests = "202003";
	test.teste = "202010";
	test.number = 3;
	assert(test, 7);

	test.tests = "202101"
	test.teste = "202012"
	test.number = 4;
	assert(test, 1);

	test.tests = "202211"
	test.teste = "202005"
	test.number = 5;
	assert(test, 30);

}

main();
