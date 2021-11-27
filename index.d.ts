declare type CallBack = (event: KeyboardEvent) => void;
export default class LongPress {
    private readonly element;
    constructor(element: HTMLInputElement, cb: CallBack, delay?: number);
    private start;
    private stop;
    private destroy;
}
export {};
