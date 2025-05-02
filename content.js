function getMetaContent(propertyName) {
    const meta = document.querySelector(`meta[property='${propertyName}'], meta[name='${propertyName}']`);
    return meta ? meta.getAttribute("content") : null;
  }
  
  let brand = getMetaContent("og:site_name") ||
              getMetaContent("og:title") ||
              document.title;
  
  if (brand) {
    brand = brand.toLowerCase();
    brand = brand
      .replace(/(united states|us|uk|canada|homepage|official (site|store)|website|outdoor clothing & gear|clothing|shoes|gear|accessories)/gi, "")
      .replace(/[:|\\-].*$/, "")
      .replace(/[^a-z0-9& ]/gi, "")
      .trim();
  
    const words = brand.split(/\s+/);
    const cleaned = words.length > 2 ? words.slice(0, 2).join(" ") : words[0];
  
    chrome.storage.local.set({ detectedBrand: cleaned });
  }
  