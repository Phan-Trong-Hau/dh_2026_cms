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
    danh_sach_anh_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    trang_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface DigitalPlatformNenTangSo extends Struct.ComponentSchema {
  collectionName: 'components_digital_platform_nen_tang_so';
  info: {
    displayName: 'N\u1EC1n t\u1EA3ng s\u1ED1';
  };
  attributes: {
    anh_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    anh_nen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    link_video: Schema.Attribute.String;
    path: Schema.Attribute.String;
    ten: Schema.Attribute.String;
  };
}

export interface DigitalPlatformNhomNenTang extends Struct.ComponentSchema {
  collectionName: 'components_digital_platform_nhom_nen_tangs';
  info: {
    displayName: 'Nh\u00F3m n\u1EC1n t\u1EA3ng';
  };
  attributes: {
    anh: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    danh_sach_nen_tang: Schema.Attribute.Component<
      'digital-platform.nen-tang-so',
      true
    >;
    ten_nhom: Schema.Attribute.String;
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
    mo_ta_anh: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    thong_tin_chi_tiet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'activity.hoat-dong': ActivityHoatDong;
      'digital-platform.nen-tang-so': DigitalPlatformNenTangSo;
      'digital-platform.nhom-nen-tang': DigitalPlatformNhomNenTang;
      'home.slide': HomeSlide;
      'leadership.thong-tin-lanh-dao': LeadershipThongTinLanhDao;
      'party-convention.dai-hoi': PartyConventionDaiHoi;
    }
  }
}
