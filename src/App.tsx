import { LogoHeader } from '@/components/LogoHeader/LogoHeader.tsx';
import { WelcomeScreen } from '@/screens/WelcomeScreen/WelcomeScreen.tsx';
import { AboutMeScreen } from '@/screens/AboutMeScreen/AboutMeScreen.tsx';
import { SkillsScreen } from '@/screens/SkillsScreen/SkillsScreen.tsx';
import { ProjectsScreen } from '@/screens/ProjectsScreen/ProjectsScreen.tsx';
import { ContactsScreen } from '@/screens/ContactsScreen/ContactsScreen.tsx';

function App() {
  return (
    <>
      <LogoHeader />
      <WelcomeScreen />
      <AboutMeScreen />
      <SkillsScreen />
      <ProjectsScreen />
      <ContactsScreen />
    </>
  );
}

export default App;
