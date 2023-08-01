export interface IMenuItem {
  name: string;
  url?: string;
}

export interface ICarouselItem {
  id: number;
  title: string;
  imgName?: string;
  description: string;
  type: string;
}

export interface IFormItem {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  nationality?: string;
  country?: string;
  message?: string;
  skills?: [];
}
