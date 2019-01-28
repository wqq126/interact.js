declare function add(element: EventTarget, type: string, listener: Function, optionalArg?: boolean | any): void;
declare function remove(element: EventTarget, type: string, listener?: 'all' | Function, optionalArg?: boolean | any): void;
declare function addDelegate(selector: string, context: EventTarget, type: string, listener: Function, optionalArg?: any): void;
declare function removeDelegate(selector: any, context: any, type: any, listener?: any, optionalArg?: any): void;
declare function delegateListener(event: Event, optionalArg?: any): void;
declare function delegateUseCapture(event: Event): any;
declare const events: {
    add: typeof add;
    remove: typeof remove;
    addDelegate: typeof addDelegate;
    removeDelegate: typeof removeDelegate;
    delegateListener: typeof delegateListener;
    delegateUseCapture: typeof delegateUseCapture;
    delegatedEvents: {};
    documents: any[];
    supportsOptions: boolean;
    supportsPassive: boolean;
    _elements: EventTarget[];
    _targets: any[];
    init(window: Window): void;
};
export default events;
