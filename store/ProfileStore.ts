import { makeAutoObservable } from "mobx";

export enum ProfileItemType {
    INPUT,
    SELECT,
    MULTISELECT
};

class ProfileStore {
    profileItemList = [
        {
            icon: require('../assets/icon-username.png'),
            label: 'Username',
            value: 'Lover',
            type: ProfileItemType.INPUT
        },
        {
            icon: require('../assets/icon-age.png'),
            label: 'Age',
            value: 18,
            type: ProfileItemType.SELECT,
            options: [...new Array(120).keys()].map((it, index) => {
                return {
                    label: index + 1,
                    value: index + 1
                }
            })
        },
        {
            icon: require('../assets/icon-gender.png'),
            label: 'Gender',
            value: 0,
            type: ProfileItemType.SELECT,
            options: [{
                label: 'Male',
                value: 0,
            }, {
                label: 'Female',
                value: 1
            }, {
                label: 'Other',
                value: 2
            }]
        },
        {
            icon: require('../assets/icon-country.png'),
            label: 'Country',
            value: 0,
            type: ProfileItemType.SELECT,
            options: [{
                label: 'US',
                value: 0,
            }, {
                label: 'Sydney',
                value: 1
            }]
        },
        {
            icon: require('../assets/icon-like.png'),
            label: 'I like',
            value: [0],
            type: ProfileItemType.MULTISELECT,
            options: [
                {
                    label: 'Travel',
                    value: 0,
                },
                {
                    label: 'Movie',
                    value: 1,
                },
                {
                    label: 'Reading',
                    value: 2,
                },
                {
                    label: 'Fashion',
                    value: 3,
                },
                {
                    label: 'Tech',
                    value: 4,
                },
                {
                    label: 'Migration',
                    value: 5,
                },
            ],
        },
        {
            icon: require('../assets/icon-lang.png'),
            label: 'Language',
            value: 0,
            type: ProfileItemType.SELECT,
            options: [
                {
                    label: 'English',
                    value: 0,
                },
                {
                    label: 'Chinese',
                    value: 1,
                },
                {
                    label: 'Other',
                    value: 2,
                },
            
            ],
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    changeValue(label, value) {
        const activieProfileItem = this.profileItemList.find(it => it.label === label);
        if(activieProfileItem) {
            activieProfileItem.value = value;
        }
    }
}

export default new ProfileStore();
