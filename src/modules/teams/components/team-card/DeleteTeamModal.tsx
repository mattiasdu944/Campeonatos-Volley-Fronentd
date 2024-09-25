"use client"
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import { Delete01Icon } from 'hugeicons-react';
import { useState } from 'react';
import { deleteTeam } from '../../actions/delete-team';

interface Props {
    teamId: string;
}

export const DeleteTeamModal = ({ teamId }: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure(); 

    const handleDelete = async () => {

        setIsLoading(true)

        await deleteTeam(teamId);
        
        onClose();
        setIsLoading(false);
    }

    return (
        <>

            <Button onPress={ onOpen } fullWidth variant='light' color='danger' startContent={<Delete01Icon size={18} />}>
                Eliminar
            </Button>

            <Modal style={{ zIndex:100 }} placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader>
                        Eliminar equipo
                    </ModalHeader>

                    <ModalBody>
                        <p>¿Esta seguro que desea eliminar el equipo? </p>

                        <div className='flex justify-end gap-4 pb-2'>
                            <Button>
                                Cancelar
                            </Button>
                            <Button 
                                isLoading={ isLoading }
                                isDisabled={ isLoading }
                                onPress={handleDelete} 
                            >
                                Eliminar
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
