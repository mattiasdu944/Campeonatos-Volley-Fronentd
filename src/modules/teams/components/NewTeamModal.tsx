"use client"
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { NewTeamForm } from './NewTeamForm';

export const NewTeamModal = () => {
    
    const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure(); 

    return (
        <>
            <Button onPress={ onOpen } color='primary'>
                Nuevo equipo
            </Button>

            <Modal placement='center' isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>

                    <ModalHeader>
                        Agregar nuevo equipo
                    </ModalHeader>

                    <ModalBody>
                        <NewTeamForm
                            
                        />                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
