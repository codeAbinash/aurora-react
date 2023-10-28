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
import 'aurora-code/themes/one dark pro'; // Aurora theme (css)
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
// One Dark Pro
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

Here is an example of theme css

```css
/* The comment Text */
.aurora-comment {
  color: #5c6370;
  font-style: italic;
}

/* The comment start and end e.g. // and */
.aurora-comment_start {
  color: #5c6370;
  font-style: italic;
}

/* The comment start and end e.g. */
.aurora-comment_end {
  color: #5c6370;
  font-style: italic;
}

/* The preprocessor Directive Color */
.aurora-preprocessor {
  color: #c678dd;
}

/* Macro color */
.aurora-defined {
  color: #d19a66;
}

/* Header file color */
.aurora-header_file {
  color: #98c379;
}

/* The keyword color */
.aurora-keyword {
  color: #c678dd;
}

/* Names e.g. variable names */
.aurora-name {
  color: #ef596f;
}

/* String literal color */
.aurora-string {
  color: #98c379;
}

/* Single quote color */
.aurora-quote.single {
  color: #98c379;
}

/* Double quote color */
.aurora-quote.double {
  color: #98c379;
}

/* Format specifier color */
.aurora-format_specifier {
  color: #d19a66;
}

/* Number literal color */
.aurora-number {
  color: #d19a66;
}

/* Binary number prefix color e.g. 0b */
.aurora-bin_prefix {
  color: #ef596f;
}
/* Hexadecimal number prefix color e.g. 0x */
.aurora-hex_prefix {
  color: #ef596f;
}

/* Octal number prefix color e.g. 0 */
.aurora-oct_prefix {
  color: #ef596f;
}

/* Function color */
.aurora-function {
  color: #61afef;
}

/* Operators color */
.aurora-operator {
  color: #c678dd;
}

/* Escape character color */
.aurora-escape {
  color: #56b6c2;
}

/* Bracket pair color 0 */
.aurora-open_paren.bracket0,
.aurora-open_curly.bracket0,
.aurora-close_paren.bracket0,
.aurora-close_curly.bracket0 {
  color: #d19a66;
}

/* Bracket pair color 1 */
.aurora-open_paren.bracket1,
.aurora-open_curly.bracket1,
.aurora-close_paren.bracket1,
.aurora-close_curly.bracket1 {
  color: #c678dd;
}

/* Bracket pair color 2 */
.aurora-open_paren.bracket2,
.aurora-open_curly.bracket2,
.aurora-close_paren.bracket2,
.aurora-close_curly.bracket2 {
  color: #56b6c2;
}

.aurora-open_square.bracket0,
.aurora-close_square.bracket0 {
  color: #c678dd;
}
.aurora-open_square.bracket1,
.aurora-close_square.bracket1 {
  color: #d19a66;
}
.aurora-open_square.bracket2,
.aurora-close_square.bracket2 {
  color: #56b6c2;
}

/* Comma Color*/
/* .comma {
  color: #0d1117;
} */

/* Semicolon Color*/
/* .semicolon {
  color: #0d1117;
} */

/* Colon color*/
/* .colon {
  color: #0d1117;
} */

/* Hash color */
/* .hash {
  color: #0d1117;
} */

/* These will override bracket pair colors */
/* .open_paren {
  
}
.close_paren{

}
.open_curly{

}
.close_curly{

}
.open_square{

}
.close_square{

} */
/* 
.whitespace {
  background-color: #56b6c2;
} */
/* 
.unknown {
  color: red;
} */
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
