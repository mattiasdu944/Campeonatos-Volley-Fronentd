import React from 'react'
import { Team } from '@/modules/teams'
import { li } from 'framer-motion/client'
import { TeamCard } from './TeamCard';
import { NewTeamModal } from './NewTeamModal';


interface Props {
    teams: Team[]
}


export const TeamList = ({ teams }: Props) => {
    return (
        <section className='pt-8'>
            <div className="container space-y-4">
                <NewTeamModal/>

                <ul className='team__list'>
                    {
                        teams.map((team, index) => (
                            <li key={team.id}>
                                <TeamCard  position={ index } team={ team }/>
                            </li>

                        ))
                    }
                </ul>

            </div>
        </section>
    )
}
