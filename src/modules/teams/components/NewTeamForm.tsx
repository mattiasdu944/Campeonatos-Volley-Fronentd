"use client"
import { Button, Input } from '@nextui-org/react'
import { useNewTeamForm } from '@/modules/teams'

export const NewTeamForm = () => {

    const { handleSubmit, isLoading } = useNewTeamForm()

    return (
        <section>
            <form onSubmit={ handleSubmit } className='space-y-4 pb-4'>

                <Input
                    name='name'
                    isRequired
                    label="Nombre"
                    placeholder='Ingresa el nombre del equipo'
                />

                <div className="flex items-center justify-end gap-4">


                    <Button
                        color='danger'
                    >
                        Cerrar
                    </Button>


                    <Button
                        isLoading={ isLoading }
                        isDisabled={ isLoading }
                        color='primary'
                        type='submit'
                    >
                        Guardar equipo
                    </Button>
                </div>

            </form>
        </section>
    )
}
