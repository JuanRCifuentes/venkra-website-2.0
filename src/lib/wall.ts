export type Span = '' | 'big' | 'wide' | 'full' | 'tall';

/**
 * Grid span of tile `i` in a wall of `count` tiles whose first tile is big
 * (2×2), chosen so the wall ends without holes in `columns` columns.
 */
export const wallSpan = (i: number, count: number, columns: 2 | 3): Span => {
	const last = count - 1;
	if (i === 0) return last === 0 ? 'full' : 'big';
	if (columns === 2) return i === last && last % 2 === 1 ? 'wide' : '';
	// Two tiles fit beside the big one, then rows of three.
	if (last === 1) return 'tall';
	if (i < last || i <= 2) return '';
	const leftover = (last - 2) % 3;
	return leftover === 1 ? 'full' : leftover === 2 ? 'wide' : '';
};

// Columns a tile spans; tall tiles crop a photo twice as tall, so they need it as wide as two.
const columnsOf: Record<Span, number> = { '': 1, big: 2, wide: 2, tall: 2, full: 3 };

/** The photo's `sizes` for a tile with these spans in 3 columns and, on phones, 2. */
export const tileSizes = (desktop: Span, mobile: Span) => {
	const share = (span: Span, columns: number) => Math.round((100 * Math.min(columnsOf[span], columns)) / columns);
	return `(max-width: 760px) ${share(mobile, 2)}vw, ${share(desktop, 3)}vw`;
};
