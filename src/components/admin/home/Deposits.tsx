import * as React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Title from './Title'

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Deposits() {
  //時間を取得
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const week = now.getDay()
  const dayname = ['日', '月', '火', '水', '木', '金', '土']
  return (
    <React.Fragment>
      <Title>純利益</Title>
      <Typography
        component="p"
        variant="h4"
      >
        $3,024.00
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ flex: 1 }}
      >
        {/*先月との比較と今月の利益を表示*/}
        {`${year}年${month}月${day}日` + `[${dayname[week]}]`}
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          onClick={preventDefault}
        >
          {/*詳細を見るで過去のにもとべる*/}
          詳細を見る
        </Link>
      </div>
    </React.Fragment>
  )
}
