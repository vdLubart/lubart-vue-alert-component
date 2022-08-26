# Vue component to alert user 

Package create different type alerts in Bootstrap style, but it does not need the
framework itself. Following types are supported:

- danger
- success
- info
- warning

## Installation

Current package is private and can be installed only from the local
 Sinopia server. Before start installation make sure that server is running:

```bash
$ sinopia
```

To install the component run:

```bash
$ npm i lubart-vue-alert-component --save
```

Next, you must register the component in the app.js (or similar) file.
The most common use case is to do that globally.

```js
//in your app.js or similar file
import Vue from 'vue';
import { AlertComponent } from 'lubart-vue-alert-component';

Vue.component('alert-component', AlertComponent);
```

Alternatively you can do:

```js
//in your app.js or similar file
import Vue from 'vue';
import AlertComponent from 'lubart-vue-alert-component';

AlertComponent.register(Vue);
```

## Usage

Use following code to add alert to the template:

```html
<alert-component :notes="alertNotes" status="success"></alert-component>
```

### Properties

Following properties are available:

- **notes** - object or array with alert notes
- **status** - alert status, available following values: danger, success, info, 
warning. Default value is `success`
- **render-html** - boolean flag shows should notes be rendered as HTML or not.
Default value is `false`