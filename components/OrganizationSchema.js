// components/OrganizationSchema.js

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://sanmaraconsulting.com/", 
    "logo": "https://sanmaraconsulting.com/high-res-logo.png",
    "name": "Sanmara Strategy and Analytics",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}