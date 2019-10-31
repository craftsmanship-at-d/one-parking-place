import { createStyles, IconButton } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React from 'react'
import { Trans } from 'react-i18next'

export function NavbarDialog(): JSX.Element {

    const dialogStyles = makeStyles({
        drawer: {
            width: 300,
        },
        list: {
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    })

    const buttonStyles = makeStyles(() =>
        createStyles({
            button: {
                'marginTop': '20px',
                'width': '80%',
                'backgroundColor': '#86BC25',
                '&:hover': {
                    backgroundColor: '#75787B',
                },
            },
        }),
    )

    const dialogCss = dialogStyles()
    const buttonCss = buttonStyles()

    const [state, setState] = React.useState({
        open: false,
    })

    const toggle = (isOpen: boolean): () => void => {
        return (): void => {
            setState({ open: isOpen })
        }
    }

    return (
        <div>
            <IconButton
                onClick={toggle(true)}
            >
                <MoreVertIcon/>
            </IconButton>
            <Drawer open={state.open} onClose={toggle(false)}>
                <div
                    className={dialogCss.drawer}
                    role="presentation"
                    onClick={toggle(false)}
                >
                    <List className={dialogCss.list}>
                        <Button variant="contained" className={buttonCss.button}>
                            <Trans i18nKey="navbar.preview"/>
                        </Button>
                        <Button variant="contained" className={buttonCss.button}>
                            <Trans i18nKey="navbar.reserve"/>
                        </Button>
                        <Button variant="contained" className={buttonCss.button}>
                            <Trans i18nKey="navbar.leave"/>
                        </Button>
                        <Button variant="contained" className={buttonCss.button}>
                            <Trans i18nKey="navbar.details"/>
                        </Button>
                    </List>
                    <Divider/>
                </div>
            </Drawer>
        </div>
    )
}
