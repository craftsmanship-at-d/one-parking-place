import {Box, Button} from "@material-ui/core";
import React from "react";
import {Trans, Translation} from "react-i18next";

export class NavbarComponent extends React.Component {

    public render() {
        return <Box display="flex" flexDirection="column">
            <Button variant="contained" href="#contained-buttons">
                <Trans i18nKey="navbar.preview">
                </Trans>
            </Button>
            <Button variant="contained" href="#contained-buttons">
                <Trans i18nKey="navbar.reserve">
                </Trans>
            </Button>
            <Button variant="contained" href="#contained-buttons">
                <Trans i18nKey="navbar.leave">
                </Trans>
            </Button>
        </Box>;
    }
}
