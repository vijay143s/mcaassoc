import * as Constants from '../../common/Constants';

export const setDelegateUsers = (delegates) => {
    return {
        type: Constants.ReduxActions.SET_DELEGATE_USERS,
        payload: delegates
    }
}