'use strict';

// Print all entries, across all of the *async* sources, in chronological order.

const MinHeap = require('../lib/min-heap');

module.exports = (logSources, printer) => {
	return new Promise(async (resolve, reject) => {
		try {
			const minHeap = new MinHeap();

			// Insert logEntry from each logSource into the min-heap asynchronously
			await Promise.all(
				logSources.map(async (logSource) => {
					let resume = true;

					while (resume) {
						const logEntry = await logSource.popAsync();

						if (!logEntry) {
							resume = false;
							break;
						}

						minHeap.insert(logEntry);
					}
				})
			);

			// Get logEntry with earliest date from heap until it's empty
			while (!minHeap.empty()) {
				const logEntry = minHeap.pop();
				printer.print(logEntry);
			}

			printer.done();

			resolve(console.log('Async sort complete.'));
		} catch (e) {
			reject(e);
		}
	});
};
