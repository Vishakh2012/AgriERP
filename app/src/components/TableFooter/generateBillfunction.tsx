// GenerateBillDialogFunction.tsx
import React, { useState } from 'react';

interface GenerateBillDialogFunctionProps {
  onSubmit: (paymentMode: string) => void;
}

const GenerateBillDialogFunction: React.FC<GenerateBillDialogFunctionProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { open, setOpen, handleOpen, handleClose };
};

export default GenerateBillDialogFunction;
