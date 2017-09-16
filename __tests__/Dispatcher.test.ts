import { Dispatchable } from '../src/Dispatchable';
import { Dispatcher } from '../src/Dispatcher';

test ('exports static Dispatcher', () => {
    expect(Dispatcher).toHaveProperty('_events');
});

test ('registers a subscriber', () => {
    const listener = jest.fn();
    Dispatcher.register(0, listener);
    // tslint:disable-next-line:no-string-literal
    expect(Dispatcher['_eventsCount']).toEqual(1);
});

test ('dispatches actions with given payload', () => {
    const listener = jest.fn();
    const payload = { blue: 'blue', red: 'red' };
    Dispatcher.register(0, listener);
    Dispatcher.dispatch({
        event: Dispatchable.RYVR_DATA_APPENDED,
        payload
    });
    expect(listener).toHaveBeenCalledWith(payload);
});