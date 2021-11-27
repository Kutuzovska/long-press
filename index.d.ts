declare type CallBack = (event: KeyboardEvent) => void;
export interface Input extends HTMLInputElement {
    _longPressTimer: number | null;
    _longPressDelay: number;
    _longPressCallBack: CallBack;
    _longPressStart: CallBack;
    _longPressStop: CallBack;
    _longPressDestroy: () => void;
}
export default class LongPress {
    private readonly element;
    constructor(element: HTMLInputElement, cb: CallBack, delay?: number);
    private start;
    private stop;
    private destroy;
}
export {};
