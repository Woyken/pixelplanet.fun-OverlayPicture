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

class Logger {
    public isLogLevelEnabled(level: LogLevel): boolean {
        if (typeof window === 'undefined') return true;

        if (typeof window.logLevel === 'number') {
            return window.logLevel >= level;
        }
        window.logLevel = 0;
        return level <= 0;
    }

    public log(a: string, ...args: unknown[]): void {
        if (this.isLogLevelEnabled(LogLevel.info)) {
            console.log(a, ...args);
        }
    }

    public logWarn(a: string, ...args: unknown[]): void {
        if (this.isLogLevelEnabled(LogLevel.warn)) {
            console.warn(a, ...args);
        }
    }

    public logError(a: string, ...args: unknown[]): void {
        if (this.isLogLevelEnabled(LogLevel.error)) {
            console.error(a, ...args);
        }
    }
}

export default new Logger();
