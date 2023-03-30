import musicatchersScreenshot from '../assets/musicatchers.PNG'
import musicatchers2 from '../assets/musicatchers-2.PNG'
import musicatchers3 from '../assets/musicatchers-3.PNG'
import musicatchers4 from '../assets/musicatchers-4.PNG'
import musicatchers5 from '../assets/musicatchers-5.PNG'
import labedditScreenshot from '../assets/labeddit.PNG'
import labeddit2 from '../assets/labeddit-2.PNG'
import labeddit3 from '../assets/labeddit-3.PNG'
import labeddit4 from '../assets/labeddit-4.PNG'
import shoppingOmni1 from '../assets/shopping-omni/shoppingomni-1.png'
import shoppingOmni2 from '../assets/shopping-omni/shoppingomni-2.png'
import shoppingOmni3 from '../assets/shopping-omni/shoppingomni-3.png'
import backgroundImgBefore from '../assets/mongo-db/background-img-before.png'
import backgroundImgAfter from '../assets/mongo-db/background-img-after.png'
import cardGridBefore from '../assets/mongo-db/card-grid-before.png'
import cardGridSmallAfter from '../assets/mongo-db/card-grid-small-after.png'
import cardGridLargeAfter from '../assets/mongo-db/card-grid-large-after.png'
import detailsBefore from '../assets/mongo-db/details-before.png'
import detailsAfter from '../assets/mongo-db/details-after.png'
import lpNavBefore from '../assets/mongo-db/lp-nav-before.png'
import lpNavAfter from '../assets/mongo-db/lp-nav-after.png'
import segaBefore from '../assets/mongo-db/sega-before.png'
import segaAfter from '../assets/mongo-db/sega-after.png'
import segaBeforeMobile from '../assets/mongo-db/sega-before-mobile.png'
import segaAfterMobile from '../assets/mongo-db/sega-after-mobile.png'

export const getProjects = ({
  mongoDBDescription,
  shoppingOmniDescription,
  musicatchersDescription,
  labedditDescription,
  viewDocumentation,
  labenuSystemDescription,
  labookDescription,
  images
}) => {
  const { mongoDB, shoppingOmni, musicatchers, labeddit } = images

  const projects = [
    {
      title: 'MongoDB Website',
      type: 'Full Stack',
      images: [
        {
          src: backgroundImgAfter,
          alt: mongoDB.backgroundImgAfter.alt,
          caption: mongoDB.backgroundImgAfter.caption
        },
        {
          src: backgroundImgBefore,
          alt: mongoDB.backgroundImgBefore.alt,
          caption: mongoDB.backgroundImgBefore.caption
        },
        {
          src: cardGridBefore,
          alt: mongoDB.cardGridBefore.alt,
          caption: mongoDB.cardGridBefore.caption
        },
        {
          src: cardGridLargeAfter,
          alt: mongoDB.cardGridLargeAfter.alt,
          caption: mongoDB.cardGridLargeAfter.caption
        },
        {
          src: cardGridSmallAfter,
          alt: mongoDB.cardGridSmallAfter.alt,
          caption: mongoDB.cardGridSmallAfter.caption
        },
        {
          src: detailsBefore,
          alt: mongoDB.detailsBefore.alt,
          caption: mongoDB.detailsBefore.caption
        },
        {
          src: detailsAfter,
          alt: mongoDB.detailsAfter.alt,
          caption: mongoDB.detailsAfter.caption
        },
        {
          src: lpNavBefore,
          alt: mongoDB.lpNavBefore.alt,
          caption: mongoDB.lpNavBefore.caption
        },
        {
          src: lpNavAfter,
          alt: mongoDB.lpNavAfter.alt,
          caption: mongoDB.lpNavAfter.caption
        },
        {
          src: segaBefore,
          alt: mongoDB.segaBefore.alt,
          caption: mongoDB.segaBefore.caption
        },
        {
          src: segaBeforeMobile,
          alt: mongoDB.segaBeforeMobile.alt,
          caption: mongoDB.segaBeforeMobile.caption
        },
        {
          src: segaAfter,
          alt: mongoDB.segaAfter.alt,
          caption: mongoDB.segaAfter.caption
        },
        {
          src: segaAfterMobile,
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
      title: 'Shopping Omni',
      type: 'Full Stack',
      images: [
        {
          src: shoppingOmni1,
          alt: shoppingOmni.shoppingOmni1.alt,
          caption: shoppingOmni.shoppingOmni1.caption
        },
        {
          src: shoppingOmni2,
          alt: shoppingOmni.shoppingOmni2.alt,
          caption: shoppingOmni.shoppingOmni2.caption
        },
        {
          src: shoppingOmni3,
          alt: shoppingOmni.shoppingOmni3.alt,
          caption: shoppingOmni.shoppingOmni3.caption
        }
      ],
      description: shoppingOmniDescription,
      ctas: [],
      tags: [
        'react',
        'styled-components',
        'bootstrap',
        'jest',
        'redux',
        'node',
        'postgreSQL',
        'mocha',
        'AWS'
      ]
    },
    {
      title: 'MusiCatchers',
      type: 'Full Stack',
      images: [
        {
          src: musicatchersScreenshot,
          alt: musicatchers.musicatchersScreenshot.alt,
          caption: musicatchers.musicatchersScreenshot.caption
        },
        {
          src: musicatchers2,
          alt: musicatchers.musicatchers2.alt,
          caption: musicatchers.musicatchers2.caption
        },
        {
          src: musicatchers3,
          alt: musicatchers.musicatchers3.alt,
          caption: musicatchers.musicatchers3.caption
        },
        {
          src: musicatchers4,
          alt: musicatchers.musicatchers4.alt,
          caption: musicatchers.musicatchers4.caption
        },
        {
          src: musicatchers5,
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
          src: labedditScreenshot,
          alt: labeddit.labedditScreenshot.alt,
          caption: labeddit.labedditScreenshot.caption
        },
        {
          src: labeddit2,
          alt: labeddit.labeddit2.alt,
          caption: labeddit.labeddit2.caption
        },
        {
          src: labeddit3,
          alt: labeddit.labeddit3.alt,
          caption: labeddit.labeddit3.caption
        },
        {
          src: labeddit4,
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
