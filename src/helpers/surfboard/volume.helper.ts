export const getSurfboardVolume = ({title, description}: {title: string; description: string}): number | null => {
  const titleAndDescription = `${title} ${description}`;

  const regexVolume = new RegExp('(([0-9]+(\\.|,)[0-9]+|[0-9]+)(l| l|v| v))', 'gi');
  const volumeFound = titleAndDescription.match(regexVolume) || [];
  const volume = volumeFound.map(volume => formatVolume(volume)).filter(volume => volume > 12 && volume < 100);

  const finalVolume = volume.length > 0 ? volume[0] : null;
  return finalVolume;
};

export const formatVolume = (volume: string): number => {
  return Number(volume.replace(/l|v/gi, '').replace(/\s/g, '').replace(',', '.'));
};
