export const buildQuery = params => {
  return Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export const buildAvatarUrl = user => {
  const query = buildQuery({
    seed: user.name || 'none',
    skinColor: user.skinColor,
    top: user.top,
    hairColor: user.hairColor,
    hatColor: user.hatColor,

    eyes: user.eyes,
    eyebrows: user.eyebrows,
    mouth: user.mouth,

    accessories: user.accessories,
    accessoriesColor: user.accessoriesColor,
    accessoriesProbability: user.accessories ? 100 : 0,

    facialHair: user.facialHair,
    facialHairColor: user.facialHairColor,
    facialHairProbability: user.gender == 'male' ? 100 : 0,

    clothing: user.clothing,
    clothesColor: user.clothesColor,
    clothingGraphic: user.clothingGraphic,
  });

  console.log('====================================');
  console.log(query);
  console.log('====================================');

  return `https://api.dicebear.com/9.x/avataaars/png?${query}`;
};
