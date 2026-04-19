import type { Schema, Struct } from '@strapi/strapi';

export interface ActivityHoatDong extends Struct.ComponentSchema {
  collectionName: 'components_activity_hoat_dongs';
  info: {
    displayName: 'Ho\u1EA1t \u0111\u1ED9ng';
  };
  attributes: {
    anh_hoat_dong: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mo_ta: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
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
    mo_ta: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    ten: Schema.Attribute.String;
    tuoi: Schema.Attribute.String;
  };
}

export interface PartyConventionDaiHoi extends Struct.ComponentSchema {
  collectionName: 'components_party_convention_dai_hois';
  info: {
    displayName: '\u0110\u1EA1i h\u1ED9i';
  };
  attributes: {
    anh_dai_hoi: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    lan_thu: Schema.Attribute.String;
    mo_ta_chi_tiet: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    mo_ta_ngan: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    nhiem_ky: Schema.Attribute.String;
    ten_dai_hoi: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'activity.hoat-dong': ActivityHoatDong;
      'leadership.thong-tin-lanh-dao': LeadershipThongTinLanhDao;
      'party-convention.dai-hoi': PartyConventionDaiHoi;
    }
  }
}
