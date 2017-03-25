class Auth {

  static authenUser = token => {
    localStorage.setItem('token', token);
  }

  static deauthenUser = () => {
    localStorage.removeItem('token');
  }

  static getToken = () => {
    return localStorage.getItem('item');
  }

  static isAuthened = () => {
    return localStorage.getItem('token') != null;
  }

}

export default Auth;
