import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "Rizki Park Central Master Silicon Valley Star Class",
    slug: "rizki-park-central-master-silicon-valley-star-class",
    price: 18560000,
    duration: "20 days",
    location: "Jakarta Pusat",
    rating: 4.5,
    address: "Dekat gedung BWA HQ di Jakarta no 102939",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam id alias repellendus soluta asperiores! Adipisci, doloribus ea. Voluptate fugiat, magnam, aliquam voluptatem sapiente, culpa vel numquam repellat molestias maiores ea.",
    features: [
      "Global Event",
      "Privacy",
      "Sustainbility",
      "Extra Snacks",
      "Compact",
      "Free Move",
    ],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Masayoshi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Fuji Ovina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    tags: ["Popular"],
  },
  {
    id: 2,
    title: "Technoverse Innovation Summit 2025",
    slug: "technoverse-innovation-summit-2025",
    price: 21200000,
    duration: "15 days",
    location: "Bandung",
    rating: 4.8,
    address: "Jl. Braga No. 22, Bandung, Jawa Barat",
    image: "/assets/images/thumbnails/thumbnails-2.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    about:
      "Ajang konferensi teknologi terbesar di Indonesia yang mempertemukan para inovator, investor, dan profesional digital dalam satu tempat.",
    features: [
      "Tech Talks",
      "Networking Session",
      "Free WiFi",
      "Coffee Break",
      "Innovation Lab",
    ],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Andi Prakoso",
        role: "Event Consultant",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Rina Kusuma",
        role: "Sales Executive",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    tags: ["Featured"],
  },
  {
    id: 3,
    title: "Global Startup Bootcamp Asia",
    slug: "global-startup-bootcamp-asia",
    price: 15700000,
    duration: "10 days",
    location: "Surabaya",
    rating: 4.3,
    address: "Jl. Tunjungan No. 88, Surabaya",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    about:
      "Program intensif untuk para founder dan startup enthusiast yang ingin mempercepat pertumbuhan bisnis digital mereka.",
    features: [
      "Mentoring Session",
      "Pitching Demo",
      "Investor Meetup",
      "Merchandise",
      "Workspace Access",
    ],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Bambang Santoso",
        role: "Program Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Jessica Han",
        role: "Sales Coordinator",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    tags: ["Startup"],
  },
  {
    id: 4,
    title: "Creative Design Mastery 2025",
    slug: "creative-design-mastery-2025",
    price: 12850000,
    duration: "12 days",
    location: "Yogyakarta",
    rating: 4.6,
    address: "Jl. Malioboro No. 11, Yogyakarta",
    image: "/assets/images/thumbnails/thumbnails-2.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-3.png",
      "/assets/images/thumbnails/thumbnail-details-2.png",
    ],
    about:
      "Pelatihan eksklusif bagi desainer muda untuk menguasai tren dan teknik terkini dalam dunia desain grafis dan UI/UX.",
    features: [
      "Hands-on Workshop",
      "Design Review",
      "Free Toolkit",
      "Portfolio Session",
      "Networking Night",
    ],
    isFullyBooked: true,
    salesContacts: [
      {
        name: "Dewi Ramadhani",
        role: "Design Lead",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Rafi Kurniawan",
        role: "Sales Executive",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    tags: ["Best Seller"],
  },
  {
    id: 5,
    title: "AI & Machine Learning Conference 2025",
    slug: "ai-machine-learning-conference-2025",
    price: 25900000,
    duration: "7 days",
    location: "Medan",
    rating: 4.9,
    address: "Jl. Sunset Road No. 45, Kuta, Medan",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-3.png",
      "/assets/images/thumbnails/thumbnail-details-2.png",
    ],
    about:
      "Konferensi internasional yang membahas kemajuan terbaru dalam bidang Artificial Intelligence, Data Science, dan Machine Learning.",
    features: [
      "Keynote Speakers",
      "Panel Discussion",
      "Workshop",
      "Gala Dinner",
      "Exclusive Access",
    ],
    isFullyBooked: true,
    salesContacts: [
      {
        name: "Samuel Lee",
        role: "Conference Director",
        photo: "/assets/images/photos/photo-2.png",
      },
      {
        name: "Nadia Putri",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
    ],
    tags: ["International"],
  },
];
