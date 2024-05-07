import React from 'react'

type Props = {}

function DidYouKnow({}: Props) {
  return (
      <div className="flex flex-row gap-4">
          <div className="bg-gray-100 hover:bg-gray-200 min-w-[300px] p-4 rounded-lg cursor-pointer">
              <h3>Did You Know</h3>
              <p>You can get 10% of on all GST Bill Transaction</p>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 min-w-[300px] p-4 rounded-lg cursor-pointer">
              <h3>Did You Know</h3>
              <p>You can get 10% of on all GST Bill Transaction</p>
          </div>
      </div>
  )
}

export default DidYouKnow