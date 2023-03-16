import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";


const authRoutes = [
    {path: '/auth/signin', component: Signin},
    {path: '/auth/signup', component: Signup},
    {path: '/auth/forgot-password', component: ForgotPassword},
];


export {authRoutes};