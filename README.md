# google-calendar-toggle

Toggle Calendars on Google Calendar using <kbd>`</kbd> backquote key as shortcut.

## Installation

### Install Firefox extention

"Code Injector" by Saba: https://addons.mozilla.org/firefox/addon/codeinjector/

### Configure extention

Add rules from [*month-view.js*](https://github.com/didierkrux/google-calendar-toggle/blob/master/month-view.js) and [*agenda-view.js*](https://github.com/didierkrux/google-calendar-toggle/blob/master/agenda-view.js)

![add rules](https://raw.githubusercontent.com/didierkrux/google-calendar-toggle/master/images/add_rules.jpg)

![add javascript](https://raw.githubusercontent.com/didierkrux/google-calendar-toggle/master/images/add_javascript.jpg)

## Documentation

### Configure

Edit the name of calendars you don't want to toggle in this array.

```js
const exeptions = ['Didier Krux', 'Holidays in Hong Kong'];
```

## TODO

- [ ] handle more calendars (calendar might be hidden if you have more than 16 calendars to display)
    -> solution: scroll down first?
- [ ] toggle automatically when changing the view
