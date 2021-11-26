/*
 * Project: long-press
 * Created Date: Friday November 26th 2021
 * Author: Churkin Nikolay
 * Emaul: nc19091997@gmail.com
 * Copyright (c) 2021 Kutuzovksa
 */

type CallBack = (event: KeyboardEvent) => void;

interface Input extends HTMLInputElement {
  _longPressTimer: number | null;
  _longPressDelay: number;
  _longPressCallBack: CallBack;
  _longPressStart: CallBack;
  _longPressStop: CallBack;
}

export default class LongPress {
  private readonly element: Input;

  constructor(element: HTMLInputElement, cb: CallBack, delay = 1300) {
    this.element = element as Input;
    this.element._longPressCallBack = cb;
    this.element._longPressStart = this.start;
    this.element._longPressStop = this.stop;
    this.element._longPressDelay = delay;

    this.element.addEventListener("keydown", this.element._longPressStart);
    this.element.addEventListener("keyup", this.element._longPressStop);
  }

  private start(event: KeyboardEvent): void {
    const element = this as unknown as Input;

    if (element._longPressTimer === null) {
      element._longPressTimer = setTimeout(() => {
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

  public destroy() {
    this.element.removeEventListener("keydown", this.start);
    this.element.removeEventListener("keyup", this.stop);
  }
}
