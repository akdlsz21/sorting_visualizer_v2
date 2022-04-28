import {
	sortActionT,
	visualArrayT,
} from '../../features/visualArray/visualArraySlice';

const bubbleSort = (visualArray: visualArrayT) => {
	const array = [...visualArray];
	const stateQueue: sortActionT[] = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			// array[j] = { ...array[j], state: selected };
			// stateQueue.push([...array]);

			// if (array[j].value > array[j + 1].value) {
			// 	array[j + 1] = { ...array[j + 1], state: compare };
			// 	stateQueue.push([...array]);
			// 	let temp = array[j];
			// 	array[j] = array[j + 1];
			// 	array[j + 1] = temp;
			// 	stateQueue.push([...array]);
			// 	array[j] = { ...array[j], state: swapped };
			// 	stateQueue.push([...array]);
			// }
			// array[j] = { ...array[j], state: defaultState };
			// if (j === array.length - i - 2) {
			// 	array[j + 1] = { ...array[j + 1], state: selected };
			// }
			// stateQueue.push([...array]);

			stateQueue.push({ selectedIdx: j });
			if (array[j].value > array[j + 1].value) {
				stateQueue.push({ compareIdx: j + 1 });
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				stateQueue.push({ swapWithOneHigherIdx: j });
				stateQueue.push({ selectedIdx: j + 1 });
				stateQueue.push({ swapIdx: j });
			}
			stateQueue.push({ defaultIdx: j });
			if (j === array.length - i - 2) {
				stateQueue.push({ selectedIdx: j + 1 });
			}
		}
	}
	// stateQueue[stateQueue.length - 1][0] = {
	// 	...stateQueue[stateQueue.length - 1][0],
	// 	state: selected,
	// };

	return stateQueue;
};

export default bubbleSort;
