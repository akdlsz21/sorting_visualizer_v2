function merge(
	arr: number[],
	start: number,
	mid: number,
	end: number,
	stateQueue: number[][]
) {
	let start2 = mid + 1;

	// If the direct merge is already sorted
	if (arr[mid] <= arr[start2]) {
		return;
	}

	// Two pointers to maintain start
	// of both arrays to merge
	while (start <= mid && start2 <= end) {
		// If element 1 is in right place
		if (arr[start] <= arr[start2]) {
			start++;
		} else {
			let value = arr[start2];
			let index = start2;

			// Shift all the elements between element 1
			// element 2, right by 1.
			while (index !== start) {
				arr[index] = arr[index - 1];
				index--;
				stateQueue.push([...arr]);
			}
			arr[start] = value;

			// Update all the pointers
			start++;
			mid++;
			start2++;
		}
	}
}

/* l is for left index and r is right index
of the sub-array of arr to be sorted */
function mergeSort_(
	arr: number[] = [],
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>,
	l: number = 0,
	r: number = arr.length - 1,
	stateQueue: number[][]
) {
	if (l < r) {
		// Same as (l + r) / 2, but avoids overflow
		// for large l and r
		let m = l + Math.floor((r - l) / 2);

		// Sort first and second halves
		mergeSort_(arr, setVisualArray, l, m, stateQueue);
		mergeSort_(arr, setVisualArray, m + 1, r, stateQueue);

		merge(arr, l, m, r, stateQueue);
	}
}

function mergeSort(
	arr: number[] = [],
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>,
	l: number = 0,
	r: number = arr.length - 1
) {
	const stateQueue: number[][] = [];
	mergeSort_(arr, setVisualArray, l, r, stateQueue);
	let timeOut = 3;
	stateQueue.forEach((state, index) => {
		setTimeout(() => {
			console.log(`IDX: ${index}`);
			setVisualArray([...state]);
		}, timeOut);
		timeOut += 3;
	});
	stateQueue.length = 0;
}

export default mergeSort;
