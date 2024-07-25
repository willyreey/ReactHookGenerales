import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('Me estoy dibuando mi loco');
  return (
    <small>{ value }</small>
  )
})
