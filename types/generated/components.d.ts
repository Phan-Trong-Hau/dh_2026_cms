import type { Schema, Struct } from '@strapi/strapi';

export interface ActivityHoatDong extends Struct.ComponentSchema {
  collectionName: 'components_activity_hoat_dongs';
  info: {
    displayName: 'Ho\u1EA1t \u0111\u1ED9ng';
  };
  attributes: {
    anh_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    anh_hoat_dong: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    trang_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomeSlide extends Struct.ComponentSchema {
  collectionName: 'components_home_slide_s';
  info: {
    displayName: 'Slide ';
  };
  attributes: {
    anh: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

export interface LeadershipThongTinLanhDao extends Struct.ComponentSchema {
  collectionName: 'components_leadership_thong_tin_lanh_daos';
  info: {
    displayName: 'Th\u00F4ng tin l\u00E3nh \u0111\u1EA1o';
  };
  attributes: {
    anh_chan_dung: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    anh_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface PartyConventionDaiHoi extends Struct.ComponentSchema {
  collectionName: 'components_party_convention_dai_hois';
  info: {
    displayName: '\u0110\u1EA1i h\u1ED9i';
  };
  attributes: {
    anh_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    anh_dai_hoi: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.String;
    mo_ta: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    thong_tin_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'activity.hoat-dong': ActivityHoatDong;
      'home.slide': HomeSlide;
      'leadership.thong-tin-lanh-dao': LeadershipThongTinLanhDao;
      'party-convention.dai-hoi': PartyConventionDaiHoi;
    }
  }
}
