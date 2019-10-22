import React from "react";

export class NavbarComponent extends React.Component {
    public render() {
        return <nav className="nav flex-column">
            <a className="nav-link" href="">Podgląd</a>
            <a className="nav-link" href="">Rezerwuj</a>
            <a className="nav-link" href="">Zwolnij</a>
        </nav>;
    }
}
