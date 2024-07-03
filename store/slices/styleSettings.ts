import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StyleSettingsState {
  banners: {
    show: boolean;
    showBgOverlay: boolean;
    showButton: boolean;
    showDescription: boolean;
    showTitle: boolean;
    buttonColor: string | null;
    titleColor: string | null;
    descriptionColor: string | null;
    locations: string | null;
  },
  categories: {
    show: boolean;
    showTitle: boolean;
    showCategoryItemName: boolean;
    title: string | null;
    titleColor: string | null;
    itemNameColor: string | null;
    categoryItemDesign: string | null;
  },
  products: {
    show: boolean;
    showTitle: boolean;
    showItemDescription: boolean;
    title: string | null;
    titleColor: string | null;
    cardDesign: string | null;
    cardBackgroundColor: string | null;
    itemNameColor: string | null;
    itemDescriptionColor: string | null;
    itemPriceColor: string | null;
  },
}

export const initialState: StyleSettingsState = {
  banners: {
    show: true,
    showBgOverlay: true,
    showButton: true,
    showDescription: true,
    showTitle: true,
    buttonColor: null,
    titleColor: null,
    descriptionColor: null,
    locations: null,
  },
  categories: {
    show: true,
    showTitle: true,
    showCategoryItemName: true,
    title: null,
    titleColor: null,
    itemNameColor: null,
    categoryItemDesign: null,
  },
  products: {
    show: true,
    showTitle: true,
    showItemDescription: true,
    title: null,
    titleColor: null,
    cardDesign: null,
    cardBackgroundColor: null,
    itemNameColor: null,
    itemDescriptionColor: null,
    itemPriceColor: null,
  }
};

const styleSettingsSlice = createSlice({
  name: 'styleSettings',
  initialState,
  reducers: {
    updateBanners(state, action: PayloadAction<Partial<StyleSettingsState['banners']>>) {
      state.banners = { ...state.banners, ...action.payload };
      console.log('action.payload',action.payload)
    },
    updateCategories(state, action: PayloadAction<Partial<StyleSettingsState['categories']>>) {
      state.categories = { ...state.categories, ...action.payload };
      console.log('action.payload',action.payload)
    },
    updateProducts(state, action: PayloadAction<Partial<StyleSettingsState['products']>>) {
      state.products = { ...state.products, ...action.payload };
      console.log('action.payload',action.payload)
    },
  },
});

export const { updateBanners, updateCategories, updateProducts } = styleSettingsSlice.actions;
export const { reducer } = styleSettingsSlice;
export default styleSettingsSlice.reducer;
