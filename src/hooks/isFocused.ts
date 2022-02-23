import { useCallback, useState } from 'react';

export const useIsFocused = () => {
    const [isFocused, setIsFocused] = useState(false);
    const onFocus = useCallback(() => setIsFocused(true), []);
    const onBlur = useCallback(() => setIsFocused(false), []);
    return { isFocused, elementProps: { onFocus, onBlur } };
};
