export interface IObserver {
    notify(storeName: string, discount: number): void;
}

export interface IObserverable {
    subscribe(observer: IObserver): void;
}

