import { useEffect, useRef } from 'react';

/**
 * Hook that will call callback function every {delay} milliseconds.
 * If {callback} changes, interval will not restart.
 * If Delay changes, interval will restart.
 *
 * @param delayMs Delay in milliseconds, if null interval will pause.
 */
export function useInterval(callback: () => void, delayMs: number | null) {
    const savedCallback = useRef<() => void>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current?.();
        }

        if (delayMs === null) return undefined;
        const id = setInterval(tick, delayMs);
        return () => clearInterval(id);
    }, [delayMs]);
}

export function useAsyncInterval(callback: () => Promise<void>, delayMs: number | null) {
    const savedCallback = useRef<() => Promise<void>>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        if (delayMs === null) return undefined;
        let timeoutId = setTimeout(tick, delayMs);
        function tick() {
            savedCallback
                .current?.()
                .catch(console.error)
                .finally(() => {
                    if (delayMs === null || timeoutId === -1) return;
                    timeoutId = setTimeout(tick, delayMs);
                });
        }

        return () => {
            clearTimeout(timeoutId);
            timeoutId = -1;
        };
    }, [delayMs]);
}
