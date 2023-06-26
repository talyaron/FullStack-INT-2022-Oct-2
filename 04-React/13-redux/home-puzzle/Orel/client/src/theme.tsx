import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
        main: '#4E755E', 
    },
    secondary: {
        main: '#82C49E', 
    },
  },
});

export default theme;
