import {useEffect, useState} from "react";

interface Result {
    overflowY: boolean;
    overflowX: boolean;
}

export const useIsOverflows = (element: HTMLElement | null): Result => {
    const {
        overflowX: defaultOverflowX,
        overflowY: defaultOverflowY
    } = element ? getIsOverflowing(element) : defaultValue;
    const [overflowX, setOverflowX] = useState(defaultOverflowX);
    const [overflowY, setOverflowY] = useState(defaultOverflowY);

    useEffect(() => {
        if (!element) {
            return;
        }

        const handler = (): void => {
            const overflowing = getIsOverflowing(element)

            setOverflowX(overflowing.overflowX);
            setOverflowY(overflowing.overflowY)
        }

        handler();
        window.addEventListener('resize', handler);

        return (): void => {
            window.removeEventListener('resize', handler);
        }
    }, [element])

    if (!element) {
        return defaultValue;
    }

    return {overflowY, overflowX};
}

const getIsOverflowing = (element: HTMLElement): Result => {
    const {clientWidth, clientHeight, scrollWidth, scrollHeight} = element

    return {
        overflowX: scrollWidth > clientWidth,
        overflowY: scrollHeight > clientHeight
    }
}

const defaultValue = {
    overflowY: false,
    overflowX: false
}