class LoggerStrategy {

    static noDate(timestamp: string, message: string) {
        console.log('noDate', message);
    }

    static toFile(timestamp: string, message: string) {
        console.log('toFile', message);
    }

    static toConsole(timestamp: string, message: string) {
        console.log('toConsole', `${timestamp} - ${message}`);
    }

    static none(timestamp: string, message: string) {
        // No work
    }

}

export default LoggerStrategy;