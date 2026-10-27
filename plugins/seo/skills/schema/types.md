# Common types — what to include

## Organization
`@type`, `@id`, `name`, `url`, `logo` (ImageObject or URL, ≥112×112), `sameAs` (social profiles), `contactPoint` (`telephone`, `contactType`, `areaServed`, `availableLanguage`). Optional: `legalName`, `vatID`/`taxID`, `address`, `foundingDate`.

## WebSite
`@id`, `url`, `name`, `publisher` → `{"@id": "…#organization"}`, `inLanguage`. `potentialAction` `SearchAction` with `target` `https://site/search?q={search_term_string}` and `query-input: required name=search_term_string` only if search exists.

## LocalBusiness (use the most specific subtype)
`name`, `address` (`PostalAddress`: `streetAddress`, `addressLocality`, `addressRegion`, `postalCode`, `addressCountry` ISO-2), `telephone`, `url`, `image`, `geo` (`latitude`, `longitude`, 5 decimals), `openingHoursSpecification` (`dayOfWeek`, `opens`, `closes`), `priceRange`, `areaServed` (City/AdministrativeArea), `sameAs` (Google Business Profile, Facebook).

## Product + Offer
Product: `name`, `image` (array, absolute), `description`, `sku`, `gtin13`/`gtin` when known, `brand` (`Brand` with `name`), `offers`.
Offer: `price` (number), `priceCurrency`, `availability` (`InStock`, `OutOfStock`, `PreOrder`, `BackOrder`), `url`, `itemCondition` (`NewCondition`), `priceValidUntil` for sale prices, `shippingDetails` (`OfferShippingDetails`: `shippingRate`, `shippingDestination`, `deliveryTime`) and `hasMerchantReturnPolicy` (`MerchantReturnPolicy`: `applicableCountry`, `returnPolicyCategory`, `merchantReturnDays`, `returnFees`) for merchant listings.
Multiple variants: `ProductGroup` with `hasVariant` and `variesBy`.
`aggregateRating` (`ratingValue`, `reviewCount`) and `review` only from real, visible reviews.

## BreadcrumbList
`itemListElement`: `ListItem` with `position` (1…n), `name`, `item` (absolute URL; may be omitted on the last item).

## Article / BlogPosting / NewsArticle
`headline` (≤110 chars), `image` (16:9, 4:3, 1:1 recommended), `datePublished`, `dateModified`, `author` (`Person` with `name`, `url`; or `Organization`), `publisher`, `mainEntityOfPage`.

## FAQPage
`mainEntity`: `Question` (`name`) → `acceptedAnswer` (`Answer`, `text`). Questions and answers must be visible on the page.

## Event
`name`, `startDate` (with timezone), `endDate`, `eventAttendanceMode`, `eventStatus`, `location` (`Place` + `PostalAddress` or `VirtualLocation`), `offers`, `organizer`, `image`.

## Service
`serviceType`, `provider` (→ Organization/LocalBusiness), `areaServed`, `offers` (`price`/`priceSpecification`), `description`.

## SoftwareApplication / MobileApplication
`name`, `operatingSystem`, `applicationCategory` (`GameApplication`, `BusinessApplication`…), `offers` (price `0` for free), `aggregateRating` if real.
