# Division

> A set of web components built with stenciljs

## Getting started

```bash
npm i --save @division/core
```

or

```js
<script src="https://cdn.jsdelivr.net/npm/@division/core@latest"></script>
```

## Components

### Button

```html
<dvn-button></dvn-button>
```

| Property   | Attribute  | Description                                                            | Type                               | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------- | ---------------------------------- | ----------- |
| `disabled` | `disabled` | Determines if a button is disabled or not                              | `boolean`                          | `false`     |
| `fill`     | `fill`     | Determines the buttons fill type. Default is `filled`                  | `"clear" \| "filled" \| "outline"` | `"filled"`  |
| `loading`  | `loading`  | Determines if the button is disabled because something is loading      | `boolean`                          | `false`     |
| `position` | `position` | Determines if it's a raised button or flat button. Default is `raised` | `"flat" \| "raised"`               | `"raised"`  |
| `shape`    | `shape`    | Determines if a button has rounded edges. Default is `default`         | `"default" \| "round"`             | `"default"` |
| `size`     | `size`     | Determines the size of the button. Default is `default`                | `"default" \| "large" \| "small"`  | `"default"` |
| `type`     | `type`     | Determines the button type. Default is `button`                        | `"button" \| "reset" \| "submit"`  | `"button"`  |

## About

> Division

<div>
    <script src="https://cdn.jsdelivr.net/npm/@division/core@latest"></script>
    dd<dvn-button></dvn-button>ss
</div>