
const supertypes = [
    "Basic",
    "Host",
    "Legendary",
    "Snow",
    "World"
]

const types =[
    "Artifact",
    "Conspiracy",
    "Creature",
    "Enchantment",
    "Hero",
    "Instant",
    "Land",
    "Phenomenon",
    "Plane",
    "Planeswalker",
    "Scheme",
    "Sorcery",
    "Summon",
    "Tribal",
    "Vanguard"
]

const landTypes = [
    "Desert",
    "Forest",
    "Gate",
    "Island",
    "Lair",
    "Locus",
    "Mine",
    "Mountain",
    "Plains",
    "Power-Plant",
    "Swamp",
    "Tower",
    "Urza’s"
]

const enchantmentTypes = [
    "Aura",
    "Cartouche",
    "Curse",
    "Saga",
    "Shrine"
]

const artifactTypes =[
    "Clue",
    "Contraption",
    "Equipment",
    "Food",
    "Fortification",
    "Treasure",
    "Vehicle"
]

const rarity = [
    "Common",
	"Uncommon",
	"Rare",
	"Mythic"   
]

const instSorcTypes =[
    "Adventure",
    "Arcane",
    "Trap"
]

const loyaltyTypes = [
    "*",
    "X",
    "1d4+1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "20"
]

const manaCostOptions = [
    {
        "svg_uri": "https://img.scryfall.com/symbology/X.svg",
        "symbol": "{X}",
        "name": "X generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/Y.svg",
        "symbol": "{Y}",
        "name": "Y generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/Z.svg",
        "symbol": "{Z}",
        "name": "Z generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/0.svg",
        "symbol": "{0}",
        "name": "zero mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/HALF.svg",
        "symbol": "{½}",
        "name": "one-half generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/1.svg",
        "symbol": "{1}",
        "name": "one generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/2.svg",
        "symbol": "{2}",
        "name": "two generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/3.svg",
        "symbol": "{3}",
        "name": "three generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/4.svg",
        "symbol": "{4}",
        "name": "four generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/5.svg",
        "symbol": "{5}",
        "name": "five generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/6.svg",
        "symbol": "{6}",
        "name": "six generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/7.svg",
        "symbol": "{7}",
        "name": "seven generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/8.svg",
        "symbol": "{8}",
        "name": "eight generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/9.svg",
        "symbol": "{9}",
        "name": "nine generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/10.svg",
        "symbol": "{10}",
        "name": "ten generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/11.svg",
        "symbol": "{11}",
        "name": "eleven generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/12.svg",
        "symbol": "{12}",
        "name": "twelve generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/13.svg",
        "symbol": "{13}",
        "name": "thirteen generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/14.svg",
        "symbol": "{14}",
        "name": "fourteen generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/15.svg",
        "symbol": "{15}",
        "name": "fifteen generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/16.svg",
        "symbol": "{16}",
        "name": "sixteen generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/17.svg",
        "symbol": "{17}",
        "name": "seventeen generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/18.svg",
        "symbol": "{18}",
        "name": "eighteen generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/19.svg",
        "symbol": "{19}",
        "name": "nineteen generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/20.svg",
        "symbol": "{20}",
        "name": "twenty generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/100.svg",
        "symbol": "{100}",
        "name": "one hundred generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/1000000.svg",
        "symbol": "{1000000}",
        "name": "one million generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/INFINITY.svg",
        "symbol": "{∞}",
        "name": "infinite generic mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/WU.svg",
        "symbol": "{W/U}",
        "name": "one white or blue mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/WB.svg",
        "symbol": "{W/B}",
        "name": "one white or black mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/BR.svg",
        "symbol": "{B/R}",
        "name": "one black or red mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/BG.svg",
        "symbol": "{B/G}",
        "name": "one black or green mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/UB.svg",
        "symbol": "{U/B}",
        "name": "one blue or black mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/UR.svg",
        "symbol": "{U/R}",
        "name": "one blue or red mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/RG.svg",
        "symbol": "{R/G}",
        "name": "one red or green mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/RW.svg",
        "symbol": "{R/W}",
        "name": "one red or white mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/GW.svg",
        "symbol": "{G/W}",
        "name": "one green or white mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/GU.svg",
        "symbol": "{G/U}",
        "name": "one green or blue mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/2W.svg",
        "symbol": "{2/W}",
        "name": "two generic mana or one white mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/2U.svg",
        "symbol": "{2/U}",
        "name": "two generic mana or one blue mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/2B.svg",
        "symbol": "{2/B}",
        "name": "two generic mana or one black mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/2R.svg",
        "symbol": "{2/R}",
        "name": "two generic mana or one red mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/2G.svg",
        "symbol": "{2/G}",
        "name": "two generic mana or one green mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/WP.svg",
        "symbol": "{W/P}",
        "name": "one white mana or two life"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/UP.svg",
        "symbol": "{U/P}",
        "name": "one blue mana or two life"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/BP.svg",
        "symbol": "{B/P}",
        "name": "one black mana or two life"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/RP.svg",
        "symbol": "{R/P}",
        "name": "one red mana or two life"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/GP.svg",
        "symbol": "{G/P}",
        "name": "one green mana or two life"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/HW.svg",
        "symbol": "{HW}",
        "name": "one-half white mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/HR.svg",
        "symbol": "{HR}",
        "name": "one_half red mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/W.svg",
        "symbol": "{W}",
        "name": "one white mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/U.svg",
        "symbol": "{U}",
        "name": "one blue mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/B.svg",
        "symbol": "{B}",
        "name": "one black mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/R.svg",
        "symbol": "{R}",
        "name": "one red mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/G.svg",
        "symbol": "{G}",
        "name": "one green mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/C.svg",
        "symbol": "{C}",
        "name": "one colorless mana"
    },
    {
        "svg_uri": "https://img.scryfall.com/symbology/S.svg",
        "symbol": "{S}",
        "name": "one snow mana"
    },
]

export default {
    supertypes,
    types,
    landTypes,
    enchantmentTypes,
    artifactTypes,
    rarity,
    instSorcTypes,
    loyaltyTypes,
    manaCostOptions,
}