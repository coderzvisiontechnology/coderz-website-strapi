import type { Schema, Struct } from '@strapi/strapi';

export interface InformationCardInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_information_card_info_cards';
  info: {
    displayName: 'infoCard';
  };
  attributes: {
    client_name: Schema.Attribute.String;
    industry: Schema.Attribute.String;
    service_category: Schema.Attribute.String;
    technology_used: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaImageAlt: Schema.Attribute.String;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    og_title: Schema.Attribute.String;
    schema_code: Schema.Attribute.String;
    twitter_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    twitter_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'information-card.info-card': InformationCardInfoCard;
      'seo.seo': SeoSeo;
    }
  }
}
