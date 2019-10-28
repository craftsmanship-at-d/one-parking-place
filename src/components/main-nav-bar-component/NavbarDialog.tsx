import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { NavbarContent } from '../nav-bar-component/NavbarContent';

export function NavbarDialog() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                onClick={onClick}>
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="long-menu"
                keepMounted
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                PaperProps={{
                    style: {
                        height: '80%',
                        width: 200,
                    },
                }}
            >
                <NavbarContent/>
            </Menu>
        </div>
    );
}
