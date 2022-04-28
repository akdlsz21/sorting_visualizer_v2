import { visualArrayT } from '../../features/visualArray/visualArraySlice';
import { WHITE } from '../../features/visualArray/visualArraySlice';

// https://gist.github.com/spyesx/485e4584aae767201f41
function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function resetArray(quantity: number): visualArrayT {
	const array: visualArrayT = [];
	for (let i = 0; i < quantity; i++) {
		let num = randomIntFromInterval(50, 500);
		array.push({ value: num, state: { color: WHITE } });
	}
	return array;
}

export default resetArray;
