declare global {
    interface Window {
        logLevel?: unknown;
    }
}

enum LogLevel {
    error,
    warn,
    info,
}

class Logger {
    public isLogLevelEnabled(level: LogLevel): boolean {
        if (typeof window.logLevel === 'number') {
            return window.logLevel >= level;
        }
        window.logLevel = 0;
        return 0 >= level;
    }

    public log(a: string): void {
        if (this.isLogLevelEnabled(LogLevel.info)) {
            console.log(a);
        }
    }

    public logWarn(a: string): void {
        if (this.isLogLevelEnabled(LogLevel.warn)) {
            console.warn(a);
        }
    }

    public logError(a: string): void {
        if (this.isLogLevelEnabled(LogLevel.error)) {
            console.error(a);
        }
    }
}

export default new Logger();
