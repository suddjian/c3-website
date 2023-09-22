import contentful from 'contentful';
import type { EntryFieldTypes } from 'contentful';

function get_env<K extends keyof ImportMeta['env']>(
  name: K
): ImportMeta['env'][K] {
  return import.meta.env[name];
}

export const contentfulClient = contentful.createClient({
  space: get_env('CONTENTFUL_SPACE_ID'),
  accessToken: import.meta.env.DEV
    ? get_env('CONTENTFUL_PREVIEW_TOKEN')
    : get_env('CONTENTFUL_DELIVERY_TOKEN'),
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export interface Article {
  contentTypeId: 'article';
  fields: {
    title: EntryFieldTypes.Text;
    urlSlug: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    photos: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  };
}

export interface HomepageLineItem {
  contentTypeId: 'homepageLineItem';
  fields: {
    linkToUrl: EntryFieldTypes.Text;
    linkToArticle: EntryFieldTypes.EntryResourceLink<Article>;
    richText: EntryFieldTypes.RichText;
    eventDate: EntryFieldTypes.Date;
  };
}
