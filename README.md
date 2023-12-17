# Aurora 🎨 / React

![GitHub release (with filter)](https://img.shields.io/github/v/release/codeAbinash/aurora-react?color=limegrrren)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/aurora-react?color=aa3aec)
![License](https://img.shields.io/github/license/codeAbinash/aurora-react?color=orangered)

![Aurora](https://try-aurora.vercel.app/aurora.png)

The C code highlighting engine for the web.

### Try Aurora [Online](https://try-aurora.vercel.app/) ❤️‍🔥

You can try Aurora online [here](https://try-aurora.vercel.app/) before using it in your project.

<!-- ![Aurora](https://codeAbinash.github.io/aurora/images/banner.jpg) -->

> Don't worry about rerendering your react app. Aurora will take care of it.

## Installation 📦

### Using npm

```bash
npm install aurora-code aurora-react
```

## Usage

### Highlight using classes (recommended)

```tsx
import { Aurora } from 'aurora-react'; // Aurora code Component
import 'aurora-code/themes/oneDarkPro.css'; // Aurora theme (css)
...
// code is the C code string
<Aurora code={code} />
```

#### Configuring the theme in css ⚙️

```css
/* Custom theme */
.aurora-string {
  color: pink;
}
.aurora-keyword {
  color: lime;
}
```

include the css file. And configuration is done ✨.

### Highlight using inline styles (not recommended)

```tsx
import { Aurora } from 'aurora-react'; // Aurora code Component
...
// code is the C code string
<Aurora code={code} />
```

#### Configuring the theme in inline styles ⚙️

```tsx
<Aurora
  code={code}
  config={{
    mode: 'inline',
    styles: {
      comment: 'gray',
      keyword: 'lime',
      name: 'blue',
      function: 'limegreen',
      string: 'pink',
    },
  }}
/>
```

### Available Configurations

Here is an example of theme object for configuring the theme.

```ts
// One Dark Pro theme
one_dark_pro = {
  comment: '#5c6370',
  comment_start: '#5c6370',
  comment_end: '#5c6370',
  preprocessor: '#c678dd',
  defined: '#d19a66',
  header_file: '#98c379',
  keyword: '#c678dd',
  name: '#ef596f',
  string: '#98c379',
  'quote single': '#98c379',
  'quote double': '#98c379',
  'quote angle': '#98c379',
  format_specifier: '#d19a66',
  number: '#d19a66',
  bin_prefix: '#ef596f',
  hex_prefix: '#ef596f',
  oct_prefix: '#ef596f',
  function: '#61afef',
  operator: '#c678dd',
  escape: '#56b6c2',
  'open_paren bracket0': '#d19a66',
  'open_curly bracket0': '#d19a66',
  'close_paren bracket0': '#d19a66',
  'close_curly bracket0': '#d19a66',
  'open_paren bracket1': '#c678dd',
  'open_curly bracket1': '#c678dd',
  'close_paren bracket1': '#c678dd',
  'close_curly bracket1': '#c678dd',
  'open_paren bracket2': '#56b6c2',
  'close_curly bracket2': '#56b6c2',
  'close_paren bracket2': '#56b6c2',
  'open_curly bracket2': '#56b6c2',
  'open_square bracket0': '#c678dd',
  'close_square bracket0': '#c678dd',
  'open_square bracket1': '#d19a66',
  'close_square bracket1': '#d19a66',
  'open_square bracket2': '#56b6c2',
  'close_square bracket2': '#56b6c2',
};
```

Here is an example of theme [css](https://github.com/codeAbinash/aurora/blob/main/public/themes/oneDarkPro.css).


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
