import Button from 'components/common/Button'
import React from 'react'
import styled from 'styled-components'
import ChatItem from 'components/study/ChatItem'

export default function WaitingPage({
  chatList,
  message,
  onChangeMsg,
  sendChat,
  user,
}) {
  return (
    <Container>
      <Header>채팅방</Header>
      <ChatContainer>
        {chatList.map((chatItem) => (
          <ChatItem
            nickname={chatItem.nickname}
            profileImage={chatItem.profileImage}
            message={chatItem.message}
            isMine={chatItem.nickname === user.nickname ? true : false}
          />
        ))}
      </ChatContainer>
      <StyledDiv>
        <StyledInput
          value={message}
          onChange={onChangeMsg}
          placeholder="메시지를 입력하세요"
        />
        <Button type="primary" value="전송" onClick={sendChat} />
      </StyledDiv>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30rem;
  height: 100%;

  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.chatBgColor};
`
const Header = styled.div`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  background-color: ${({ theme }) => theme.chatTabColor};
`

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  width: 100%;
  padding: 1rem;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;

  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.chatTabColor};
`
const StyledInput = styled.textarea`
  flex: 1;

  height: 7rem;
  padding: 1rem;

  color: ${({ theme }) => theme.blackFontColor};
  background-color: ${({ theme }) => theme.whiteColor};
`
