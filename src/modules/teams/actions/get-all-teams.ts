"use server"

import { GetTeamsResponse } from "../interfaces/get-teams-response.interface";




export const getAllTemas = async () => {

    try {

        const data: GetTeamsResponse = await fetch("http://localhost:8000/api/teams")
            .then(res => res.json());  
        
        return data.teams;


    } catch (error) {
        
    }

    
}