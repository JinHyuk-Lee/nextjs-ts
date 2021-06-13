import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import 'tailwindcss/tailwind.css'
import '@common/css/index.scss'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <title>Next</title>
    <Component {...pageProps} />
  </>
)

export default storeWrapper.withRedux(CustomApp)
