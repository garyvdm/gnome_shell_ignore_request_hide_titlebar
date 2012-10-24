let old_state;

function init() {
  old_state = false;
}

function enable() {
    old_state = imports.gi.Meta.prefs_get_ignore_request_hide_titlebar();
    imports.gi.Meta.prefs_set_ignore_request_hide_titlebar(true);
}

function disable() {
    imports.gi.Meta.prefs_set_ignore_request_hide_titlebar(old_state);
}

