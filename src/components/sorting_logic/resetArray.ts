import { visualArray } from '../../features/visualArray/visualArraySlice';

// https://gist.github.com/spyesx/485e4584aae767201f41
function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function resetArray(quantity: number) {
	const array: visualArray = [];
	for (let i = 0; i < quantity; i++) {
		let num = randomIntFromInterval(5, 500);
		array.push({ value: num, focused: false });
	}
	return array;
}

export default resetArray;
