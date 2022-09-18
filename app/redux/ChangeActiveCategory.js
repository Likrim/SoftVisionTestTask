import { actions } from "../consts"

const ChangeActiveCategory = (state = {active: 0}, action) => {
    switch(action.type) {
        case actions.setActive: 
            return {active: action.payload};
        default:
            return state;
    }
}

export default ChangeActiveCategory;