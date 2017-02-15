import ROLE from './Roles';

const mapped = {
  'Super Admin': [
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
  return adminRoles.reduce((accumulator, currentValue) => {
    const roles = mapped[currentValue];
    const addRoles = (roles ? roles : [ ]).reduce((acc, role) => accumulator.includes(role) ? acc : [ ...acc, role ], [ ]);
    return [ ...accumulator, ...addRoles ];
  }, [ ]);
}
