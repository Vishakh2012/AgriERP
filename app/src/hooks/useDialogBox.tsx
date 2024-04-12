import React, { useState, useRef, useEffect } from "react";
import GenerateBillDialogUI from "../components/DialogBox/DialogBox";

interface GenerateBillDialogProps {
  onSubmit: (paymentMode: string) => void;
}

const GenerateBillDialog: React.FC<GenerateBillDialogProps> = ({
  onSubmit,
}: GenerateBillDialogProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([null, null, null]);

  useEffect(() => {
    if (open) {
      // Focus the first button when dialog opens
      buttonsRef.current[0]?.focus();
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePaymentSelection = (paymentMode: string) => {
    onSubmit(paymentMode);
    handleClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = buttonsRef.current.length - 1;
    let nextIndex;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = index === 0 ? lastIndex : index - 1;
      buttonsRef.current[nextIndex]?.focus();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = index === lastIndex ? 0 : index + 1;
      buttonsRef.current[nextIndex]?.focus();
    } else if (e.key === "Enter") {
      e.preventDefault();
      handlePaymentSelection(buttonsRef.current[index]?.textContent || "");
    }
  };

  return (
    <GenerateBillDialogUI
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      handleKeyDown={handleKeyDown}
      buttonsRef={buttonsRef}
    />
  );
};

export default GenerateBillDialog;
