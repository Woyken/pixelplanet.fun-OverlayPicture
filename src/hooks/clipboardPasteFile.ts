import { useEffect } from 'react';

export const useClipboardPasteFile = (onPaste: (file: File) => void, mimeTypeRegex: string) => {
    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const { clipboardData } = e;
            if (!clipboardData) return;
            const { items } = clipboardData;
            if (!items) return;

            const files = Array.from(items)
                .filter((i) => i.kind === 'file' && i.type.match(mimeTypeRegex))
                .map((i) => i.getAsFile());

            if (files.length === 0) return;
            const matchedFile = files[0];
            if (!matchedFile) return;
            onPaste(matchedFile);
        };

        document.addEventListener('paste', handlePaste);

        return () => document.removeEventListener('paste', handlePaste);
    }, [onPaste, mimeTypeRegex]);
};
