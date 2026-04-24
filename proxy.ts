import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // '/' = default (Italian), '/en' = English (source of truth: i18n.ts)
  localePrefix,

  // Disable automatic locale detection to prevent unwanted redirects
  localeDetection: false,
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next`, `/_vercel`, `/ingest` (PostHog proxy), `/images`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|ingest|images|.*\\..*).*)']
};
