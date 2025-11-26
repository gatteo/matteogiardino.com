import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use the default locale for the root path
  localePrefix: 'as-needed', // This means '/' = Italian, '/en' = English

  // Disable automatic locale detection to prevent unwanted redirects
  localeDetection: false,
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next`, `/_vercel`, `/images`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|images|.*\\..*).*)']
};
