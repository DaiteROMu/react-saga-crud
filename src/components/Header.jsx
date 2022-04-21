import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" color="inherit" component="h1">
                React Saga CRUD
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
