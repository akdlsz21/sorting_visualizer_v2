const bubbleSort = (visualArray: number[]) => {
	const array = [...visualArray];
	const stateQueue = [];

	let count = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				stateQueue.push([...array]);
				count++;
			}
		}
	}

	return stateQueue;
};

export default bubbleSort;
