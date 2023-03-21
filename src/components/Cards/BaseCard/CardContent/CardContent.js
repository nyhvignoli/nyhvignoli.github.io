import React from 'react'
import { UnorderedList } from './styles'

export const CardContent = ({ list }) => {
  return (
    <div>
      {!!list.length && (
        <UnorderedList>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </UnorderedList>
      )}
    </div>
  )
}
