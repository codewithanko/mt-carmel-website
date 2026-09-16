export type NavChild = { label: string; to: string; hash?: string; description?: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      {
        label: "Our Story",
        to: "/about",
        hash: "story",
        description: "How the Mt Carmel Campus began.",
      },
      {
        label: "Vision & Mission",
        to: "/about",
        hash: "vision",
        description: "What we are here to do.",
      },
      {
        label: "Our Leadership",
        to: "/about",
        hash: "leadership",
        description: "Meet the pastoral team.",
      },
      {
        label: "What We Believe",
        to: "/about",
        hash: "beliefs",
        description: "Our statement of faith.",
      },
    ],
  },
  {
    label: "Ministries",
    to: "/ministries",
    children: [
      { label: "All Ministries", to: "/ministries", description: "Find your place to serve." },
      { label: "Men's Ministry", to: "/ministries", hash: "mens-ministry" },
      { label: "Women's Ministry", to: "/ministries", hash: "womens-ministry" },
      { label: "Youth Ministry", to: "/ministries", hash: "youth-ministry" },
      { label: "Children's Ministry", to: "/ministries", hash: "childrens-ministry" },
      { label: "Choir & Media", to: "/ministries", hash: "choir-media-ministry" },
    ],
  },
  {
    label: "Programs",
    to: "/programs",
    children: [
      { label: "All Programs", to: "/programs", description: "Weekly and seasonal gatherings." },
      { label: "Stewardship", to: "/stewardship", description: "Time, talent and treasure." },
      { label: "Prayer Requests", to: "/prayer-requests", description: "We will pray with you." },
    ],
  },
  { label: "Events", to: "/events" },
  { label: "Sermons", to: "/sermons" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Ministries", to: "/ministries" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Sermons", to: "/sermons" },
  { label: "Blog", to: "/blog" },
  { label: "Stewardship", to: "/stewardship" },
  { label: "Giving", to: "/giving" },
  { label: "Prayer Requests", to: "/prayer-requests" },
  { label: "Contact", to: "/contact" },
];
