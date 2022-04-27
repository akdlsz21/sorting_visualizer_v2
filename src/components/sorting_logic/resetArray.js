// https://gist.github.com/spyesx/485e4584aae767201f41
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function resetArray(setVisualArray) {
	const array = [];
	for (let i = 0; i < 100; i++) {
		let num = randomIntFromInterval(5, 500);
		array.push(num);
	}
	setVisualArray(array);
}

export default resetArray;
