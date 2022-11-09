import {surboardSizeData} from '../data/surfboardSize.data';

const sizeKeywords = ["'", '’', ',', '”', '"', '〝', '`', '‛', '‘', '〞', '·', '.', 'ft', 'feet', 'foot'];

export const getSurfboardSize = ({title, description}: {title: string; description: string}): string | null => {
  const regexSize = new RegExp(
    `([0-9]+(${sizeKeywords.join('|')}|${sizeKeywords.join(' |')}|${sizeKeywords.join('| ')})([0-9]+| [0-9]+| ))`,
    'gm'
  );

  const titleAndDescription = `${title} ${description}`;
  const sizeFound = titleAndDescription.match(regexSize) || [];

  const size = sizeFound.map(size => formatSize(size)).filter(size => surboardSizeData.includes(size));
  const finalSize = size.length > 0 ? size[0] : null;

  return finalSize;
};

export const formatSize = (currentSize: string): string => {
  const regexSize = new RegExp(`/(${sizeKeywords.join('|')})/g`);

  return currentSize.replace(/\s/g, '').replace(regexSize, "'").replace(/'$/g, "'0");
};
