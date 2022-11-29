import {makeAutoObservable} from "mobx";
import light from "../styles/light";

export enum Theme  {
    light,
    dark,
}

class ThemeStore {
    currentTheme = Theme.light;

    get currentThemeStyles(): typeof light{
        return light;
    }

    constructor() {
        makeAutoObservable(this)
    }

    changeTheme(theme: Theme) {
        this.currentTheme = theme;
    }
}

export default new ThemeStore();
