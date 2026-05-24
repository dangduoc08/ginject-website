import { getRequestConfig } from 'next-intl/server';

const defaultLocale = 'en';
const supportedLocales = ['en', 'vi'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
