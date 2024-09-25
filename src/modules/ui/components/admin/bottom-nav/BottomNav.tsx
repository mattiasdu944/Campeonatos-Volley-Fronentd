import React from 'react'
import Link from 'next/link'

import { TableIcon, UserGroupIcon, VolleyballIcon } from 'hugeicons-react'

export const BottomNav = () => {
    return (
        <nav className='absolute bottom-0 shadow-2xl w-full bg-white py-4 rounded-tr-2xl rounded-tl-2xl'>
            <ul className='container flex justify-between gap-8 items-center'>
                <li>
                    <Link className='flex items-center flex-col' href={'/admin/teams'}>
                        <span>
                            <UserGroupIcon/>
                        </span>
                        <span className='text-sm'>Equipos</span>
                    </Link>
                </li>

                <li>
                    <Link className='flex items-center flex-col' href={'/admin/teams'}>
                        <span>
                            <VolleyballIcon/>
                        </span>
                        <span className='text-sm'>Partidos</span>
                    </Link>
                </li>


                <li>
                    <Link className='flex items-center flex-col' href={'/admin/teams'}>
                        <span>
                            <UserGroupIcon/>
                        </span>
                        <span className='text-sm'>Jugadores</span>
                    </Link>
                </li>


                <li>
                    <Link className='flex items-center flex-col' href={'/admin/teams'}>
                        <span>
                            <TableIcon/>
                        </span>
                        <span className='text-sm'>Estadisticas</span>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
