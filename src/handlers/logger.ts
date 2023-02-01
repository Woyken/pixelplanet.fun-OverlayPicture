/* eslint-disable no-console */
declare global {
    interface Window {
        logLevel?: unknown;
    }
}

const window: Window | undefined = typeof (globalThis as any).window !== 'undefined' ? (globalThis as any).window : undefined;

enum LogLevel {
    error,
    warn,
    info,
}

const logger = {
    isLogLevelEnabled(level: LogLevel): boolean {
        if (typeof window === 'undefined') return true;

        if (typeof window.logLevel === 'number') {
            return window.logLevel >= level;
        }
        window.logLevel = 0;
        return level <= 0;
    },

    log(a: string, ...args: unknown[]): void {
        if (logger.isLogLevelEnabled(LogLevel.info)) {
            console.log(a, ...args);
        }
    },

    logWarn(a: string, ...args: unknown[]): void {
        if (logger.isLogLevelEnabled(LogLevel.warn)) {
            console.warn(a, ...args);
        }
    },

    logError(a: string, ...args: unknown[]): void {
        if (logger.isLogLevelEnabled(LogLevel.error)) {
            console.error(a, ...args);
        }
    },
};

export default logger;
