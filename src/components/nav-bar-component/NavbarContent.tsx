import { Button } from '@material-ui/core';
import React from 'react';
import { Trans } from 'react-i18next';
import './NavbarContent.css';

export class NavbarContent extends React.Component {
    render(): any {

        return (
            <div className="box">
                <h2 className="title">
                    <Trans i18nKey="navbar.title"/>
                </h2>
                <Button variant="contained" color="default" className="menu-btn">
                    <Trans i18nKey="navbar.preview"/>
                </Button>
                <Button variant="contained" color="primary" className="menu-btn">
                    <Trans i18nKey="navbar.reserve"/>
                </Button>
                <Button variant="contained" color="secondary" className="menu-btn">
                    <Trans i18nKey="navbar.leave"/>
                </Button>
                <Button variant="contained" color="default" className="bottom-btn">
                    <Trans i18nKey="navbar.details"/>
                </Button>
            </div>
        );
    }
}
