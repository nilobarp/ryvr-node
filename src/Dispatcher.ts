import { EventEmitter } from 'events';

export interface DispatcherAction {
    event: number;
    payload: any;
}

export type SubscriberFn = (payload) => void;

class StaticDispatcher extends EventEmitter {
    private eventNamePrefix = '_ryvr_event_';

    register(event: number, fn: SubscriberFn) {
        this.on(this.eventNamePrefix + event, fn);
    }

    dispatch(action: DispatcherAction) {
        this.emit(this.eventNamePrefix + action.event, action.payload);
    }
}

const Dispatcher = new StaticDispatcher();

export {
    Dispatcher
};