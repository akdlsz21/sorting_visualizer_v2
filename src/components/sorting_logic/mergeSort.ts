import {
	sortActionT,
	visualArrayT,
	visualBarT,
} from '../../features/visualArray/visualArraySlice';

function merge(
	arr: visualArrayT,
	start: number,
	mid: number,
	end: number,
	stateQueue: sortActionT[]
) {
	let start2 = mid + 1;

	// If the direct merge is already sorted
	if (arr[mid].value <= arr[start2].value) {
		return;
	}

	// Two pointers to maintain start
	// of both arrays to merge
	while (start <= mid && start2 <= end) {
		// If element 1 is in right place
		let operation = {};
		if (arr[start].value <= arr[start2].value) {
			operation = { compareIdx: start };
			stateQueue.push(operation);
			start++;
		} else {
			let value = arr[start2];
			let index = start2;

			// Shift all the elements between element 1
			// element 2, right by 1.
			while (index !== start) {
				let operation = {};

				arr[index] = Object.create(arr[index - 1]);
				operation = { selectedIdx: index, swapIdx: index - 1 };
				index--;
				stateQueue.push(operation);
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
	arr: visualArrayT = [],
	l: number = 0,
	r: number = arr.length - 1,
	stateQueue: sortActionT[] = []
) {
	if (l < r) {
		// Same as (l + r) / 2, but avoids overflow
		// for large l and r
		let m = l + Math.floor((r - l) / 2);

		// Sort first and second halves
		mergeSort_(arr, l, m, stateQueue);
		mergeSort_(arr, m + 1, r, stateQueue);

		merge(arr, l, m, r, stateQueue);
	}
}

function mergeSort(
	arr: visualArrayT,
	l: number = 0,
	r: number = arr.length - 1
) {
	const stateQueue: sortActionT[] = [];
	mergeSort_(arr, l, r, stateQueue);
	console.log(stateQueue);
	return stateQueue;
}

export default mergeSort;
