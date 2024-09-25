"use client"
import { useState } from 'react';
import { createTeam } from '../actions/create-team';
// import { toast } from 'sonner';
// import { createNewBrand } from '../actions/create-new-brand';

export const useNewTeamForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const nombre = form.elements.namedItem('name') as HTMLInputElement;

        console.log(nombre)

        if (nombre.value.trim() === '') {
            // toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        const { data, error } = await createTeam(nombre.value);

        if (error) {
            nombre.value = "";
            // descripcion.value = "";
            
            // toast.error(error);
            setIsLoading(false);
            return;
        }

        nombre.value = "";
        // descripcion.value = "";

        // toast.success(data?.message || 'Marca registrada exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
};