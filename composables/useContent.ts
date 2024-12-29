import type { PageSection } from "~/types";

export const useContent = () => {
  const homeSection: PageSection = { label: 'Home', id: 'top' }
  const danceTherapySection: PageSection ={ label: 'Dance therapy for Gaza children', id: 'dance-therapy-for-children' }
  const ourTeamSection: PageSection = { label: 'Other Team', id: 'our-team' }
  const contactSection: PageSection = { label: 'Contact', id: 'contact' }

  return {
    homeSection, danceTherapySection, ourTeamSection,contactSection
  }

}
