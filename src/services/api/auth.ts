import api from './api';

export default new (class AuthService {
  public login(username: string, password: string) {
    return api.post<{access_token: string}>('/auth/login/', {
      username,
      password,
    });
  }

  public signup() {
    //
  }
})();
