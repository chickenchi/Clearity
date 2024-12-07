import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonType } from "./types/common/CommonType";
import { RecoilRoot } from 'recoil';

import Intro from "./screen/Intro";
import LoginPage from "./screen/Account/LoginPage";
import RegisterPage from "./screen/Account/RegisterPage";
import Home from "./screen/Main/Home";
import Profile from "./screen/Main/Profile";
import Ranking from "./screen/Main/Ranking";
import Setting from "./screen/Main/Setting";
import { QuizPage } from './screen/Quiz/QuizPage';
import { AlertProvider } from './tools/AlertProvider';
import { AlertManager } from './tools/AlertManager';

const Stack = createNativeStackNavigator<CommonType.RootStackPageList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <AlertProvider>
          <AlertManager />
          <Stack.Navigator initialRouteName="profile" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="intro" component={Intro} />
              <Stack.Screen name="login" component={LoginPage} />
              <Stack.Screen name="register" component={RegisterPage} />
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="profile" component={Profile} />
              <Stack.Screen name="ranking" component={Ranking} />
              <Stack.Screen name="setting" component={Setting} />
              <Stack.Screen name="quiz" component={QuizPage} />
          </Stack.Navigator>
        </AlertProvider>
        </RecoilRoot>
    </NavigationContainer>
  )
}

export default App;
