"use client"

import { Team, useEditTeamForm } from '@/modules/teams';

import { Edit01Icon } from 'hugeicons-react';
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Input } from '@nextui-org/react';


interface Props {
    team: Team;
}

export const EditTeamModal = ({ team }: Props) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const { handleSubmit, isLoading } = useEditTeamForm(team.id);


    return (
        <>
            <Button onPress={onOpen} fullWidth variant='light' color='primary' startContent={<Edit01Icon size={18} />}>
                Editar
            </Button>

            <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>

                    <ModalHeader>
                        Editar equipo
                    </ModalHeader>

                    <ModalBody>
                        <form  className='space-y-2' onSubmit={ handleSubmit }>

                            <Input
                                name='name'
                                isRequired
                                label="Nombre"
                                defaultValue={team.name}
                                placeholder='Ingresa el nombre del equipo'
                            />

                            <div className="flex items-center justify-end pb-2 gap-2">


                                <Button
                                    color='danger'
                                >
                                    Cerrar
                                </Button>


                                <Button
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                    color='primary'
                                    type='submit'
                                >
                                    Guardar equipo
                                </Button>
                            </div>
                        </form>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
