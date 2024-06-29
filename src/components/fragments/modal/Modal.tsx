import { Modal, ModalBody, ModalContent } from '@nextui-org/react'

type Props = {
    isOpen?: any
    onClose?: any
    children?: React.ReactNode
}

const ModalDefault = ({ isOpen, onClose, children }: Props) => {
    return (
        <Modal
            size={'xl'}
            isOpen={isOpen}
            onClose={onClose}
            isDismissable={false} isKeyboardDismissDisabled={true}
        >
            <ModalContent>
                <>
                    <ModalBody>
                        {children}
                    </ModalBody>
                </>
            </ModalContent>
        </Modal>
    )
}

export default ModalDefault