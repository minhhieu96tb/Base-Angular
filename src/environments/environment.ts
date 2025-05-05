// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTHORITY_URI: "https://accounts.hgmedia.dev",
  CLIENT_ID: "media_stock_admin_site_dev",
  API_BASE_URL: "https://stock-api.hgmedia.dev",
  LOGIN_REDIRECT_URL: "https://localhost:5002/authentication/login-callback",
  SCOPE: "openid profile roles email hg-stock-api offline_access",
  POST_LOGOUT_REDIRECT_URL: "https://localhost:5002",
  MAX_NOTIFICATION_NUM: 10,
  BASE_URL_USER_PATH: "https://stock.hgmedia.dev",
  title: 'HG STOCK',
  NAME_SYSTEM: 'HG Media',
  NAME_RESOURCES: 'HG',
  LOGO_PANDEMIC:'/assets/icons/Logo-HgStock.svg',
  LOGO_ICON: '/assets/images/Logo.svg',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
