const app = document.getElementById('app');

const model = {
    app: {
        loggedInUser: null,
        currentPage: 'activityPage',
        mainMenu: false,
        filter: false,
        selectedActivityId: 0,
        filteredActivities: [],
        init: true,
        errorMsg: ''
    },
    input: {
        login: {
            username: '',
            password: '',
        },
        createUser: {
            username: '',
            email: '',
            city: '',
            password: '',
            repeatPw: '',
        },
        filter: {
            category: [{
                checked: false,
                categoryId: 21
            },
            {
                checked: false,
                categoryId: 19
            }
            ],
            difficulty: [{
                difficultyId: 0,
                checked: false,
            },
            {
                difficultyId: 1,
                checked: false,
            },
            {
                difficultyId: 2,
                checked: false,
            },
            {
                difficultyId: 3,
                checked: false,
            },
            {
                difficultyId: 4,
                checked: false,
            }],
        },
        uploadActivity: {
            activityImg: '',
            activityName: '',
            difficulty: null,
            time: 0,
            categoryId: null,
            equipment: [],
            description: '',
        },
        activityView: {
            ratingSlider: 0,
            comment: '',
        },
        editProfileView: {
            username: '',
            city: '',
            password: '',
            repeatPw: '',
            profilePicture: null,
        },
    },
    data: {
        users: [
            {
                username: 'børge',
                userId: 999,
                email: 'børge@getacademy.no',
                city: 'Larvik',
                password: '1234',
                profilePicture: null,
            },
            {
                username: 'lars',
                userId: 1,
                email: 'lars@getacademy.no',
                city: 'Larvik',
                password: '1234',
                profilePicture: null,
            },
        ],
        activities: [
            {
                activityName: 'Klatring',
                activityId: 0,
                activityImg: null,
                difficulty: 4,
                time: 60,
                equipment: [0,],
                description: 'Klatre i fjellvegg',
                categoryId: 21,
            },
            {
                activityName: 'Fiske',
                activityId: 1,
                activityImg: null,
                difficulty: 2,
                time: 120,
                equipment: [2,],
                description: 'Ferskvanns fiske',
                categoryId: 21,
            },
            {
                activityName: 'Ballet',
                activityId: 2,
                activityImg: null,
                difficulty: 7,
                time: 120,
                equipment: [],
                description: 'Danse på tå',
                categoryId: 19,
            },
            {
                activityName: 'Hip hop dans',
                activityId: 3,
                activityImg: null,
                difficulty: 4,
                time: 120,
                equipment: [],
                description: 'Danse med swag',
                categoryId: 19,
            },
        ],
        equipment: [
            {
                equipmentName: 'klatresko',
                equipmentId: 0,
            },
            {
                equipmentName: 'fiskestang',
                equipmentId: 2,
            },
        ],
        difficulties: [
            {   difficultyId: 0,
                name: '1-2',
                value: {min: 1,
                        max: 2}
            },
            {   difficultyId: 1,
                name: '3-4',
                value: {min: 3,
                        max: 4}
            },
            {   difficultyId: 2,
                name: '5-6',
                value: {min: 5,
                        max: 6}
            },
            {   difficultyId: 3,
                name: '7-8',
                value: {min: 7,
                        max: 8}
            },
            {   difficultyId: 4,
                name: '9-10',
                value: {min: 9,
                        max: 10}
            }
        ],
        categories: [
            {
                categoryName: 'friluftsliv',
                categoryId: 21,
            },
            {
                categoryName: 'Dans',
                categoryId: 19,
            },
        ],
        reviews: [
            {
                userId: 999,
                activityId: 0,
                rating: 7,
                review: 'Super kult',
            },
            {
                userId: 1,
                activityId: 0,
                rating: 3,
                review: 'Dette var vanskelig',
            },
        ],

    }
}