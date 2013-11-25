// DO NOT EDIT THIS FILE - it is generated by grunt
M.ThemeVars = {
    _vars: {
    "default": {
        "pink": "#AA66CC",
        "orange": "#FFBB33",
        "red": "#FF4444",
        "lightred": "#FF2D55",
        "lightblue": "#46b8da",
        "blue": "#06AEF3",
        "darkblue": "#0099CC",
        "green": "#99CC00",
        "grey": "#8E8E93",
        "lightgrey": "#c3c3c3",
        "white": "#FFFFFF",
        "darkwhite": "#F2F2F2",
        "black": "#000000",
        "debug-1": "#02ccb9",
        "debug-2": "#00cc09",
        "debug-3": "#cc3500",
        "debug-4": "#cc008d",
        "debug-5": "#9f00cc",
        "debug-6": "#4f00cc",
        "debug-7": "#003fcc",
        "debug-8": "#0073cc",
        "grid-columns": "12",
        "grid-gutter-width": "30px",
        "button-border-width": "1px",
        "button-border-color": "#999",
        "button-border-radius": "4px",
        "button-border-style": "solid",
        "form-border-width": "1px",
        "form-border-color": "#999",
        "form-border-style": "solid",
        "form-element-border": "1px solid #999",
        "textfield-icon-padding": "30px",
        "textfield-icon-x-position": "4px",
        "textfield-icon-y-position": "3px",
        "m-primary-color": "#06AEF3",
        "m-primary-border-color": "#46b8da",
        "m-primary-active-color": "#0099CC",
        "m-primary-active-text-color": "#FFFFFF",
        "tablayout-menu-height": "50px",
        "tablayout-menu-button-padding": "13px 0 0 0",
        "tablayout-menu-scroll-button-width": "200px",
        "m-primary-font-family": "\"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif",
        "m-primary-font-weight": "300",
        "m-primary-font-size": "1.8rem",
        "m-primary-line-height": "22px",
        "m-primary-font-color": "#000000",
        "modal-backdrop-background-color": "#000000"
    },
    "android_dark": {
        "m-primary-color": "#669900",
        "m-primary-border-color": "#669900",
        "m-primary-active-color": "#99CC00"
    },
    "android_light": {
        "m-primary-color": "#669900",
        "m-primary-border-color": "#669900",
        "m-primary-active-color": "#99CC00"
    },
    "ios": {
        "pink": "#AA66CC",
        "orange": "#FF9500",
        "red": "#FF3B30",
        "lightred": "#FF2D55",
        "lightblue": "#46b8da",
        "blue": "#59C8FA",
        "darkblue": "#007AFF",
        "green": "#4BD964",
        "grey": "#8E8E93",
        "m-primary-font-family": "-apple-system-font",
        "m-primary-active-color": "transparent",
        "m-primary-active-text-color": "#007AFF",
        "tablayout-menu-height": "80px",
        "tablayout-menu-scroll-button-width": "140px"
    }
},
    get: function (name, theme) {
        var theme = theme || 'default';
        var result = this._vars[theme][name];
        if (!result && theme != 'default') {
            result = this._vars['default'][name];
        }
        if (!result) {
            console.log('Can not find varibale "' + name + '".');
        }
        return result;
    }
}