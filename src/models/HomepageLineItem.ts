import type { EntryFieldTypes } from 'contentful';

export interface Article {
  contentTypeId: 'article';
  fields: {
    body: EntryFieldTypes.RichText;
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
