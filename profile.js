class Profile {
    constructor() {
        this.clientId = "",
            this.clientSecret = ""

    }
    async getProfile(username) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        const profile = await response.json();
        return {
            profile: profile

        }
    }

}