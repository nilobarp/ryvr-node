import { Dispatchable } from './Dispatchable';
import { Dispatcher, DispatcherAction } from './Dispatcher';

export interface RyvrData {
    index: number;
    blob: any;
    timestamp: number;
}

class Ryvr {
    private Store: RyvrData[];
    private blobIndex: number;
    constructor() {
        this.Store = [];
        this.blobIndex = 0;
    }
    append(blob: any) {
        const _blob = {
            index: ++this.blobIndex,
            blob,
            timestamp: +new Date()
        };
        this.Store.push(_blob);
        Dispatcher.dispatch({
            event: Dispatchable.RYVR_DATA_APPENDED,
            payload: _blob
        });
    }
}

const ryvr = new Ryvr();

Dispatcher.register(Dispatchable.RYVR_DATA_APPENDED, (payload) => {
    console.log(payload);
});

ryvr.append('some data');
ryvr.append('some more data');