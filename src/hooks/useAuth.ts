import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import type { AppDispatch } from "../store"
import type { IFormData } from "../pages/login/login"
import { loginThunk, logoutThunk } from "../features/auth/authSlice"
import { selectIsAuthenticated } from "../features/auth/authSelector"

export const useAuth = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    return {
        isAuthenticated : useSelector(selectIsAuthenticated),
        login: (credentials: IFormData) => {
             dispatch(loginThunk(credentials))
             navigate("/");
        },
        logout: () => {
            dispatch(logoutThunk())
            navigate('/login');
        }
    }
}