import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { CreatePatientForm } from "../../Forms/PatientForm";

interface CreatePatientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePatientModal({
  isOpen,
  onClose,
}: CreatePatientModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <CreatePatientForm onClose={onClose} />
      </ModalContent>
    </Modal>
  );
}
