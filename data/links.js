import { FaEnvelope, FaPhone, FaLocationDot, FaFacebookF, FaXTwitter,
  FaLinkedinIn,
  FaInstagram, } from "react-icons/fa6";

export const footerData = {
  "footerLinks" : [
   {
    "id": 1,
    "category": "Services",
    "links": [
      {
        "title": "Consulting",
        "href": "/consulting"
      },
      {
        "title": "Support",
        "href": "/support"
      },
      {
        "title": "Custom Solutions",
        "href": "/custom-solutions"
      },
      {
        "title": "Training & Workshops",
        "href": "/training-workshops"
      }
    ]
  },

  // {
  //   "id": 2,
  //   "category": "Industries",
  //   "links": [
  //     {
  //       "title": "Healthcare",
  //       "href": "/industries/healthcare"
  //     },
  //     {
  //       "title": "Finance",
  //       "href": "/industries/finance"
  //     },
  //     {
  //       "title": "Education",
  //       "href": "/industries/education"
  //     },
  //     {
  //       "title": "Retail",
  //       "href": "/industries/retail"
  //     }
  //   ]
  // },
  {
    "id": 3,
    "category": "Blog",
    "links": [
      {
        "title": "Latest Articles",
        "href": "/blog/latest-articles"
      },
      {
        "title": "Tutorials",
        "href": "/blog/tutorials"
      },
      {
        "title": "Case Studies",
        "href": "/blog/case-studies"
      },
      {
        "title": "Industry News",
        "href": "/blog/industry-news"
      }
    ]
  },
  {
    "id": 4,
    "category": "Get In Touch",
    "links": [
      {
        "address": "Lagos, Nigeria",
        "icon": FaLocationDot
      },
      {
        "address": "Houston Texas 77082",
        "icon": FaLocationDot
      },
      {
        "title": "contact@sanmaraconsulting.com",
        "href": "mailto:contact@sanmaraconsulting.com",
        "icon": FaEnvelope
      }
      
    ]
  }
  ],

  "socials": [
      {
        "href": "https://www.facebook.com/share/1YPhjxYpCd/",
        "icon": FaFacebookF
      },
      {
        "href": "https://twitter.com/sanmaraconsulting",
        "icon": FaXTwitter
      },
      {
        "href": "https://www.linkedin.com/company/sanmaraconsulting/", 
        "icon": FaLinkedinIn
      },
      {
      
        "href": "https://www.instagram.com/sanmara_consultation?igsh=YzljYTk1ODg3Zg==", 
        "icon": FaInstagram
      }
    ]
  }
