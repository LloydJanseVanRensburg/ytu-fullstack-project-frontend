import {
    AppBar,
    List,
    ListItemButton,
    Toolbar,
    Typography,
} from '@mui/material';
import Link from 'next/link';

const MENU_ITEM = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'About',
        link: '/about',
    },
];

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6">POST.NET</Typography>

                <List sx={{ display: 'flex' }}>
                    {MENU_ITEM.map((item) => (
                        <Link
                            style={{
                                textDecoration: 'none',
                            }}
                            href={item.link}
                            key={item.title}
                        >
                            <ListItemButton>
                                <Typography sx={{ color: '#fff' }}>
                                    {item.title}
                                </Typography>
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
