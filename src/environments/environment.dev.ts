export const environment = {
    production: false,
    AUTHORITY_URI: "https://accounts.hgmedia.dev",
    CLIENT_ID: "media_stock_admin_site_dev",
    API_BASE_URL: "https://stock-api.hgmedia.dev",
    LOGIN_REDIRECT_URL: "https://localhost:5002/authentication/login-callback",
    SCOPE: "openid profile roles email hg-stock-api offline_access",
    POST_LOGOUT_REDIRECT_URL: "https://stock-api.hgmedia.dev",
    MAX_NOTIFICATION_NUM: 10,
    BASE_URL_USER_PATH: "https://stock.hgmedia.dev",
    title: 'HG STOCK',
    NAME_SYSTEM: 'HG Media',
    NAME_RESOURCES: 'HG',
    LOGO_PANDEMIC:'/assets/icons/Logo-HgStock.svg',
    LOGO_ICON: '/assets/images/Logo.svg',
    // BASE_URL_AUTH: "https://hg-stock-api.azurewebsites.net"
  };