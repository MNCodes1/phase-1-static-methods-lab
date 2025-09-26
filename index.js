class Formatter {
  // Capitalizes the first letter of a string
  static capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Removes all non-alphanumeric characters except dash, single quote, and space
  static sanitize(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[^a-z0-9-'\s]/gi, '');
  }

  // Capitalizes all words except for exceptions, but always capitalizes the first word
  static titleize(str) {
    if (typeof str !== 'string') return '';

    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.toLowerCase().split(' ');

    const titleized = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      }
      return word;
    });

    return titleized.join(' ');
  }
}