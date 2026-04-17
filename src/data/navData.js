const navData = [
  {
    name: "About",
    href: "/about/",
    iconName: "mdi:account-circle-outline",
  },
  {
    name: "Blog",
    href: "/blog/",
    iconName: "mdi:blog-outline",
    hasChildren: true,
    children: [
      {
        name: "CSS",
        href: "/blog/category/css/",
        iconName: "mdi:language-css3",
      },
      {
        name: "JavaScript",
        href: "/blog/category/javascript/",
        iconName: "mdi:language-javascript",
      },
      {
        name: "AI",
        href: "/blog/category/ai/",
        iconName: "mdi:robot-outline",
      },
    ],
  },
]

export default navData;