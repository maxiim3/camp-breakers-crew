import type { SocialMedia } from "~/types";

export const useSocialMediaLinks = () => {
  const youtube: SocialMedia = { label: 'Youtube', url: '#', logo: '#'}
  const instagram: SocialMedia = { label: 'Instagram', url: '#', logo: '#'}
  const facebook: SocialMedia = { label: 'Facebook', url: '#', logo: '#'}
  const socialMedias :SocialMedia[] = [youtube, instagram, facebook]

  return {
    youtube, instagram, facebook, socialMedias
  }
}
