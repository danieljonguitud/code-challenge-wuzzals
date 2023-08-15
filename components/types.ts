export type Beer = {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: Volume;
    method: Method;
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
};

export type Volume = {
    value: number;
    unit: string;
};

export type Temp = {
    value: number;
    unit: string;
};

export type MashTemp = {
    temp: Temp;
    duration: number;
};

export type Method = {
    mash_temp: MashTemp[];
    fermentation: {
        temp: Temp;
    };
    twist: string;
};

export type Malt = {
    name: string;
    amount: Volume;
};

export type Hops = {
    name: string;
    amount: Volume;
    add: string;
    attribute: string;
};

export type Ingredients = {
    malt: Malt[];
    hops: Hops[];
    yeast: string;
};

