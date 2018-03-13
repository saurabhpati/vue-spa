import BaseService from './base.service';

class AuthService extends BaseService {
    login(credentials) {
        return this.serviceClient.post('/services/auth.php', credentials)
            .then(response => response.data)
            .catch((reason) => { console.log(reason) });
    }
}

let authService = new AuthService();
export default authService;