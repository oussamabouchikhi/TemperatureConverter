
const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
	return Math.round( num * 100 ) /100 ;
	// 3,1456789 * 100
	// 314,56789 / 100
	// 3,14
}

// reset other inputs when one is empty by me still not like it
celsiusInput.addEventListener('change', function() {
	fahrenheitInput.value = '';
	kelvinInput.value = '';
});
fahrenheitInput.addEventListener('change', function() {
	celsiusInput.value = '';
	kelvinInput.value = '';
});
kelvinInput.addEventListener('change', function() {
	celsiusInput.value = '';
	fahrenheitInput.value = '';
});
//

celsiusInput.addEventListener('input', function() {
	const ctemp = celsiusInput.value;
	const ftemp = ctemp * (9/5) + 32;
	const ktemp = ctemp * 1 + 273.15; // or use const ctemp = parseFloat(celsiusInput.value);
	
  	fahrenheitInput.value = roundNum(ftemp);
  	kelvinInput.value = roundNum(ktemp);
	console.log(ctemp);
	
});

function fehToCelAndKel() {
	const ftemp = fahrenheitInput.value;
	const ctemp = (ftemp - 32) / (9/5);
	const ktemp = ctemp * 1 + 273.15;

	celsiusInput.value = roundNum(ctemp);
  	kelvinInput.value = roundNum(ktemp);
	console.log(ftemp);
	
}

fahrenheitInput.addEventListener('input', fehToCelAndKel);

kelvinInput.addEventListener('input', function() {
	const ktemp = kelvinInput.value;
	const ctemp = ktemp - 273.15;
	const ftemp = (ktemp - 273.15) * (9/5) + 32;
  	celsiusInput.value = roundNum(ctemp);
  	fahrenheitInput.value = roundNum(ftemp);
	console.log(ktemp);
});
