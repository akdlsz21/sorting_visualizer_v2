import {
	sortActionT,
	visualArrayT,
} from '../../features/visualArray/visualArraySlice';

const bubbleSort = (visualArray: visualArrayT) => {
	const array = [...visualArray];
	const stateQueue: sortActionT[] = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - (i + 1); j++) {
			let operations: sortActionT = { selectedIdx: j };
			stateQueue.push(operations);

			if (array[j].value > array[j + 1].value) {
				operations = { selectedIdx: j, compareIdx: j + 1 };
				stateQueue.push(operations);
				operations = { selectedIdx: j, swapIdx: j + 1 };
				stateQueue.push(operations);

				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				// operations = { defaultIdx: j };
				// stateQueue.push(operations);
			}
			if (j === array.length - (i + 2)) {
				operations = { selectedIdx: j + 1, defaultIdx: j };
				stateQueue.push(operations);
			} else {
				operations = { defaultIdx: j };
				stateQueue.push(operations);
			}
		}
	}
	stateQueue.push({ selectedIdx: 0 });
	return stateQueue;
};

export default bubbleSort;
