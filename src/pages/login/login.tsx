import { Button, Card, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/useAuth';



export interface IFormData {
    username: string;
    password: string;
}
const Login = () => {

    const dispatch = useDispatch()

    const {
        register,
        control,
        formState, handleSubmit
    } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const { errors, isValid } = formState;
    const auth = useAuth();
    const onsubmit = (data: IFormData) => {
        console.log("data === " + data);
        auth.login(data);
    }

    return (
        <Card className='position: absolute left-4/12 top-5/12  w-4/12 p-5'>
            <Typography variant="h6" component="h2" gutterBottom>
                Login
            </Typography>
            <form style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem', marginBottom: '1rem'
                }}
                onSubmit={handleSubmit(onsubmit)}
                noValidate
            >
                <TextField id="username" label="UserName" variant="standard"
                    {...register('username', {
                        required: "Username is required"
                    })} />
                <p className='text-red-400'>{errors.username?.message}</p>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="standard"
                    {...register('password', {
                        required: "Password is required"
                    })}
                />
                <p className='text-red-400'>{errors.password?.message}</p>
                <Button
                    disabled={!isValid}
                    type="submit" variant="contained" color="primary" className='p-5' >
                    Login
                </Button>
            </form>
            {/* <DevTool control={control} /> */}
        </Card>
    )
}

export default Login
