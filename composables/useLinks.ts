import { pick } from "valibot";

export interface Link {
  name: string;
  url: string;
  component: string;
}

export function useLinks() {
  const html = String
  const links: Record<string, Link> = {
    Email: {
      name: "Email",
      url: "mailto:campsbreakerz@gmail.com",
      component: "IconEmail"
    },

    YouTube: {
      name: "YouTube",
      url: "https://www.youtube.com/@gazabboy",
      component:"IconYoutube"
    },

    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/campsbreakerz/?hl=en",
      component: "IconInstagram"
    },

    Facebook: {
      name: "Facebook",
      url: "https://www.facebook.com/CampsBreakerz/",
      component:"IconFacebook"
    },

    Linktree: {
      name: "Linktree",
      url: "https://linktr.ee/cbcrewgf",
      component: "IconLink"
    },

    Shop: {
      name: "Shop",
      url: "https://www.etsy.com/shop/campsbreakerzshop/?etsrc=sdt#reviews",
      component: "IconShoppingBag"
    }
  } as const

  return links
}
