import {
  AppBar,
  Container,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileToolbar from './MobileToolbar';
import DesktopToolbar from './DesktopToolbar';

const pages = [
  { name: 'About', href: '/about' },
  { name: 'Games', href: '/games' },
  { name: 'Tutorials', href: '/tutorials' },
];

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        { isSmallScreen ? <MobileToolbar pages={pages} /> : <DesktopToolbar pages={pages} />}
      </Container>
    </AppBar>
  );
};

export default Header;
