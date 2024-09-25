"use server"

import campDb from "@/db/campDb"
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";


export const editTeam = async (id:string, name: string) => {
    
    try {
        
        const { data } = await campDb.put(`/teams/${ id }`, { name });

        revalidatePath("/admin/teams")

        return {
            data,
            error: null
        }

    } catch (error) {
        console.log(error);

        if( isAxiosError(error) ){
            return {
                data: null,
                error: error.response?.data.message
            }
        }

        throw error;
    }
}