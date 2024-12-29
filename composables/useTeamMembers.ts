import type { TeamMember } from "~/types";

export const useTeamMembers = () => {
 const teamMembers: TeamMember[] = [
    {
        name: 'John Doe',
        socialMedias: [
            {
                label: 'youtube',
                url: '#',
                logo: '#'
            }
        ],
        role: 'Founder',
        image: '#'
    },
    {
        name: 'John Doe',
        socialMedias: [
            {
                label: 'youtube',
                url: '#',
                logo: '#'
            }
        ],
        role: 'Founder',
        image: '#'
    },
    {
        name: 'John Doe',
        socialMedias: [
            {
                label: 'youtube',
                url: '#',
                logo: '#'
            }
        ],
        role: 'Founder',
        image: '#'
    }
]
    return ref(teamMembers)
}
