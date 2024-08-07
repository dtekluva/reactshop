function getSubdomain() {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');

    if (parts.length > 2) {
      return parts[0]; // Subdomain
    }

    return null; // No subdomain
  }

  export default getSubdomain;
