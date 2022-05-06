import { sortActionT } from '../../../features/visualArray/visualArraySlice';

export default function mergeSortHelper(que: sortActionT[], length: number) {
	let operations = {};
	for (let i = 0; i < 5; i++) {
		operations = { selectedIdx: length - i };
		que.push(operations);
	}
}
