# OUI Icons

Default icons for the Optimizely apps and other OUI projects.

## Getting Started

- Clone the repo
- run `npm install`

## Usage

Run `gulp` to run the tasks that generate the svg sprites. After the tasks run in `dist` you'll find:

- `svg-symbols.svg` file that can be copied into your project. The code should appear as the first child of the `<body>`.
- `16.html` is a template to view the icons and copy the code for it to render.

The default code for a 16x16 individual icon is:

```
<svg class="icon">
  <use xlink:href="#add"></use>
</svg>
```

