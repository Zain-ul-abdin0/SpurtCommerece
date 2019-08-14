import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';

const AppStack=createSwitchNavigator({
    Login:Login,
    SignUp:SignUp
})

export default createAppContainer(AppStack);