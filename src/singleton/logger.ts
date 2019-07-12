class Logger {

    private logCount: number = 0;
    private callers: string[] = [];

    public log(message: string, caller: string) {
        this.logCount++;
        if (this.callers.indexOf(caller) === -1) {
            this.callers.push(caller);
        }
        console.log(message);
    }

    get logCounter() {
        return this.logCount;
    }

    get allCallers() {
        return this.callers;
    }

}

export default new Logger();