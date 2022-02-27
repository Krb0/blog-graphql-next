import React, { RefObject } from 'react'
import TextArea from './TextArea'
import UserInfo from './UserInfo'

const Inputs = ({
  UserInfoNameRef,
  UserInfoEmailRef,
  TextAreaRef,
}: {
  TextAreaRef: RefObject<HTMLTextAreaElement>
  UserInfoEmailRef: RefObject<HTMLInputElement>
  UserInfoNameRef: RefObject<HTMLInputElement>
}) => {
  return (
    <>
      <TextArea TextAreaRef={TextAreaRef} />
      <UserInfo
        UserInfoEmailRef={UserInfoEmailRef}
        UserInfoNameRef={UserInfoNameRef}
      />
    </>
  )
}

export default Inputs
