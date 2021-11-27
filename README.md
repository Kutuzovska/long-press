# Vanilla-long-press

Detected long press

# Features

- Сallback is triggered when the keys are held down for a long time

# Installation

    npm install vanilla-long-press

# Usage

```html
<div>
  <input id="my-input" />
</div>

<script>
  import LongPress from "long-press";

  const inputElement = document.getElementById("my-input");
  const cb = (event) => {
    console.log("Long press detected!");
  };
  new LongPress(inputElement, cb, 1000);

  setTimeout(() => inputElement._longPressDestroy(), 5000);
</script>
```

# License

<a href="https://raw.githubusercontent.com/Kutuzovska/long-press/main/LICENSE">MIT</a> License
