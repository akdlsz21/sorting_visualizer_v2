const quickSort = (
	arr: number[],
	left: number,
	right: number,
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
	const stateQueue: number[][] = [];
	_quickSort(arr, left, right, setVisualArray, stateQueue);
	let timer = 100;

	stateQueue.forEach((state, idx) => {
		setTimeout(() => {
			setVisualArray([...state]);
		}, timer);
		console.log('IDX: ', idx);
		timer += 100;
	});
};

const _quickSort = (
	arr: number[],
	left: number,
	right: number,
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>,
	stateQueue: number[][]
) => {
	let index: number;
	if (arr.length > 1) {
		index = partition(arr, left, right, stateQueue);
		if (left < index - 1)
			_quickSort(arr, left, index - 1, setVisualArray, stateQueue);
		if (index < right)
			_quickSort(arr, index, right, setVisualArray, stateQueue);
	}
};

const partition = (
	arr: number[],
	left: number,
	right: number,
	stateQueue: number[][]
) => {
	let pivot = arr[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		while (arr[i] < pivot) i++;
		while (arr[j] > pivot) j--;
		if (i <= j) {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
			j--;
			stateQueue.push([...arr]);
		}
	}

	return i;
};

export default quickSort;
