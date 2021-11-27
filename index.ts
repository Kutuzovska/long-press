/*
 * Project: vanilla-long-press
 * Created Date: Friday November 26th 2021
 * Author: Churkin Nikolay
 * Emaul: nc19091997@gmail.com
 * Copyright (c) 2021 Kutuzovksa
 */

type CallBack = (event: PointerEvent) => void;

export interface Input extends HTMLInputElement {
  _longPressTimer: number | null;
  _longPressDelay: number;
  _longPressCallBack: CallBack;
  _longPressStart: CallBack;
  _longPressStop: CallBack;
  _longPressDestroy: () => void;
}

export default class LongPress {
  private readonly element: Input;

  constructor(element: HTMLInputElement, cb: CallBack, delay = 1300) {
    this.element = element as Input;
    this.element._longPressCallBack = cb;
    this.element._longPressStart = this.start;
    this.element._longPressStop = this.stop;
    this.element._longPressDelay = delay;
    this.element._longPressDestroy = this.destroy(this.element);

    this.element.addEventListener('pointerdown', this.element._longPressStart);
    this.element.addEventListener('pointerup', this.element._longPressStop);
  }

  private start(event: PointerEvent): void {
    const element = this as unknown as Input;

    if (element._longPressTimer === null) {
      element._longPressTimer = window.setTimeout(() => {
        if (element === document.activeElement) element._longPressCallBack(event);
        element._longPressStop(event);
      }, element._longPressDelay);
    }
  }

  private stop(): void {
    const element = this as unknown as Input;

    if (element._longPressTimer) clearTimeout(element._longPressTimer);
    element._longPressTimer = null;
  }

  private destroy(element: HTMLInputElement): () => void {
    return () => {
      element.removeEventListener('pointerdown', this.start);
      element.removeEventListener('pinterup', this.stop);
    };
  }
}
