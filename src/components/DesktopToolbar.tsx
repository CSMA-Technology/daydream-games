import {
  Box,
  Button,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Adb as AdbIcon } from '@mui/icons-material';
import { Link } from 'gatsby';

type Props = {
  pages: { name: string, href: string }[]
};

const DesktopToolbar = ({ pages }: Props) => (
  <Toolbar disableGutters>
    <AdbIcon sx={{ display: 'flex', mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        mr: 2,
        display: 'flex',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.2rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Daydream Games
    </Typography>
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <List dense disablePadding style={{ display: 'flex', flexDirection: 'row' }}>
        {pages.map(({ name, href }) => (
          <ListItem key={name} dense disablePadding>
            <Button
              disableRipple
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              to={href}
            >
              {name}
            </Button>
          </ListItem>

        ))}
      </List>
    </Box>
  </Toolbar>
);

export default DesktopToolbar;
