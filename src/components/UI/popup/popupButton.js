import React from 'react';
import { Button } from "rebass/styled-components";
import { usePopup } from '../../../contexts/popup-context';

const PopupButton = ({ children, variant }) => {

  const { showPopup, setVariant } = usePopup()

  const popupHandler = () => {
    setVariant(variant)
    showPopup()
  }

  return (
    <Button onClick={popupHandler}>
      {children}
    </Button>
  );
};

export default PopupButton;
