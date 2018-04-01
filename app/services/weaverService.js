// (!) That's strange but Weaver doesn't work when we're importing it as a module, requests get stuck
import 'weaver-sdk/dist/weaver-sdk.full';

const HOST_URL = 'http://thuis.van-loenen.org:9487';

const weaver = new Weaver();

const connect = (hostUrl = HOST_URL) =>
  weaver.connect(hostUrl);

const signUp = userData => {
  const { username, password, email } = userData;
  const user = new Weaver.User(username, password, email);

  return user.signUp();
};

const signIn = userData => {
  const { username, password } = userData;

  return weaver.signInWithUsername(username, password);
};

const signInWithToken = token =>
  weaver.signInWithToken(token);

const getCurrentUser = () =>
  weaver.currentUser();

const getCurrentUserAuthToken = () => {
  const user = weaver.currentUser();

  return user ? user.authToken : null;
};

const weaverService = {
  connect,
  signUp,
  signIn,
  signInWithToken,
  getCurrentUser,
  getCurrentUserAuthToken
};

window.weaverService = weaverService;

export default weaverService;
