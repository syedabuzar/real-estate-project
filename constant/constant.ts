export const navLinks = [
  {
    id: 1,
    url: "/home",
    label: "Home",
  },
  {
    id: 2,
    url: "/about",
    label: "About Us",
  },
  {
    id: 3,
    label: "Properties",
    submenu: [
      {
        id: "rent",
        url: "/properties/rent",
        label: "For Rent",
      },
      {
        id: "sale",
        url: "/properties/sale",
        label: "For Sale",
      },
    ],
  },
  {
    id: 4,
    url: "/contact",
    label: "Contact Us",
  },
];
