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
        name: "All Posts",
        href: "/",
        iconName: "mdi:format-list-bulleted",
      },
      {
        name: "CSS",
        href: "/blog/category/css/",
        iconName: "mdi:language-css3",
      },
      {
        name: "JavaScript",
        href: "/blog/category/js/",
        iconName: "mdi:language-javascript",
      },
    ],
  },
  {
    name: "Projects",
    href: "/projects/",
    iconName: "mdi:folder-outline",
    hasChildren: true,
    children: [
      {
        name: "Project A",
        href: "/projects/a/",
        iconName: "mdi:folder-outline",
      },
      {
        name: "Project B",
        href: "/projects/b/",
        iconName: "mdi:folder-outline",
      },
    ],  
  }

]

export default navData;