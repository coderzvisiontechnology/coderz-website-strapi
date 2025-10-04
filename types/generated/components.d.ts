import type { Schema, Struct } from '@strapi/strapi';

export interface InformationCardAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_information_card_about_uses';
  info: {
    displayName: 'about_us';
  };
  attributes: {
    about_description: Schema.Attribute.Text;
    about_icon: Schema.Attribute.Media<'images' | 'files'>;
    about_title: Schema.Attribute.String;
  };
}

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

export interface InformationCardBenefitsCardSection
  extends Struct.ComponentSchema {
  collectionName: 'components_information_card_benefits_card_sections';
  info: {
    displayName: 'benefits_card_section';
  };
  attributes: {
    benefits_card_image: Schema.Attribute.Media<'images' | 'files'>;
    benefits_card_title: Schema.Attribute.String;
  };
}

export interface InformationCardFaq extends Struct.ComponentSchema {
  collectionName: 'components_information_card_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    faq_subtitle: Schema.Attribute.Text;
    faq_title: Schema.Attribute.String;
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
    header_submenu: Schema.Attribute.Component<
      'information-card.header-submenu',
      true
    >;
    menu: Schema.Attribute.Blocks;
  };
}

export interface InformationCardHeaderSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_information_card_header_submenus';
  info: {
    displayName: 'header_submenu';
  };
  attributes: {
    submenu: Schema.Attribute.Blocks;
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

export interface InformationCardTestimonialSection
  extends Struct.ComponentSchema {
  collectionName: 'components_information_card_testimonial_sections';
  info: {
    displayName: 'testimonial section';
  };
  attributes: {
    testimonial_companyname: Schema.Attribute.String;
    testimonial_icon: Schema.Attribute.Media<'images' | 'files'>;
    testimonial_name: Schema.Attribute.String;
    testimonial_quote: Schema.Attribute.Text;
  };
}

export interface InformationCardTrustedImages extends Struct.ComponentSchema {
  collectionName: 'components_information_card_trusted_images';
  info: {
    displayName: 'trusted_images';
  };
  attributes: {
    trusted_logos: Schema.Attribute.Media<'images' | 'files'>;
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
      'information-card.about-us': InformationCardAboutUs;
      'information-card.address': InformationCardAddress;
      'information-card.benefits-card-section': InformationCardBenefitsCardSection;
      'information-card.faq': InformationCardFaq;
      'information-card.footer-menu': InformationCardFooterMenu;
      'information-card.header-menu': InformationCardHeaderMenu;
      'information-card.header-submenu': InformationCardHeaderSubmenu;
      'information-card.info-card': InformationCardInfoCard;
      'information-card.partner-images': InformationCardPartnerImages;
      'information-card.policies': InformationCardPolicies;
      'information-card.policys': InformationCardPolicys;
      'information-card.service-lisis': InformationCardServiceLisis;
      'information-card.social-links': InformationCardSocialLinks;
      'information-card.testimonial-section': InformationCardTestimonialSection;
      'information-card.trusted-images': InformationCardTrustedImages;
      'seo.seo': SeoSeo;
    }
  }
}
