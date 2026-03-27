import type React from 'react';
import { useRef } from 'react';

type Side = 'top' | 'right' | 'bottom' | 'left';

const SWIPE_THRESHOLD = 80; // px

export function useSwipeToClose(side: Side, onClose?: () => void) {
	const touchStart = useRef<number | null>(null);

	const onTouchStart = (e: React.TouchEvent) => {
		touchStart.current =
			side === 'left' || side === 'right' ? e.touches[0].clientX : e.touches[0].clientY;
	};

	const onTouchEnd = (e: React.TouchEvent) => {
		if (touchStart.current === null) return;

		const end =
			side === 'left' || side === 'right'
				? e.changedTouches[0].clientX
				: e.changedTouches[0].clientY;

		const delta = end - touchStart.current;

		const shouldClose =
			(side === 'right' && delta > SWIPE_THRESHOLD) ||
			(side === 'left' && delta < -SWIPE_THRESHOLD) ||
			(side === 'bottom' && delta > SWIPE_THRESHOLD) ||
			(side === 'top' && delta < -SWIPE_THRESHOLD);

		if (shouldClose) onClose?.();
		touchStart.current = null;
	};

	return { onTouchStart, onTouchEnd };
}
