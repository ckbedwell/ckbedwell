import React from 'react'

export const Test = () => {
  const [color, setColor] = React.useState(`red`)

  return (
    <>
      {color}
      <button
        exraprop="second-line-failure"
        onClick={() => setColor(`yellow`)}
      >
Change color
      </button>
    </>
  )
}
