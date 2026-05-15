
import { save, load } from "./storage.js";

const STORAGE_KEY = "todos";
const FILTER_KEY = "filter";
const THEME_KEY = "theme";

export const state = {
    todos: load(STORAGE_KEY, []),
    filter: load(FILTER_KEY, "all"),
    theme: load(THEME_KEY, "light")
};

export function saveState() {
    save(STORAGE_KEY, state.todos);
    save(FILTER_KEY, state.filter);
    save(THEME_KEY, state.theme);
}
