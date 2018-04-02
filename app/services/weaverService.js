// (!) That's strange but Weaver doesn't work when we're importing it as a module, requests get stuck
import 'weaver-sdk/dist/weaver-sdk.full';

const HOST_URL = 'http://thuis.van-loenen.org:9487';

const weaver = new Weaver();

const connect = (hostUrl = HOST_URL) =>
  weaver.connect(hostUrl);

const signUp = ({ username, password, email }) =>
  (new Weaver.User(username, password, email))
    .signUp();

const signIn = userData =>
  (typeof userData === 'string')
    ? weaver.signInWithToken(userData)
    : weaver.signInWithUsername(
      userData.username,
      userData.password
    );

const getCurrentUser = () =>
  weaver.currentUser();

const weaverService = {
  connect,
  signUp,
  signIn,
  getCurrentUser
};

export default weaverService;
