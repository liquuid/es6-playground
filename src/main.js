import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        
    } catch (err) {
        console.warn("Erro na api");
    }
}

Api.getUserInfo('liquuid');