// import logo from './logo.svg';
// import './App.css';
// import { PageLayout } from './components/PageLayout/PageLayout';
// import { initializeIcons } from '@fluentui/react/lib/Icons';
// import { Stack, ThemeProvider } from "@fluentui/react";
// import { automatorsTheme } from "./design";
// import { AuthenticatedTemplate } from '@azure/msal-react';

// initializeIcons();

// function App() {

//   const { instance } = useMsal();
//   const isAuthenticated = useIsAuthenticated();

//   if (!isAuthenticated) handleLogin(instance);

//   return (
//     <AuthenticatedTemplate>
//       <ThemeProvider theme={automatorsTheme}>
//         <PageLayout />
//       </ThemeProvider>
//     </AuthenticatedTemplate>

//   );
// }

// export default App;


// async function handleLogin(instance) {
//   await instance.loginRedirect(loginRequest).catch(e => {
//     console.error(e);
//   });
// }


// function ProfileContent() {
//   const { instance, accounts } = useMsal();
//   const [graphData, setGraphData] = useState(null);

//   const name = accounts[0] && accounts[0].name;

//   function RequestProfileData() {
//     const request = {
//       ...loginRequest,
//       account: accounts[0]
//     };

//     // Silently acquires an access token which is then attached to a request for Microsoft Graph data
//     instance.acquireTokenSilent(request).then((response) => {

//       callMsGraph(response.accessToken).then(response => setGraphData(response));
//     }).catch((e) => {
//       instance.acquireTokenPopup(request).then((response) => {
//         callMsGraph(response.accessToken).then(response => setGraphData(response));
//       });
//     });
//   }

//   return (
//     <>
//       {/* <h5 className="card-title">Welcome {name}</h5>
//       {graphData ?
//         <ProfileData graphData={graphData} />
//         :
//         <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
//       } */}
//     </>
//   );
// }

import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { AuthenticatedTemplate, useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { ThemeProvider, createTheme } from '@fluentui/react';
import { automatorsTheme } from "./design";


import './App.css';



function App() {


  initializeIcons();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) handleLogin(instance);

  return (
    <ThemeProvider>
      <AuthenticatedTemplate>
        <PageLayout>
          <ProfileContent />
        </PageLayout>
      </AuthenticatedTemplate >
    </ThemeProvider>


  );
}
export default App;


async function handleLogin(instance) {
  await instance.loginRedirect(loginRequest).catch(e => {
    console.error(e);
  });
}

function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {

      callMsGraph(response.accessToken).then(response => setGraphData(response));
    }).catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
    });
  }

  return (
    <>
      {/* <h5 className="card-title">Welcome {name}</h5>
      {graphData ?
        <ProfileData graphData={graphData} />
        :
        <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
      } */}
    </>
  );
}

