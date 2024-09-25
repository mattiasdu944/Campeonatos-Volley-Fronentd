import { getAllTemas, TeamList } from "@/modules/teams";
import { HeaderPage } from '@/modules/ui';

export default async function TeamsPage() {
    
    const teams = await getAllTemas()

    return (
        <>
            <HeaderPage
                title="Equipos"
                description="Registra nuevos equipos o gestiona equipos ya registrados"
            />
            <TeamList
                teams={ teams! }
            />
        </>
    );
}