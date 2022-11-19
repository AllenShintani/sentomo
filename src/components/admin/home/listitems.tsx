import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined'
import PeopleIcon from '@mui/icons-material/People'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'
import TimerIcon from '@mui/icons-material/Timer'
import PublicIcon from '@mui/icons-material/Public'
import type { DrawerProps } from '@mui/material/Drawer'
import Drawer from '@mui/material/Drawer'
import DnsRoundedIcon from '@mui/icons-material/DnsOutlined'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import SettingsIcon from '@mui/icons-material/Settings'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import List from '@mui/material/List'
import Link from 'next/link'

const item = {
  'py': '12px',
  'px': 2.5,
  'color': 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
}

export default function Navigator(props: DrawerProps) {
  const { ...other } = props
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

  return (
    <Drawer
      variant="permanent"
      {...other}
    >
      <List disablePadding>
        <Box
          key={'Build'}
          sx={{ bgcolor: '#101F33' }}
        >
          <ListItem
            disablePadding
            key={'Authentication'}
            sx={{ color: 'primary.main' }}
          >
            <Link href="/">
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                sx={item}
              >
                <ListItemIcon>{<PeopleIcon />}</ListItemIcon>
                <ListItemText>{'ホーム'}</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem
            disablePadding
            key={'Database'}
          >
            <Link href="/rooting/signup">
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                sx={item}
              >
                <ListItemIcon>{<DnsRoundedIcon />}</ListItemIcon>

                <ListItemText>{'サインイン'}</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem
            disablePadding
            key={'Storage'}
          >
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
              sx={item}
            >
              <ListItemIcon>{<PermMediaOutlinedIcon />}</ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            key={'Hosting'}
          >
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
              sx={item}
            >
              <ListItemIcon>{<PublicIcon />}</ListItemIcon>
              <ListItemText>{'Hosting'}</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            key={'Functions'}
          >
            <Link href="/rooting/test">
              <ListItemButton
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
                sx={item}
              >
                <ListItemIcon>{<SettingsEthernetIcon />}</ListItemIcon>
                <ListItemText>{'テスト'}</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem
            disablePadding
            key={'Machine learning'}
          >
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
              sx={item}
            >
              <ListItemIcon>{<SettingsInputComponentIcon />}</ListItemIcon>
              <ListItemText>{'Machine learning'}</ListItemText>
            </ListItemButton>
          </ListItem>

          <Divider sx={{ mt: 2 }} />

          <ListItem
            disablePadding
            key={'Analytics'}
          >
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
              sx={item}
            >
              <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
              <ListItemText>{'設定'}</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            key={'Performance'}
          >
            <Link href="/rooting/workTime">
              <ListItemButton
                selected={selectedIndex === 8}
                onClick={(event) => handleListItemClick(event, 8)}
                sx={item}
              >
                <ListItemIcon>{<TimerIcon />}</ListItemIcon>
                <ListItemText>{'勤怠時間'}</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </Box>
      </List>
    </Drawer>
  )
}
