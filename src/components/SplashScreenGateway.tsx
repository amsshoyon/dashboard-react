import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { environment } from '@/constants/environment'
import { SplashScreen } from '@/components/SplashScreen.component'

type SplashScreenGatewayProps = {
  children: React.ReactNode
}
const SplashScreenGateway = ({ children }: SplashScreenGatewayProps): React.ReactElement => {
  const [hideByTime, setHideByTime] = useState(!environment.disableSplash)
  const [searchParams] = useSearchParams()
  const disableSplash = searchParams.get('disableSplash')

  const time = disableSplash === '1' ? 0 : 2200
  useEffect(() => {
    setTimeout(() => {
      setHideByTime(false)
    }, time)
  }, [])

  const renderChildren = () => {
    return children
  }

  return (
    <>
      <SplashScreen open={hideByTime} projectTitle={''} />
      {renderChildren()}
    </>
  )
}
SplashScreenGateway.displayName = 'SplashScreenGateway'
export default SplashScreenGateway
