import { ar } from "./lang/ar";
import { de } from "./lang/de";
import { nl } from "./lang/nl";
import { fi } from "./lang/fi";
import { fr } from "./lang/fr";
import { zh } from "./lang/zh";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      categories: "Categories",
      regions: "Regions",
      contact: "Contact",
      aboutus: "About",
      sports_news: "Sports news",
      political: "Political",
      cancel: "Cancel",
      save: "Save",
      footer: {
        newsletter: "Newsletter",
        social: "Social medias",
      },
      about: {
        header: "About us",
        stats: "Stats",
        testimontals: "Testimontals",
        team: "Our team",
        news: "News every 24 hours",
        users: "Users daily",
      },
      team: {
        leadership: "Meet our leadership",
        manager: "Manager",
        ceo: "CEO",
        developer: "Developer",
        designer: "Designer",
        marketing: "Marketing",
      },
      contact_page: {
        form: {
          heading: "Feel free to contacts us!",
          subheading: "Fill the form and get in touch",
          first_name: "First name",
          last_name: "Last name",
          email: "Email adress",
          photo: "Cover photo",
          upload: "Upload a file",
          drag: "or drag and drop",
        },
      },
    },
    ar,
    de,
    nl,
    fi,
    fr,
    zh,
  },
}));
