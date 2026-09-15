import { Button, Card, TextField, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    
    
    width: 500,
    pt: 2,
    px: 4,
    pb: 3,
};
const SignUpPage = () => {
    return (
            <Card sx={{ ...style}}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Sign Up
                </Typography>
                <Card style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                    <TextField id="standard-username" label="Username" variant="standard" />
                    <TextField id="standard-email" label="Email" variant="standard" />
                    <TextField
                        id="standard-password"
                        label="Password"
                        type="password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-conf-password"
                        label="Confirm Password"
                        type="password"
                        variant="standard"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Sign Up
                    </Button>
                </Card>
            </Card>
    )
}

export default SignUpPage
