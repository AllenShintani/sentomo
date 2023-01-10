import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'
import Container from '@mui/material/Container'

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
})

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          'boxShadow': 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          'padding': theme.spacing(1),
          '&:hover': {
            background: 'steelblue',
          },
          '&:active': {
            background: '',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#4fc3f7',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          'color': 'inherit',
          'minWidth': 'auto',
          'marginRight': theme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
}

export default function Engraving() {
  const now = new Date()
  console.log(now)
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="sm">
          <Stack
            sx={{ pt: 2 }}
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              sx={{
                height: 150,
                width: 450,
                borderBottom: 1,
                display: 'flex',
              }}
              color="primary"
              variant="contained"
              size="large"
            >
              出勤
            </Button>{' '}
            <Button
              sx={{
                height: 150,
                width: 450,
                borderBottom: 1,
                display: 'flex',
              }}
              variant="contained"
              color="error"
            >
              退勤
            </Button>{' '}
          </Stack>
          <Stack
            sx={{ pt: 6 }}
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              sx={{
                height: 150,
                width: 450,
                borderBottom: 1,
                display: 'flex',
              }}
              variant="contained"
              color="success"
            >
              休憩開始
            </Button>{' '}
            <Button
              sx={{
                height: 150,
                width: 450,
                borderBottom: 1,
                display: 'flex',
              }}
              color="secondary"
              variant="contained"
            >
              休憩終了
            </Button>
          </Stack>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}
