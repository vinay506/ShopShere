import { Button, Card, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"

interface IFormData {
    email: string;
    password:string;
}
const Login = () => {

    const {
        register,
        control,
        formState, getFieldState, handleSubmit
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const {errors} = formState;

    const onsubmit = (data: IFormData) => {
        console.log("data === " + data);
    }

    const emailState = getFieldState('email', formState);
    const pswState = getFieldState('password', formState)
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
                <TextField id="email" label="Email" variant="standard"
                    {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Enter a valid email address"
                        }
                    })} />
                <p className='text-red-400'>{errors.email?.message}</p>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="standard"
                    {...register('password', {
                        required:"Password is required"
                    })}
                />
                <p className='text-red-400'>{errors.password?.message}</p>
                <Button type="submit" variant="contained" color="primary" className='p-5' >
                    Login
                </Button>
            </form>
            <DevTool control={control} />
        </Card>
    )
}

export default Login
