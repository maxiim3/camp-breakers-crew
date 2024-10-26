export interface PageSection {
    label: string
    id: string
}

export type TPage = {
  pageTitle: string
  pageSubTitle ?: string
  pageUrl: string
}

export type availableLogos = 'facebook' | 'youtube' | 'instagram' | 'gmail' | '#'

export interface SocialMedia {
    label: string
    url: string
    logo: availableLogos
}

export interface TeamMember {
    name: string
    socialMedias: SocialMedia[]
    role: string
    image: string
}

export type ListItem = {
  id: string,
  label: string
}
