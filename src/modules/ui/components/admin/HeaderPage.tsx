import React from 'react'

interface Props {
    title: string;
    description: string;
}

export const HeaderPage = ({ description, title }: Props) => {
    return (
        <section

            className='py-8 text-white bg-black'
        >
            <div className="container">
                <h1 className='text-2xl'>{ title }</h1>
                <p className='text-sm'>{ description }</p>
            </div>
        </section>
    )
}
