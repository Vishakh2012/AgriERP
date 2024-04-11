// GenerateBillDialogComponent.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface GenerateBillDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (paymentMode: string) => void;
}

const GenerateBillDialogComponent: React.FC<GenerateBillDialogProps> = ({ open, onClose, onSubmit }) => {
  const [selectedPayment, setSelectedPayment] = useState("Cash");
  const buttonsRef = useRef<HTMLButtonElement[]>([null, null, null]);

  useEffect(() => {
    if (open) {
      // Focus the first button when dialog opens
      buttonsRef.current[0]?.focus();
    }
  }, [open]);

  const handlePaymentSelection = (paymentMode: string) => {
    setSelectedPayment(paymentMode);
    onSubmit(paymentMode);
    onClose();
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
    <Dialog open={open} onClose={onClose}>
      <DialogTrigger>
        <Button onClick={onClose}>Generate Bill</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mode of Payment</DialogTitle>
          <DialogDescription>Select a payment method:</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex justify-center">
            <div className="space-x-4">
              <Button
                ref={(el) => (buttonsRef.current[0] = el!)}
                onClick={() => handlePaymentSelection("Cash")}
                onKeyDown={(e) => handleKeyDown(e, 0)}
                tabIndex={0}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Cash
              </Button>
              <Button
                ref={(el) => (buttonsRef.current[1] = el!)}
                onClick={() => handlePaymentSelection("Card")}
                onKeyDown={(e) => handleKeyDown(e, 1)}
                tabIndex={0}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Card
              </Button>
              <Button
                ref={(el) => (buttonsRef.current[2] = el!)}
                onClick={() => handlePaymentSelection("UPI")}
                onKeyDown={(e) => handleKeyDown(e, 2)}
                tabIndex={0}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                UPI
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateBillDialogComponent;
