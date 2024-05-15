module.exports = class MinHeap {
	constructor() {
		this.data = [];
		this.length = 0;
	}

	insert(value) {
		this.data[this.length] = value;
		this.heapifyUp(this.length);
		this.length++;
	}

	pop() {
		if (this.length === 0) return -1;

		const out = this.data[0];
		this.length--;

		if (this.length === 0) {
			this.data = [];
			return out;
		}

		this.data[0] = this.data[this.length];
		this.heapifyDown(0);

		return out;
	}

	empty() {
		return this.data.length === 0;
	}

	heapifyDown(idx) {
		const leftIdx = this.leftChild(idx);
		const rightIdx = this.rightChild(idx);

		if (idx >= this.length || leftIdx >= this.length) return;

		const leftVal = this.data[leftIdx];
		const leftDate = new Date(leftVal.date);
		const rightVal = this.data[rightIdx];
		const rightDate = new Date(rightVal.date);
		const currVal = this.data[idx];
		const currDate = new Date(currVal.date);

		if (leftDate > rightDate && currDate > rightDate) {
			this.data[idx] = rightVal;
			this.data[rightIdx] = currVal;
			this.heapifyDown(rightIdx);
		} else if (rightDate > leftDate && currDate > leftDate) {
			this.data[idx] = leftVal;
			this.data[leftIdx] = currVal;
			this.heapifyDown(leftIdx);
		}
	}

	heapifyUp(idx) {
		if (idx === 0) return;

		const parentIdx = this.parent(idx);
		const parentVal = this.data[parentIdx];
		const parentDate = new Date(parentVal.date);
		const currVal = this.data[idx];
		const currDate = new Date(currVal.date);

		if (parentDate > currDate) {
			this.data[idx] = parentVal;
			this.data[parentIdx] = currVal;

			this.heapifyUp(parentIdx);
		}
	}

	parent(idx) {
		return Math.floor((idx - 1) / 2);
	}

	leftChild(idx) {
		return idx * 2 + 1;
	}

	rightChild(idx) {
		return idx * 2 + 2;
	}
};
