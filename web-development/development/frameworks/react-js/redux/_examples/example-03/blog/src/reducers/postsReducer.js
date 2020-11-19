export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS': 
            return action.payload;
        default:
            return state; 
    }
}

// export default () => {
//     return 123;
// };

// NB: The following are invalid exports for default unamed imports.

// export default postsReducer = () => {
//     return 123;
// }

// export default function postReducer() {
//     return 123;
// }