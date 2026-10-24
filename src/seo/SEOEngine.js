import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

/**
 * Strips HTML tags and collapses whitespace to create clean plain-text snippet
 */
function cleanTextSnippet(htmlOrText, maxLength = 155) {
  if (!htmlOrText) return "";
  const plainText = String(htmlOrText)
    .replace(/<[^>]*>?/gm, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).trim() + "...";
}

/**
 * Standardizes domain base URL
 */
const DOMAIN = "https://tas.com.np";

/**
 * SEOEngine Component
 * Renders Helmet metadata, canonical links, OpenGraph, Twitter, and Schema.org JSON-LD
 */
const SEOEngine = ({
  title,
  seoTitle,
  description,
  seoDescription,
  keywords,
  image,
  type = "website", // "website" | "product" | "category" | "article" | "service"
  breadcrumbs = [],
  productData = null,
  articleData = null,
  serviceData = null
}) => {
  const location = useLocation();

  // Canonical Path (locked to tas.com.np without trailing slashes or query parameters)
  const canonicalPath = location.pathname === "/" ? "" : location.pathname.replace(/\/+$/, "");
  const canonicalUrl = `${DOMAIN}${canonicalPath}`;

  // Smart Fallbacks
  const finalTitle = seoTitle || (title ? `${title} | Technical Associates Services - Nepal` : "Technical Associates Services - Engineering Solutions in Nepal");
  const fallbackDesc = description || "Technical Associates Services (TAS) provides engineering solutions for water & waste treatment, pumps, boilers, medical gas, and fire fighting in Nepal.";
  const finalDescription = seoDescription || cleanTextSnippet(fallbackDesc, 160);
  const finalImage = image ? (image.startsWith("http") ? image : `${DOMAIN}${image.startsWith("/") ? "" : "/"}${image}`) : `${DOMAIN}/images/about.jpg`;

  // Build JSON-LD structured data graph
  const jsonLdGraph = [];

  // 1. Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const validCrumbs = breadcrumbs.filter(c => c && c.name && c.name !== "Item" && c.name.trim() !== "");
    if (validCrumbs.length > 0) {
      jsonLdGraph.push({
        "@type": "BreadcrumbList",
        "itemListElement": validCrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.url.startsWith("http") ? crumb.url : `${DOMAIN}${crumb.url.startsWith("/") ? "" : "/"}${crumb.url}`
        }))
      });
    }
  }

  // 2. Product Schema (Only generated when a valid product name exists)
  const isActualProduct = type === "product" && productData && typeof productData === "object" && !Array.isArray(productData);
  const productName = isActualProduct ? (productData.title || title || "").trim() : (title || "").trim();

  if (type === "product" && productName && productName !== "Item") {
    const rawPrice = productData?.sale_price || productData?.price;
    const cleanPrice = rawPrice ? String(rawPrice).replace(/[^0-9.]/g, "") : null;
    const productDesc = cleanTextSnippet(
      productData?.description || productData?.summary || description || `${productName} engineered and supplied by Technical Associates Services in Nepal.`,
      300
    );

    jsonLdGraph.push({
      "@type": "Product",
      "@id": `${canonicalUrl}#product`,
      "name": productName,
      "description": productDesc,
      "image": finalImage,
      "sku": productData?.id ? `TAS-${productData.id}` : undefined,
      "brand": {
        "@type": "Brand",
        "name": productData?.brand || productData?.brand_name || "TAS"
      },
      "offers": {
        "@type": "Offer",
        "url": canonicalUrl,
        "priceCurrency": "NPR",
        "price": cleanPrice && !isNaN(cleanPrice) ? cleanPrice : "0",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": productData?.stock > 0 || productData?.stock === "In Stock" || !productData?.stock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "Technical Associates Services P. Ltd."
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "NP",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 15,
          "returnMethod": "https://schema.org/ReturnInStore",
          "returnFees": "https://schema.org/FreeReturn"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "NPR"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "NP"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 3,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 7,
              "unitCode": "DAY"
            }
          }
        }
      }
    });
  }

  // 3. CollectionPage Schema (for Categories - Only generated when title exists)
  if (type === "category" && (title || productData?.title)) {
    const categoryName = (title || productData?.title || "").trim();
    if (categoryName) {
      jsonLdGraph.push({
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        "url": canonicalUrl,
        "name": categoryName,
        "description": finalDescription,
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${DOMAIN}/#website`
        }
      });
    }
  }

  // 4. Blog / Article Schema
  if (type === "article" && articleData && (articleData.title || title)) {
    const articleTitle = (articleData.title || title || "").trim();
    if (articleTitle) {
      jsonLdGraph.push({
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "headline": articleTitle,
        "description": finalDescription,
        "image": finalImage,
        "author": {
          "@type": "Organization",
          "name": "Technical Associates Services"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Technical Associates Services",
          "logo": {
            "@type": "ImageObject",
            "url": `${DOMAIN}/favicon.png`
          }
        },
        "datePublished": articleData.created_at ? new Date(articleData.created_at).toISOString() : new Date().toISOString(),
        "dateModified": articleData.updated_at ? new Date(articleData.updated_at).toISOString() : new Date().toISOString()
      });
    }
  }

  // 5. Service Schema
  if (type === "service" && serviceData && (serviceData.title || title)) {
    const serviceName = (serviceData.title || title || "").trim();
    if (serviceName) {
      jsonLdGraph.push({
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": serviceName,
        "description": finalDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Technical Associates Services P. Ltd."
        },
        "areaServed": "Nepal",
        "url": canonicalUrl
      });
    }
  }

  const structuredData = jsonLdGraph.length > 0 ? {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph
  } : null;

  return (
    <Helmet>
      {/* Title */}
      <title>{finalTitle}</title>

      {/* Meta Description & Keywords */}
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="TAS - Technical Associates Services" />
      <meta property="og:image" content={finalImage} />
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD Schema Script */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOEngine;
