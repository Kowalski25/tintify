export interface AboutSectionContent {
  title: string;
  content: string;
}

export interface AboutSectionList {
  title: string;
  items: string[];
}

export interface AboutContentProps {
  section1: AboutSectionContent;
  section2: AboutSectionContent;
  section3: AboutSectionList;
}
