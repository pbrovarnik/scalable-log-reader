'use strict';

// Print all entries, across all of the sources, in chronological order.

const MinHeap = require('../lib/min-heap');

module.exports = (logSources, printer) => {
	// try {
	// 	const minHeap = new MinHeap();
	// 	// Insert logEntry from each logSource into the min-heap
	// 	for (const logSource of logSources) {
	// 		let resume = true;
	// 		while (resume) {
	// 			const logEntry = logSource.pop();
	// 			if (!logEntry) {
	// 				resume = false;
	// 				break;
	// 			}
	// 			minHeap.insert(logEntry);
	// 		}
	// 	}
	// 	// Get logEntry with earliest date from heap until it's empty
	// 	while (!minHeap.empty()) {
	// 		const logEntry = minHeap.pop();
	// 		printer.print(logEntry);
	// 	}
	// 	printer.done();
	// 	return console.log('Sync sort complete.');
	// } catch (e) {
	// 	throw e;
	// }
};
