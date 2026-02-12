import * as Constants from "../common/Constants";

function userLogin() {
    return { type: Constants.ReduxActionsConstants.LOGIN_REQUEST, payload: {} };
}

function userAuthenticated(authStatus) {
    return { type: Constants.ReduxActionsConstants.USER_AUTHENTICATED, payload: { isAuthenticated: authStatus, loading: false } };
}

function userLoginSuccess(userinfo) {
    //console.log('userLoginSuccess');
    return { type: Constants.ReduxActionsConstants.LOGIN_SUCCESS, payload: userinfo };
}

function userLoginFailure() {
    return { type: Constants.ReduxActionsConstants.LOGIN_FAILURE, payload: {} };
}

function userLogout() {
    return { type: Constants.ReduxActionsConstants.LOGOUT_REQUEST, payload: {} };
}

function pageBreadcrumbs(breadcrumbs) {
    return { type: Constants.ReduxActionsConstants.BREAD_CRUMBS, payload: breadcrumbs };
}

function pageActions(actions) {
    return { type: Constants.ReduxActionsConstants.PAGE_ACTIONS, payload: actions };
}

function userMenus(menus) {
    return { type: Constants.ReduxActionsConstants.USER_MENUS, payload: menus };
}

function successAlert(message) {
    return { type: Constants.ReduxActionsConstants.SUCCESS_ALERT, message };
}

function errorAlert(message) {
    return { type: Constants.ReduxActionsConstants.ERROR_ALERT, message };
}

function clearAlerts() {
    return { type: Constants.ReduxActionsConstants.CLEAR_ALERTS };
}

function changeLanguage(lang) {
    return { type: Constants.ReduxActionsConstants.CHANGE_LANGUAGE, payload: lang };
}

function setPageNum(pageNo) {
    return { type: Constants.ReduxActionsConstants.SET_PAGE_NUM, payload: pageNo };
}

function showLoading(loading) {
    return { type: Constants.ReduxActionsConstants.SHOW_LOADING, payload: loading };
}

export function showLoad(dispatchFun) {
    dispatchFun(showLoading(true));
}
export function hideLoad(dispatchFun) {
    dispatchFun(showLoading(false));
}

function userTempData(userDataJson) {
    return { type: Constants.ReduxActionsConstants.USER_TEMP_DATA, payload: userDataJson };
}
function resetUserTempData() {
    return { type: Constants.ReduxActionsConstants.USER_TEMP_RESET_DATA, payload: {} };
}

function fromPage(fromPage) {
    return { type: Constants.ReduxActionsConstants.USER_DATA, payload: { 'fromPage': fromPage } };
}

// global popup1
function globalPopup1(globalPopupJson) {
    //console.log(globalPopupJson);
    return { type: Constants.ReduxActionsConstants.Global_Popup1, payload: globalPopupJson };
}
export function globalPopup1ShowOrHide(flagTrueFalse) {
    //console.log(flagTrueFalse);
    return { type: Constants.ReduxActionsConstants.Global_Popup1_ShowHide, payload: flagTrueFalse };
}
export function globalPopup1Show(dispatchFun) {
    dispatchFun(globalPopup1ShowOrHide(true));
}
export function globalPopup1Hide(dispatchFun) {
    dispatchFun(globalPopup1ShowOrHide(false));
}

// global popup2
function globalPopup2(globalPopupJson) {
    //console.log(globalPopupJson);
    return { type: Constants.ReduxActionsConstants.Global_Popup2, payload: globalPopupJson };
}
export function globalPopup2ShowOrHide(flagTrueFalse) {
    //console.log(flagTrueFalse);
    return { type: Constants.ReduxActionsConstants.Global_Popup2_ShowHide, payload: flagTrueFalse };
}
export function globalPopup2Show(dispatchFun) {
    dispatchFun(globalPopup2ShowOrHide(true));
}
export function globalPopup2Hide(dispatchFun) {
    dispatchFun(globalPopup2ShowOrHide(false));
}

// table header popup
export function tableHeaderPopup(tableHeaderPopupJson) {
    //console.log(globalPopupJson);
    return { type: Constants.ReduxActionsConstants.TableHeader_Popup, payload: tableHeaderPopupJson };
}
export function tableHeaderPopupShowOrHide(flagTrueFalse) {
    //console.log(flagTrueFalse);
    return { type: Constants.ReduxActionsConstants.TableHeader_Popup_ShowHide, payload: flagTrueFalse };
}
export function tableHeaderPopupShow(dispatchFun) {
    dispatchFun(tableHeaderPopupShowOrHide(true));
}
export function tableHeaderPopupHide(dispatchFun) {
    dispatchFun(tableHeaderPopupShowOrHide(false));
}
export function tempData(fromPage) {
    return { type: Constants.ReduxActionsConstants.USER_DATA, payload: { 'fromPage': fromPage } };
}


export const ReduxActions = {
    userLogin,
    userAuthenticated,
    userLoginSuccess,
    userLoginFailure,
    userLogout,

    userMenus,

    successAlert,
    errorAlert,
    clearAlerts,

    pageBreadcrumbs,
    pageActions,

    changeLanguage,
    setPageNum,
    showLoading,
    userTempData,
    resetUserTempData,
    fromPage,

    globalPopup1,
    globalPopup1ShowOrHide,

    globalPopup2,
    globalPopup2ShowOrHide,
    tempData
}