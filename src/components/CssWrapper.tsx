import { useTheme } from '@mui/material/styles';
import { GlobalStyles, Typography, CssBaseline } from '@mui/material';

type Props = {
  children: React.ReactNode
};

const tagsToStyle = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const CssWrapper = ({ children }: Props) => {
  const theme = useTheme();
  // eslint-disable-next-line max-len
  const tagStyles = tagsToStyle.reduce((acc, tag) => ({ ...acc, [tag]: theme.typography[tag as keyof typeof Typography] }), {});
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={tagStyles} />
      {children}
    </>
  );
};

export default CssWrapper;
