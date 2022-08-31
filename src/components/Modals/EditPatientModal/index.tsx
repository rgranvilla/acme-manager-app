import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { EditPatientForm } from "../../Forms/EditPatientForm";

interface EditPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  onSuccess: () => void;
}

export function EditPatientModal({
  isOpen,
  onClose,
  patientId,
  onSuccess,
}: EditPatientModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <EditPatientForm
          onClose={onClose}
          patientId={patientId}
          onSuccess={onSuccess}
        />
      </ModalContent>
    </Modal>
  );
}
