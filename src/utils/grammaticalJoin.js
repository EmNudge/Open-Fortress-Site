// join items grammatically 
// i.e. "one, two, and three" instead of "one, two, three"

const grammaticalJoin = (arr, oxfordComma = true) =>
	arr.reduce((accum, curr, index, { length }) => {
		const str = accum + curr;
		if (index === length - 1) return str;
		if (index === 0 && length === 2) return `${str} and `;
		if (index !== length - 2) return str + ', ';
		return `${str}${oxfordComma ? ',' : ''} and `;
	}, '');

export default grammaticalJoin;
