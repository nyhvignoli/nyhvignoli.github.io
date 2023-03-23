import React from 'react'
import { List } from '../../../List'

export const CardContent = ({ list }) => {
  return (
    <div data-testid="base-card-content">
      {!!list.length && (
        <List>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </List>
      )}
    </div>
  )
}
