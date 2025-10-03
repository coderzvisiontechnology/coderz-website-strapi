import type { Schema, Struct } from '@strapi/strapi';

export interface InformationCardAddress extends Struct.ComponentSchema {
  collectionName: 'components_information_card_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    address_icon: Schema.Attribute.Media<'images' | 'files'>;
    country_name: Schema.Attribute.String;
    locatiom: Schema.Attribute.Text;
  };
}

export interface InformationCardFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_information_card_footer_menus';
  info: {
    displayName: 'footer_menu';
  };
  attributes: {
    footer_menu: Schema.Attribute.Blocks;
  };
}

export interface InformationCardHeaderMenu extends Struct.ComponentSchema {
  collectionName: 'components_information_card_header_menus';
  info: {
    displayName: 'header_menu';
  };
  attributes: {
    menu: Schema.Attribute.Blocks;
  };
}

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

export interface InformationCardPartnerImages extends Struct.ComponentSchema {
  collectionName: 'components_information_card_partner_images';
  info: {
    displayName: 'partner_images';
  };
  attributes: {
    partner_logos: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface InformationCardPolicies extends Struct.ComponentSchema {
  collectionName: 'components_information_card_policies';
  info: {
    displayName: 'Policies';
  };
  attributes: {
    policies: Schema.Attribute.Blocks;
  };
}

export interface InformationCardPolicys extends Struct.ComponentSchema {
  collectionName: 'components_information_card_policys';
  info: {
    displayName: 'policys';
  };
  attributes: {};
}

export interface InformationCardServiceLisis extends Struct.ComponentSchema {
  collectionName: 'components_information_card_service_lises';
  info: {
    displayName: 'Service_Lists';
  };
  attributes: {
    service_description: Schema.Attribute.Text;
    service_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    service_image: Schema.Attribute.Media<'images' | 'files'>;
    service_title: Schema.Attribute.String;
  };
}

export interface InformationCardSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_information_card_social_links';
  info: {
    displayName: 'Social_Links';
  };
  attributes: {
    social_links: Schema.Attribute.Media<'images' | 'files'>;
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
      'information-card.address': InformationCardAddress;
      'information-card.footer-menu': InformationCardFooterMenu;
      'information-card.header-menu': InformationCardHeaderMenu;
      'information-card.info-card': InformationCardInfoCard;
      'information-card.partner-images': InformationCardPartnerImages;
      'information-card.policies': InformationCardPolicies;
      'information-card.policys': InformationCardPolicys;
      'information-card.service-lisis': InformationCardServiceLisis;
      'information-card.social-links': InformationCardSocialLinks;
      'seo.seo': SeoSeo;
    }
  }
}
