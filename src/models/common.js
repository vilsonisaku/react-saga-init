import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  takeScreenWidth: ["screenWidth"],
  toggleModal: [],
  updateLanguage: ["language"],
  openLinkFooter: ["linkFooter"],
  setDevice: ["deviceType"],
  setMobileCheck: ["mobileCheck"],
  setLoginInfos: ["loginInfos"],
});

export const CrmTypes = Types;
export default Creators;

const INITIAL_STATE = {
  loginInfos: true,
  deviceType: "unknown",
  mobileCheck: true,
  screenWidth: window.innerWidth,
  modal: false,
  language: 1,
  linkFooter: null,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOGIN_INFOS]: (state, { loginInfos }) => ({
    ...state,
    loginInfos,
  }),
  [Types.SET_MOBILE_CHECK]: (state, { mobileCheck }) => ({
    ...state,
    mobileCheck,
  }),
  [Types.SET_DEVICE]: (state, { deviceType }) => ({
    ...state,
    deviceType,
  }),

  [Types.TAKE_SCREEN_WIDTH]: (state, { screenWidth }) => ({
    ...state,
    screenWidth,
  }),
  [Types.TOGGLE_MODAL]: (state) => ({
    ...state,
    modal: !state.modal,
  }),
  [Types.UPDATE_LANGUAGE]: (state, { language }) => ({
    ...state,
    language,
  }),
  [Types.OPEN_LINK_FOOTER]: (state, { linkFooter }) => ({
    ...state,
    linkFooter,
  })

});
