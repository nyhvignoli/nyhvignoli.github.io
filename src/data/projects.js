import {
  labeddit01Desktop,
  labeddit01Mobile,
  labeddit01Tablet,
  labeddit02Desktop,
  labeddit02Mobile,
  labeddit02Tablet,
  labeddit03Desktop,
  labeddit03Mobile,
  labeddit03Tablet,
  labeddit04Desktop,
  labeddit04Mobile,
  labeddit04Tablet
} from '../assets/projects/labeddit'
import {
  formDesktop,
  formTablet,
  masonryCardsDesktop,
  masonryCardsMobile,
  masonryCardsTablet,
  presentationDesktop,
  presentationMobile,
  presentationTablet
} from '../assets/projects/mongo-db/lib'
import {
  bgImgAfterDesktop,
  bgImgAfterMobile,
  bgImgAfterTablet,
  bgImgBeforeDesktop,
  bgImgBeforeMobile,
  bgImgBeforeTablet,
  detailsAfterDesktop,
  detailsAfterMobile,
  detailsAfterTablet,
  detailsBeforeDesktop,
  detailsBeforeMobile,
  detailsBeforeTablet,
  lpNavAfterDesktop,
  lpNavAfterMobile,
  lpNavAfterTablet,
  lpNavBeforeDesktop,
  lpNavBeforeMobile,
  lpNavBeforeTablet,
  segaAfterDesktop,
  segaAfterMobileDesktop,
  segaAfterMobileMobile,
  segaAfterMobileTablet,
  segaAfterMobile,
  segaAfterTablet,
  segaBeforeDesktop,
  segaBeforeMobileDesktop,
  segaBeforeMobileMobile,
  segaBeforeMobileTablet,
  segaBeforeMobile,
  segaBeforeTablet
} from '../assets/projects/mongo-db/website'
import {
  musicatchers01Desktop,
  musicatchers01Mobile,
  musicatchers01Tablet,
  musicatchers02Desktop,
  musicatchers02Mobile,
  musicatchers02Tablet,
  musicatchers03Desktop,
  musicatchers03Mobile,
  musicatchers03Tablet,
  musicatchers04Desktop,
  musicatchers04Mobile,
  musicatchers04Tablet,
  musicatchers05Desktop,
  musicatchers05Mobile,
  musicatchers05Tablet
} from '../assets/projects/musicatchers'

export const getProjects = ({
  mongoDBDescription,
  mongoDBComponentLibrary,
  mongoDBComponentLibDescription,
  musicatchersDescription,
  labedditDescription,
  viewDocumentation,
  labenuSystemDescription,
  labookDescription,
  images
}) => {
  const { mongoDB, mongoDBComponentLib, musicatchers, labeddit } = images

  const projects = [
    {
      title: 'MongoDB Website',
      type: 'Full Stack',
      images: [
        {
          sources: {
            desktop: bgImgAfterDesktop,
            mobile: bgImgAfterMobile,
            tablet: bgImgAfterTablet
          },
          alt: mongoDB.backgroundImgAfter.alt,
          caption: mongoDB.backgroundImgAfter.caption
        },
        {
          sources: {
            desktop: bgImgBeforeDesktop,
            mobile: bgImgBeforeMobile,
            tablet: bgImgBeforeTablet
          },
          alt: mongoDB.backgroundImgBefore.alt,
          caption: mongoDB.backgroundImgBefore.caption
        },
        {
          sources: {
            desktop: detailsBeforeDesktop,
            mobile: detailsBeforeMobile,
            tablet: detailsBeforeTablet
          },
          alt: mongoDB.detailsBefore.alt,
          caption: mongoDB.detailsBefore.caption
        },
        {
          sources: {
            desktop: detailsAfterDesktop,
            mobile: detailsAfterMobile,
            tablet: detailsAfterTablet
          },
          alt: mongoDB.detailsAfter.alt,
          caption: mongoDB.detailsAfter.caption
        },
        {
          sources: {
            desktop: lpNavBeforeDesktop,
            mobile: lpNavBeforeMobile,
            tablet: lpNavBeforeTablet
          },
          alt: mongoDB.lpNavBefore.alt,
          caption: mongoDB.lpNavBefore.caption
        },
        {
          sources: {
            desktop: lpNavAfterDesktop,
            mobile: lpNavAfterMobile,
            tablet: lpNavAfterTablet
          },
          alt: mongoDB.lpNavAfter.alt,
          caption: mongoDB.lpNavAfter.caption
        },
        {
          sources: {
            desktop: segaBeforeDesktop,
            mobile: segaBeforeMobile,
            tablet: segaBeforeTablet
          },
          alt: mongoDB.segaBefore.alt,
          caption: mongoDB.segaBefore.caption
        },
        {
          sources: {
            desktop: segaBeforeMobileDesktop,
            mobile: segaBeforeMobileMobile,
            tablet: segaBeforeMobileTablet
          },
          alt: mongoDB.segaBeforeMobile.alt,
          caption: mongoDB.segaBeforeMobile.caption
        },
        {
          sources: {
            desktop: segaAfterDesktop,
            mobile: segaAfterMobile,
            tablet: segaAfterTablet
          },
          alt: mongoDB.segaAfter.alt,
          caption: mongoDB.segaAfter.caption
        },
        {
          sources: {
            desktop: segaAfterMobileDesktop,
            mobile: segaAfterMobileMobile,
            tablet: segaAfterMobileTablet
          },
          alt: mongoDB.segaAfterMobile.alt,
          caption: mongoDB.segaAfterMobile.caption
        }
      ],
      description: mongoDBDescription,
      ctas: [{ href: 'https://www.mongodb.com/' }],
      tags: [
        'react',
        'preact',
        'styled-components',
        'svelte',
        'jest',
        'node',
        'mongoDB'
      ]
    },
    {
      title: mongoDBComponentLibrary,
      type: 'Front-end',
      images: [
        {
          sources: {
            desktop: presentationDesktop,
            mobile: presentationMobile,
            tablet: presentationTablet
          },
          alt: mongoDBComponentLib.webinarsPresentation.alt,
          caption: mongoDBComponentLib.webinarsPresentation.caption
        },
        {
          sources: {
            desktop: masonryCardsDesktop,
            mobile: masonryCardsMobile,
            tablet: masonryCardsTablet
          },
          alt: mongoDBComponentLib.cardGrid.alt,
          caption: mongoDBComponentLib.cardGrid.caption
        },
        {
          sources: {
            desktop: formDesktop,
            mobile: formTablet,
            tablet: formTablet
          },
          alt: mongoDBComponentLib.form.alt,
          caption: mongoDBComponentLib.form.caption
        }
      ],
      description: mongoDBComponentLibDescription,
      ctas: [{ href: 'https://www.mongodb.com/' }],
      tags: ['react', 'theme-ui', 'storybook', 'rollup', 'jest', 'node']
    },
    {
      title: 'MusiCatchers',
      type: 'Full Stack',
      images: [
        {
          sources: {
            desktop: musicatchers01Desktop,
            mobile: musicatchers01Mobile,
            tablet: musicatchers01Tablet
          },
          alt: musicatchers.musicatchersScreenshot.alt,
          caption: musicatchers.musicatchersScreenshot.caption
        },
        {
          sources: {
            desktop: musicatchers02Desktop,
            mobile: musicatchers02Mobile,
            tablet: musicatchers02Tablet
          },
          alt: musicatchers.musicatchers2.alt,
          caption: musicatchers.musicatchers2.caption
        },
        {
          sources: {
            desktop: musicatchers03Desktop,
            mobile: musicatchers03Mobile,
            tablet: musicatchers03Tablet
          },
          alt: musicatchers.musicatchers3.alt,
          caption: musicatchers.musicatchers3.caption
        },
        {
          sources: {
            desktop: musicatchers04Desktop,
            mobile: musicatchers04Mobile,
            tablet: musicatchers04Tablet
          },
          alt: musicatchers.musicatchers4.alt,
          caption: musicatchers.musicatchers4.caption
        },
        {
          sources: {
            desktop: musicatchers05Desktop,
            mobile: musicatchers05Mobile,
            tablet: musicatchers05Tablet
          },
          alt: musicatchers.musicatchers5.alt,
          caption: musicatchers.musicatchers5.caption
        }
      ],
      description: musicatchersDescription,
      ctas: [
        {
          text: 'Front-end (GitHub)',
          href: 'https://github.com/nyhvignoli/musicatchers-frontend'
        },
        {
          text: 'Back-end (GitHub)',
          href: 'https://github.com/nyhvignoli/musicatchers-backend'
        }
      ],
      tags: [
        'react',
        'axios',
        'styled-components',
        'material-ui',
        'nodejs',
        'mysql',
        'jest'
      ]
    },
    {
      title: 'Labeddit',
      type: 'Front-end',
      images: [
        {
          sources: {
            desktop: labeddit01Desktop,
            mobile: labeddit01Mobile,
            tablet: labeddit01Tablet
          },
          alt: labeddit.labedditScreenshot.alt,
          caption: labeddit.labedditScreenshot.caption
        },
        {
          sources: {
            desktop: labeddit02Desktop,
            mobile: labeddit02Mobile,
            tablet: labeddit02Tablet
          },
          alt: labeddit.labeddit2.alt,
          caption: labeddit.labeddit2.caption
        },
        {
          sources: {
            desktop: labeddit03Desktop,
            mobile: labeddit03Mobile,
            tablet: labeddit03Tablet
          },
          alt: labeddit.labeddit3.alt,
          caption: labeddit.labeddit3.caption
        },
        {
          sources: {
            desktop: labeddit04Desktop,
            mobile: labeddit04Mobile,
            tablet: labeddit04Tablet
          },
          alt: labeddit.labeddit4.alt,
          caption: labeddit.labeddit4.caption
        }
      ],
      description: labedditDescription,
      ctas: [
        { href: 'http://nyhv-labeddit.surge.sh' },
        {
          text: 'Front-end (GitHub)',
          href: 'https://github.com/nyhvignoli/labeddit'
        }
      ],
      tags: ['react', 'axios', 'styled-components', 'material-ui']
    },
    {
      title: 'Labenu System',
      type: 'Back-end',
      description: labenuSystemDescription,
      ctas: [
        {
          text: 'Back-end (GitHub)',
          href: 'https://github.com/nyhvignoli/labenu-system'
        },
        {
          text: viewDocumentation,
          href: 'https://documenter.getpostman.com/view/13242412/TVza9tK7'
        }
      ],
      tags: ['express', 'knex', 'mysql', 'uuid', 'dotenv', 'dayjs', 'cors']
    },
    {
      title: 'Labook',
      type: 'Back-end',
      description: labookDescription,
      ctas: [
        {
          text: 'Back-end (GitHub)',
          href: 'https://github.com/nyhvignoli/labook'
        },
        {
          text: viewDocumentation,
          href: 'https://github.com/nyhvignoli/labook#endpoints'
        }
      ],
      tags: [
        'express',
        'knex',
        'mysql',
        'uuid',
        'dotenv',
        'jasonwebtoken',
        'bcrypt'
      ]
    }
  ]

  return projects
}
