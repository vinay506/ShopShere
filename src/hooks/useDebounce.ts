import { useCallback, useRef } from "react"

export const useDebounce = (delay: number) => {
    const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

    return useCallback((cb: () => void) => {
        if (ref.current) {
            clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
            cb();
        }, delay);
    }, [delay]);
}