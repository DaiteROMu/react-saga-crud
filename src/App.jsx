import { Grid } from '@mui/material';

import Header from './components/Header';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const App = () => {
    return (
        <>
            <Grid spacing={2} container>
                <Grid item xs={12}>
                    <Header />
                </Grid>

                <Grid item xs={12} md={4} lg={6}>
                    <UserForm />
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <UserTable />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
