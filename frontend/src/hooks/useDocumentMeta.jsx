import { useEffect } from "react";

export const useDocumentMeta = ({ title, description, keywords, ogTitle, ogDescription, ogImage, canonical }) => {
    useEffect(() => {
        // Update title
        if (title) {
            document.title = title;
        }

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            if (!content) return;

            const attribute = isProperty ? "property" : "name";
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (element) {
                element.setAttribute("content", content);
            } else {
                element = document.createElement("meta");
                element.setAttribute(attribute, name);
                element.setAttribute("content", content);
                document.head.appendChild(element);
            }
        };

        // Update description
        updateMetaTag("description", description);

        // Update keywords
        updateMetaTag("keywords", keywords);

        // Update Open Graph tags
        updateMetaTag("og:title", ogTitle || title, true);
        updateMetaTag("og:description", ogDescription || description, true);
        updateMetaTag("og:image", ogImage, true);
        updateMetaTag("og:url", window.location.href, true);

        // Update Twitter tags
        updateMetaTag("twitter:title", ogTitle || title);
        updateMetaTag("twitter:description", ogDescription || description);
        updateMetaTag("twitter:image", ogImage);
        updateMetaTag("twitter:card", "summary_large_image");

        // Update canonical link
        if (canonical) {
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.setAttribute("href", canonical);
            } else {
                canonicalLink = document.createElement("link");
                canonicalLink.setAttribute("rel", "canonical");
                canonicalLink.setAttribute("href", canonical);
                document.head.appendChild(canonicalLink);
            }
        }

        // Cleanup function (optional)
        return () => {};
    }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);
};
