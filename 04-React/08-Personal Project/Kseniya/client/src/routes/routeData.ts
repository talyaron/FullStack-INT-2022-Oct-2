//components
import NotFound from "../components/NotFound/NotFound"
import Home from "../pages/Home/Home"
import Join from "../pages/Join/Join"
import SignIn from "../pages/SignIn/SignIn"

//paths
export const HOME_PATH ='/'
export const JOIN_PATH = '/join'
export const SIGNIN_PATH = 'signIn'
export const ACCOUNT_PATH = 'account'
export const NOT_FOUND_PATH = '*'

export const ROUTE_DATA = [
    {
        path: HOME_PATH,
        component: Home
    },
    {
        path: NOT_FOUND_PATH,
        component: NotFound
    },
    {
        path: SIGNIN_PATH,
        component: SignIn
    },
    {
        path: JOIN_PATH,
        component: Join
    }
]