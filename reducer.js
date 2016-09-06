import Octopus from './js/octopus';

const reducer = (state = [], action) => {
    switch(action.type) {
        case 'SPAWN_OCTOPUS':
            return [
                ...state, new Octopus
            ];
        case 'KILL_OCTOPUS':

            return state;
        default:
            return state;
    }
};

export default reducer;
