import React from "react";

import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Label } from '@fluentui/react/lib/Label';
import { automatorsTheme } from "../../design";
import { ThemeProvider } from "@fluentui/react";

//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Stack } from '@fluentui/react';

import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';

import { DefaultPalette, FontSizes } from '@fluentui/react/lib/Styling';
import { Nav, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { SignOutButton } from "./SignOutButton";
import { Individual } from "../Individual/Individual";
import { Overall } from "../Overall/Overall";

const navLinkGroupsUser = [
  {
    links: [
      { name: "Individual", url: '/', key: 'key1' },
    ]
  }
];

const navLinkGroupsAdmin = [
  {
    links: [
      { name: "Individual", url: '/', key: 'key1' },
      { name: "Overall", url: '/Overall', key: 'key2' },
      { name: "Administration", url: '/Administration', key: 'key3' },
    ]
  }
];

const topBarStyles = {
  padding: "10px",
  // background: "#482B7C",
  // color: DefaultPalette.white,
  height: 48
};

const navStyles = {
  width: 200,
  paddingRight: 70
};

const styleLabelCapacity = {
  paddingLeft: 30
}

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();
  const accountName = useMsal().accounts[0]?.name;
  console.log(useMsal().accounts[0].idTokenClaims['roles']);
  return (
    <>

      <Stack style={topBarStyles} horizontal verticalAlign="center" horizontalAlign="space-between">
        <Stack.Item ><Label style={{ paddingLeft: '20px', fontSize: '18px', color: {} }}>Capacity</Label></Stack.Item>
        <Stack horizontal verticalAlign="center">
          <Stack.Item><Persona size={PersonaSize.size32} hidePersonaDetails={true} text={accountName} /></Stack.Item>
          <Stack.Item>{isAuthenticated ? <SignOutButton /> : ""}</Stack.Item>
        </Stack>
      </Stack>

      <Stack horizontal>
        <Stack.Item style={navStyles}>
          <Nav groups={(useMsal().accounts[0].idTokenClaims.roles[0]=== "Capacity.Admin") ? navLinkGroupsAdmin : navLinkGroupsUser}></Nav>
        </Stack.Item>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Individual />} />
            <Route path="/Overall" element={<Overall />} />
            <Route path="/Administration" />
          </Routes>
        </BrowserRouter>
      </Stack>

      {props.children}

    </>
  );
};