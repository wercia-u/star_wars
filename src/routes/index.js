import {
    MovieList,
    FavList,
} from '../components';

export default {
    routes: [
        {
            id: 1,
            path: '/movies',
            component: MovieList,
            exact: true,
        },
        {
            id: 2,
            path: '/favourite',
            component: FavList,
            exact: true,
        },
    ],
    redirects: [
        {
            id: 1,
            from: '/',
            to: '/movies',
            exact: true,
        },
        {
            id: 2,
            from: '/redirect',
            to: '/movies',
        },
    ]
}