import type { Attribute, Schema } from '@strapi/strapi';

export interface CommonLinkItem extends Schema.Component {
  collectionName: 'components_common_link_items';
  info: {
    displayName: 'LinkItem';
    icon: 'link';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    URL: Attribute.String & Attribute.Required & Attribute.DefaultTo<'#'>;
  };
}

export interface CommonTextBlock extends Schema.Component {
  collectionName: 'components_common_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'align-left';
  };
  attributes: {
    body: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface CommonTextImageBlock extends Schema.Component {
  collectionName: 'components_common_text_image_blocks';
  info: {
    displayName: 'TextImageBlock';
    icon: 'layout';
  };
  attributes: {
    Media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Text: Attribute.Blocks;
  };
}

export interface MediaImageGallery extends Schema.Component {
  collectionName: 'components_media_image_galleries';
  info: {
    description: '';
    displayName: 'ImageGallery';
    icon: 'images';
  };
  attributes: {
    Image: Attribute.Media<'videos' | 'images' | 'audios' | 'files', true>;
  };
}

export interface MediaVideoEmbedWithCaption extends Schema.Component {
  collectionName: 'components_media_video_embed_with_captions';
  info: {
    displayName: 'VideoEmbedWithCaption';
    icon: 'play';
  };
  attributes: {
    Caption: Attribute.String;
    EmbedCode: Attribute.Text;
  };
}

export interface MediaVideoWithCaption extends Schema.Component {
  collectionName: 'components_media_image_with_captions';
  info: {
    description: '';
    displayName: 'MediaWithCaption';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.link-item': CommonLinkItem;
      'common.text-block': CommonTextBlock;
      'common.text-image-block': CommonTextImageBlock;
      'media.image-gallery': MediaImageGallery;
      'media.video-embed-with-caption': MediaVideoEmbedWithCaption;
      'media.video-with-caption': MediaVideoWithCaption;
    }
  }
}
