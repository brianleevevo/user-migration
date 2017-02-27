import ROLE from './Roles';

const mapped = {
  'Super Admin': [
    ROLE.TEMPLATE_ADMINISTRATOR,
    ROLE.ARTISTS_ADMIN,
    ROLE.CONTENTPROVIDERS_ADMIN,
    ROLE.FEATURED_ADMIN,
    ROLE.FEED_ADMIN,
    ROLE.PLAYLISTS_ADMIN,
    ROLE.PREMIERES_ADMIN,
    ROLE.TASTEMAKERS_ADMIN,
    ROLE.USERS_ADMIN,
    ROLE.VANITYURL_ADMIN,
    ROLE.VIDEOS_ADMIN,
    ROLE.YOUTUBE_ADMIN
  ],
  'Vevo Admin': [
    ROLE.TEMPLATE_EDITOR,
    ROLE.FEED_WRITE,
    ROLE.FEATURED_WRITE,
    ROLE.TASTEMAKERS_WRITE,
    ROLE.VIDEOS_WRITE,
    ROLE.ARTISTS_WRITE,
    ROLE.PREMIERES_READ,
    ROLE.PLAYLISTS_WRITE,
    ROLE.VANITYURL_WRITE,
    ROLE.YOUTUBE_WRITE
  ],
  'Local Editorial Admin': [
    ROLE.TEMPLATE_MARKETING,
    ROLE.FEED_READ,
    ROLE.FEATURED_READ,
    ROLE.VIDEOS_READ,
    ROLE.VIDEOS_OVERVIEW_SHORTLINK_WRITE,
    ROLE.ARTISTS_READ,
    ROLE.PLAYLISTS_READ,
    ROLE.PLAYLISTS_SHORTLINK_WRITE
  ]
};

export default function mapAdminRoles(adminRoles) {
  if (adminRoles.includes('Super Admin'))
    return mapped['Super Admin'];
  else if (adminRoles.includes('Vevo Admin'))
    return mapped['Vevo Admin'];
  else if (adminRoles.includes('Local Editorial Admin'))
    return mapped['Local Editorial Admin'];

  /*return adminRoles.reduce((accumulator, currentValue) => {
    const roles = mapped[currentValue];
    const addRoles = (roles ? roles : [ ]).reduce((acc, role) => accumulator.includes(role) ? acc : [ ...acc, role ], [ ]);
    return [ ...accumulator, ...addRoles ];
  }, [ ]);*/
}
