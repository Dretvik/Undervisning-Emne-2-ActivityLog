const app = document.getElementById('app');

const model = {
    app: {
        loggedInUser: null,
        currentPage: 'activityPage',
        mainMenu: false,
        filter: false,
        selectedActivityId: 0,
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
            category: null,
            difficulty: null,
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