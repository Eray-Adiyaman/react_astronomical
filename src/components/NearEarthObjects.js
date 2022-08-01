import React from 'react'
import { useAstronomicalContext } from '../hooks/useAstronomicalContext'

export default function NearEarthObjects() {

    const {neo} = useAstronomicalContext()

    console.log(neo)

  return (
    <div>NearEarthObjects</div>
  )
}
