import * as types from '../constants/ActionTypes';

// 根据标准筛选不同类型的todos
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;
