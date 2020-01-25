class Logger {
    public log(a: string) {
        console.log(a);
    }

    public logWarn(a: string) {
        console.warn(a);
    }

    public logError(a: string) {
        console.error(a);
    }
}

export default new Logger();
