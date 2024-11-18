type NavState = {
  isNavOpen: boolean;
};
type PageState = {
  activePage: string;
};
type LangState = {
  activeLang: string;
};
type ColorModeState = {
  colorMode: string;
};

export type RootState = {
  nav: NavState;
  pages: PageState;
  lang: LangState;
  colorMode: ColorModeState;
};
