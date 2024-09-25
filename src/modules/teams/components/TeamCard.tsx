import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

import { MoreHorizontalIcon } from 'hugeicons-react';
import { DeleteTeamModal, EditTeamModal, Team } from '@/modules/teams';




interface Props {
    team: Team;
    position: number;
}


export const TeamCard = ({ team, position }: Props) => {
    return (
        <div className='team__card'>

            <div>
                <p># {position + 1}</p>
                <h3 className='text-xl'>{team.name}</h3>
                <p>
                    <span className='font-semibold'>Miembros:</span> 4
                </p>
                <p>
                    <span className='font-semibold'>Puntos totales:</span> {team.totalPoints}
                </p>
                <div className='flex justify-between w-full mt-2'> 
                    <EditTeamModal team={team}/>
                    <DeleteTeamModal teamId={ team.id }/>
                </div>
            </div>

        </div>
    )
}
