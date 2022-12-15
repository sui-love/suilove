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
            type: ProfileItemType.INPUT,
            key: 'nickname'
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
            }),
            key: 'age'
        },
        {
            icon: require('../assets/icon-gender.png'),
            label: 'Gender',
            value: 'Male',
            type: ProfileItemType.SELECT,
            options: [{
                label: 'Male',
                value: 'Male',
            }, {
                label: 'Female',
                value: 'Female'
            }, {
                label: 'Other',
                value: 'Other',
            }],
            key: 'gender'
        },
        {
            icon: require('../assets/icon-country.png'),
            label: 'Country',
            value: 'US',
            type: ProfileItemType.SELECT,
            options: [{
                label: 'US',
                value: 'US',
            }, {
                label: 'Sydney',
                value: 'Sydney',
            }],
            key: 'country'
        },
        {
            icon: require('../assets/icon-like.png'),
            label: 'I like',
            value: ['Travel'],
            type: ProfileItemType.MULTISELECT,
            options: [
                {
                    label: 'Travel',
                    value: 'Travel',
                },
                {
                    label: 'Movie',
                    value: 'Movie',
                },
                {
                    label: 'Reading',
                    value: 'Reading',
                },
                {
                    label: 'Fashion',
                    value: 'Fashion',
                },
                {
                    label: 'Tech',
                    value: 'Tech',
                },
                {
                    label: 'Migration',
                    value: 'Migration',
                },
            ],
            key: 'ilike'
        },
        {
            icon: require('../assets/icon-lang.png'),
            label: 'Language',
            value: 'English',
            type: ProfileItemType.SELECT,
            options: [
                {
                    label: 'English',
                    value: 'English',
                },
                {
                    label: 'Chinese',
                    value: 'Chinese',
                },
                {
                    label: 'Other',
                    value: 'Other',
                },

            ],
            key: 'language'
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    changeValue(label, value) {
        const activieProfileItem = this.profileItemList.find(it => it.label === label);
        if (activieProfileItem) {
            activieProfileItem.value = value;
        }
    }

    getValue() {
        return this.profileItemList.reduce((result, profileItem) => {
            result[`${profileItem.key ?? profileItem.label}`] = profileItem.value;
            return result;
        }, {})
    }
}

export default new ProfileStore();
