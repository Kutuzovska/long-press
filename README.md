# Long press

Detected long press

# Features

- Сallback is triggered when the keys are held down for a long time

# Installation

    npm install long-press

# Usage
```html
    <div>
        <input id="my-input">
    </div>

    <script>
        import LongPress from 'long-press';

        const inputElement = document.getElementById('my-input');
        const cb = (event) => {
            console.log('Long press detected!');
        };
        const longPress = new LongPress(inputElement, cb, 1000);

        setTimeout(() => longPress.destroy(), 5000);
    </script>
```
# License

<a href="https://github.com/Kutuzovska/long-press/LICENSE">MIT</a> License
