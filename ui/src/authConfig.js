export const msalConfig = {
    auth: {
      clientId: "b4ab6163-d911-430f-8d7b-54ba159caf98",
      authority: "https://login.microsoftonline.com/automators.onmicrosoft.com", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      // redirectUri: "http://localhost:3000",
      redirectUri: "https://capacity-ui.azurewebsites.net/"
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };