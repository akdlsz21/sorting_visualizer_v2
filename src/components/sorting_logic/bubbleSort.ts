import { visualArrayT } from '../../features/visualArray/visualArraySlice';

const bubbleSort = (visualArray: visualArrayT) => {
	const array = [...visualArray];
	const stateQueue = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			array[j] = { ...array[j], focused: !array[j].focused };
			if (array[j].value > array[j + 1].value) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
			stateQueue.push([...array]);
			array[j] = { ...array[j], focused: !array[j].focused };
			stateQueue.push([...array]);
		}
	}

	return stateQueue;
};

export default bubbleSort;
