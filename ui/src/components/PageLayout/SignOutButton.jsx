import { useMsal } from "@azure/msal-react";
import { CommandBarButton } from '@fluentui/react';
import { React } from 'react';

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();
    const accountName = useMsal().accounts[0]?.name;

    return (
        <CommandBarButton style={styleCommandBardButton} variant="secondary" onClick={() => handleLogout(instance)}>Sign out</CommandBarButton>
    );
}

const styleCommandBardButton = {

    height: 48
}