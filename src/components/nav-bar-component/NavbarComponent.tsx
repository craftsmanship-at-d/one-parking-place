import { Box, Button } from '@material-ui/core';
import React from 'react';
import { Trans } from 'react-i18next';

export class NavbarComponent extends React.Component {

    public render(): any {
        return (
            <Box display="flex" flexDirection="column">
                <Button variant="contained" href="#contained-buttons">
                    <Trans i18nKey="navbar.preview"/>
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    <Trans i18nKey="navbar.reserve"/>
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    <Trans i18nKey="navbar.leave"/>
                </Button>
            </Box>
        );
    }
}
