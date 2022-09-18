import { actions } from '../../consts';

export const setActive = (index) => ({
    type: actions.setActive,
    payload: index
})