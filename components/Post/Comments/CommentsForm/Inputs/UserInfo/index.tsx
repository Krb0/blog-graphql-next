import { useSession } from 'next-auth/react'
import React, { RefObject } from 'react'

const UserInfo = ({
  UserInfoEmailRef,
  UserInfoNameRef,
}: {
  UserInfoEmailRef: RefObject<HTMLInputElement>
  UserInfoNameRef: RefObject<HTMLInputElement>
}) => {
  const { data: session } = useSession()
  return (
    <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <input
        type="text"
        ref={UserInfoNameRef}
        className="w-full rounded-lg border-2 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        placeholder="Name"
        name="name"
        value={session?.user?.name ? session.user.name : ''}
        readOnly
        required
      />
      <input
        type="email"
        ref={UserInfoEmailRef}
        className="w-full rounded-lg border-2 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        placeholder="Email"
        name="email"
        required
      />
    </div>
  )
}

export default UserInfo
