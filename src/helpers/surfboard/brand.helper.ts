import {surfboardBrand} from '../../data/surfboardBrand.data';

export const getSurfboardBrand = ({title, description}: {title: string; description: string}): string | null => {
  let finalBrand = null;
  const titleAndDescription = `${title} ${description}`;

  for (const {query, name} of surfboardBrand) {
    const regexBrand = new RegExp(`(${query.join('|')})`, 'gi');
    const brandFound = titleAndDescription.match(regexBrand) || [];

    finalBrand = brandFound.length > 0 ? name : null;
    if (finalBrand) break;
  }

  return finalBrand;
};
