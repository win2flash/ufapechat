import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Box, Flex, Button, Heading, Text } from 'rebass/styled-components'
import {
  Label,
  Input,
  Textarea,
} from '@rebass/forms'
import { usePopup } from '../../../contexts/popup-context'
import { gql, useMutation } from '@apollo/client';
import ReactInputMask from 'react-input-mask'

const Wrapper = styled(Box)`
  position: fixed;
  visibility: hidden;
  opacity: 0;
  ${props => !props.isHide && css`
    opacity: 1;
    visibility: visible;
  `}
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(4px);
  z-index: 999;
  transition: all .3s ease;
`
const PopupBlock = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  background: #fff;
  z-index: 1000;
  transition: all .3s ease;
  border-radius: 5px;
  ${props => !props.isHide && css`
    transform: translate(-50%, -50%);
  `}
  & label {
    font-family: Roboto, sans-serif;
    margin-bottom: 5px;
  }
  & input, & textarea {
    border: 1px solid #25274d;
  }
`
const CloseButton = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
`

const SENDMAIL_MUTATION = gql`
  mutation CreateSendMailMutation($form_name: String!, $form_phone: String!, $form_variant: String!, $form_message: String!) {
    sendFormEmail(input: {form_name: $form_name, form_phone: $form_phone, form_variant: $form_variant, form_message: $form_message}){
      success
      data
    }
  }
`

const Popup = ({ ...props }) => {

  const { isHide, hidePopup, variant } = usePopup()
  const [nameValue, setNameValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [messageValue, setMessageValue] = useState('')

  const [sendMail, { data, loading, error, reset }] = useMutation(SENDMAIL_MUTATION);

  const headings = {
    callBack: 'Обратный звонок',
    leaveRequest: 'Оставить заявку'
  }

  const recieved_form_data = data ? data.sendFormEmail : null

  const resetMutation = useCallback(reset, [reset])

  const resetInputs = useCallback(() => {
    setNameValue('')
    setPhoneValue('')
    setMessageValue('')
  }, [])

  const sendForm = (event) => {
    event.preventDefault()
    sendMail({
      variables: {
        form_name: nameValue,
        form_phone: phoneValue,
        form_message: messageValue,
        form_variant: headings[variant]
      }
    })
  }

  useEffect(() => {
    if (recieved_form_data) {
      if (recieved_form_data.success) {
        // form clear handling
        resetInputs()
        const closePopupTimer = setTimeout(() => {
          resetMutation()
          hidePopup()
        }, 2000);

        return () => {
          clearTimeout(closePopupTimer)
        }
      }
    }
  }, [recieved_form_data, resetInputs, hidePopup, resetMutation])

  return (
    <Wrapper isHide={isHide} onMouseDown={() => { resetMutation(); hidePopup(); }}>
      <PopupBlock isHide={isHide} onMouseDown={e => e.stopPropagation()}>
        <CloseButton backgroundColor={'#fff'} variant={'closePopup'} onClick={() => { resetMutation(); hidePopup(); }}>X</CloseButton>
        <Box display='flex' flexDirection='column' justifyContent='center' width='100%' px={[4, 4, 5]} py={[3, 3, 4]} minWidth='300px'>
          <Heading as='span' fontSize={[3, 3, 4]} mb={[2, 3, 3]} color='background'>{headings[variant]}</Heading>

          <Box as='form' onSubmit={sendForm}>
            <Label htmlFor='name'>Имя<Text ml={'5px'} variant="error_message">*</Text></Label>
            <Input
              mb={[2, 2, 3]}
              id='popup_name'
              name='name'
              placeholder='Иван'
              required
              value={nameValue}
              onChange={event => {
                setNameValue(event.target.value)
              }}

            />

            <Label htmlFor='phone'>Телефон <Text ml={'5px'} variant="error_message"> *</Text> </Label>
            <ReactInputMask
              mb={[2, 2, 3]}
              id='popup_phone'
              name='phone'
              value={phoneValue}
              mask="+7\(999) 999-99-99"
              maskChar=" "
              required
              onChange={event => {
                setPhoneValue(event.target.value)
              }}
            >
              {(inputProps) => <Input
                {...inputProps}
              />}
            </ReactInputMask>
            <Label htmlFor='message'>Дополнительная информация</Label>
            <Textarea
              mb={[2, 2, 3]}
              sx={{ resize: 'none' }}
              rows='4'
              id='popup_additional'
              name='message'
              value={messageValue}
              onChange={event => {
                setMessageValue(event.target.value)
              }}
            />
            <Input
              id="popup_variant"
              name="variant"
              value={variant}
              type="hidden"
            />
            <Button type="submit"> Отправить </Button>
          </Box>
          <Box mt={[2, 2, 3]}>
            {loading && <Text>Loading...</Text>}
            {error && (
              <Text>{error.message}</Text>
            )}
            {recieved_form_data
              && (recieved_form_data.success
                ? <Text variant='success_message'>Сообщение отправлено</Text>
                : <Text variant='error_message'>Ошибка отправки</Text>
              )
            }

          </Box>
        </Box>

      </PopupBlock>
    </Wrapper>

  )
}

export default Popup