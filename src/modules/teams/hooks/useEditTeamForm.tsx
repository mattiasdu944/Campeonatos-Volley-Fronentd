"use client"
import { useState } from 'react';
import { editTeam } from '@/modules/teams';



export const useEditTeamForm = (id: string) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const name = form.elements.namedItem('name') as HTMLInputElement;


        if (name.value.trim() === '') {
            // toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        const { data, error } = await editTeam(id, name.value);

        if (error) {
            name.value = "";
            // descripcion.value = "";
            
            // toast.error(error);
            setIsLoading(false);
            return;
        }

        name.value = "";
        // descripcion.value = "";

        // toast.success(data?.message || 'Marca registrada exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
};