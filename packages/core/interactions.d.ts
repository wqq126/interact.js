import Signals from '@interactjs/utils/Signals';
import InteractionBase from './Interaction';
import { Scope } from './scope';
declare module '@interactjs/core/scope' {
    interface Scope {
        Interaction: typeof InteractionBase;
        interactions: {
            signals: Signals;
            new: (options: any) => InteractionBase;
            list: InteractionBase[];
            listeners: {
                [type: string]: Function;
            };
            eventMap: any;
            pointerMoveTolerance: number;
        };
        actions: Actions;
        prevTouchTime: number;
    }
    interface Actions {
        names: string[];
        methodDict: {
            [key: string]: string;
        };
        eventTypes: string[];
    }
}
declare function install(scope: Scope): void;
declare function doOnInteractions(method: any, scope: any): (event: any) => void;
export declare function newInteraction(options: any, scope: any): any;
declare function onDocSignal({ doc, scope, options }: {
    doc: any;
    scope: any;
    options: any;
}, signalName: any): void;
declare const _default: {
    install: typeof install;
    onDocSignal: typeof onDocSignal;
    doOnInteractions: typeof doOnInteractions;
    newInteraction: typeof newInteraction;
    methodNames: string[];
};
export default _default;
