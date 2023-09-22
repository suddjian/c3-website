import contentful from 'contentful';
import type { EntryFieldTypes } from 'contentful';

function get_env<K extends keyof ImportMeta['env']>(
  name: K
): ImportMeta['env'][K] {
  return import.meta.env[name];
}

const DEV = get_env('DEV');
const settings = {
  space: get_env('CONTENTFUL_SPACE_ID'),
  accessToken: DEV
    ? get_env('CONTENTFUL_PREVIEW_TOKEN')
    : get_env('CONTENTFUL_DELIVERY_TOKEN'),
  host:
    get_env('CONTENTFUL_HOST') ?? DEV
      ? 'preview.contentful.com'
      : 'cdn.contentful.com',
};

export const contentfulClient = contentful.createClient(settings);

export function getUrlForContent(content: any) {
  if (!content) return null;
  switch (content.sys.contentType.sys.id) {
    case 'article':
      return `/articles/${content.fields.urlSlug}`;
  }
}

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
