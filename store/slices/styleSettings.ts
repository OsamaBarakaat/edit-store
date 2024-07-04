import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StyleSettingsState {
  banners: {
    show: boolean | null;
    showBgOverlay: boolean;
    showButton: boolean;
    showDescription: boolean;
    showTitle: boolean;
    buttonColor: string | null;
    titleColor: string | null;
    descriptionColor: string | null;
    locations: string | null;
    uploadedToLeftSection: boolean;
  },
  categories: {
    show: boolean | null;
    showTitle: boolean;
    showCategoryItemName: boolean;
    title: string | null;
    titleColor: string | null;
    itemNameColor: string | null;
    categoryItemDesign: string | null;
    uploadedToLeftSection: boolean;
  },
  products: {
    show: boolean | null;
    showTitle: boolean;
    showItemDescription: boolean;
    title: string | null;
    titleColor: string | null;
    cardDesign: string | null;
    cardBackgroundColor: string | null;
    itemNameColor: string | null;
    itemDescriptionColor: string | null;
    itemPriceColor: string | null;
    uploadedToLeftSection: boolean;
  },
}

export const initialState: StyleSettingsState = {
  banners: {
    show: true,
    showBgOverlay: true,
    showButton: true,
    showDescription: true,
    showTitle: true,
    buttonColor: 'white',
    titleColor: 'white',
    descriptionColor: 'white',
    locations: null,
    uploadedToLeftSection: false,
  },
  categories: {
    show: true,
    showTitle: true,
    showCategoryItemName: true,
    title: "Shop By Category",
    titleColor: 'black',
    itemNameColor: 'black',
    categoryItemDesign: null,
    uploadedToLeftSection: false,
  },
  products: {
    show: true,
    showTitle: true,
    showItemDescription: true,
    title: 'On Selling Products',
    titleColor: 'black',
    cardDesign: null,
    cardBackgroundColor: 'white',
    itemNameColor: 'black',
    itemDescriptionColor: 'black',
    itemPriceColor: 'black',
    uploadedToLeftSection: false,
  }
};

const styleSettingsSlice = createSlice({
  name: 'styleSettings',
  initialState,
  reducers: {
    updateBanners(state, action: PayloadAction<Partial<StyleSettingsState['banners']>>) {
      state.banners = { ...state.banners, ...action.payload };
    },
    updateCategories(state, action: PayloadAction<Partial<StyleSettingsState['categories']>>) {
      state.categories = { ...state.categories, ...action.payload };
    },
    updateProducts(state, action: PayloadAction<Partial<StyleSettingsState['products']>>) {
      state.products = { ...state.products, ...action.payload };
    },
  },
});

export const { updateBanners, updateCategories, updateProducts } = styleSettingsSlice.actions;
export const { reducer } = styleSettingsSlice;
export default styleSettingsSlice.reducer;
