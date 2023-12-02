
export function getTwitterOauthUrl() {
    const rootUrl = "https://twitter.com/i/oauth2/authorize";
    const options = {
        // redirect_uri: "http://localhost:3000/oauth/twitter", // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
        // redirect_uri: "/my_profile", // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
        // redirect_uri:"http://localhost:3000/api/auth/callback/twitter",
        redirect_uri:"http://localhost:3000/my_profile",

        // redirect_uri: "http://localhost:3000/api/auth/callback/twitter", // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
        // redirect_uri: "http://localhost:3000/oauth/twitter", // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
        client_id: process.env.TWITTER_CLIENT_ID ,
        state: "state",
        response_type: "code",
        code_challenge: "y_SfRG4BmOES02uqWeIkIgLQAlTBggyf_G7uKT51ku8",
        code_challenge_method: "S256",
        scope: ["users.read", "tweet.read", "follows.read", "follows.write"].join(" "), // add/remove scopes as needed
    };
    const qs = new URLSearchParams(options).toString();
    return `${rootUrl}?${qs}`;
}

