import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsFileEarmarkPersonFill } from 'react-icons/bs'
import  Link  from 'next/link'

export default function SocialMedia() {

    const SocialIcons = [
        {
            id: 1,
            icon: <BsFacebook />,
            text: 'Facebook',
            link: 'https://web.facebook.com/john.ruzell.ri/'
        },
        {
            id: 2,
            icon: <BsGithub />,
            text: 'Github',
            link: 'https://github.com/Ruzell11'
        },
        {
            id: 3,
            icon: <BsLinkedin />,
            text: 'Linkedin',
            link: 'https://www.linkedin.com/in/john-ruzell-rivera-1026b0247/'
        },
        {
            id: 4,
            icon: <BsFileEarmarkPersonFill />,
            text: 'Resume',
            link: 'https://docs.google.com/uc?export=download&id=1dy3Km2HyW4cAGtfheQmn4cGeJBPGVNf2'
        }
    ]
    return (
        <div className='flex items-center justify-center space-x-8  text-2xl md:text-3xl'>
            {SocialIcons.map(({ id, icon , link }) => {
                return (
                    <div key={id}>
                        <div className='bg-white text-black py-2 px-2 rounded-full cursor-pointer hover:bg-white/80' key={id}>
                            <div>
                            <Link href={link} passHref><a target='_blank' rel='noopener'>{icon}</a></Link>     
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
