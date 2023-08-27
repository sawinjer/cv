import { LogoHeader } from '@/components/LogoHeader/LogoHeader.tsx';
import { WelcomeScreen } from '@/screens/WelcomeScreen/WelcomeScreen.tsx';
import { AboutMeScreen } from '@/screens/AboutMeScreen/AboutMeScreen.tsx';

function App() {
  return (
    <>
      <LogoHeader />
      <WelcomeScreen />
      <AboutMeScreen />
    </>
  );
}

export default App;
