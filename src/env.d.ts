interface ImportMetaEnv {
  readonly CONTENTFUL_HOST: string;
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
