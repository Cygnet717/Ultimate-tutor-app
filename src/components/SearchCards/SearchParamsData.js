const types = [
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

const supertypes = [
    "Basic",
    "Host",
    "Legendary",
    "Ongoing",
    "Snow",
    "World"
]

const subtypes = [
    "Adventure",
        "Advisor",
        "Aetherborn",
        "Ajani",
        "Alara",
        "Alicorn",
        "Ally",
        "Aminatou",
        "and/or",
        "Angel",
        "Angrath",
        "Antelope",
        "Ape",
        "Arcane",
        "Archer",
        "Archon",
        "Arkhos",
        "Arlinn",
        "Artificer",
        "Ashiok",
        "Assassin",
        "Assembly-Worker",
        "Atog",
        "Aura",
        "Aurochs",
        "Autobot",
        "Avatar",
        "Azgol",
        "Azra",
        "Baddest,",
        "Badger",
        "Barbarian",
        "Basilisk",
        "Bat",
        "Bear",
        "Beast",
        "Beaver",
        "Beeble",
        "Belenon",
        "Berserker",
        "Biggest,",
        "Bird",
        "Boar",
        "Bolas",
        "Bolas’s Meditation Realm",
        "Brainiac",
        "Bringer",
        "Brushwagg",
        "Bureaucrat",
        "Camel",
        "Carrier",
        "Cartouche",
        "Cat",
        "Centaur",
        "Cephalid",
        "Chandra",
        "Chicken",
        "Child",
        "Chimera",
        "Clamfolk",
        "Cleric",
        "Cockatrice",
        "Construct",
        "Contraption",
        "Cow",
        "Crab",
        "Crocodile",
        "Curse",
        "Cyborg",
        "Cyclops",
        "Dack",
        "Daretti",
        "Dauthi",
        "Davriel",
        "Deer",
        "Demon",
        "Desert",
        "Designer",
        "Devil",
        "Dinosaur",
        "Djinn",
        "Dominaria",
        "Domri",
        "Donkey",
        "Dovin",
        "Dragon",
        "Drake",
        "Dreadnought",
        "Drone",
        "Druid",
        "Dryad",
        "Dungeon",
        "Dwarf",
        "Efreet",
        "Egg",
        "Elder",
        "Eldrazi",
        "Elemental",
        "Elemental?",
        "Elephant",
        "Elf",
        "Elk",
        "Elspeth",
        "Elves",
        "Equilor",
        "Equipment",
        "Ergamon",
        "Estrid",
        "Etiquette",
        "Eye",
        "Fabacin",
        "Faerie",
        "Ferret",
        "Fish",
        "Flagbearer",
        "Food",
        "Forest",
        "Fortification",
        "Fox",
        "Freyalise",
        "Frog",
        "Fungus",
        "Gamer",
        "Gargoyle",
        "Garruk",
        "Gate",
        "Giant",
        "Gideon",
        "Gnome",
        "Goat",
        "Goblin",
        "God",
        "Golem",
        "Gorgon",
        "Gremlin",
        "Griffin",
        "Gus",
        "Hag",
        "Harpy",
        "Hatificer",
        "Head",
        "Hellion",
        "Hero",
        "Hippo",
        "Hippogriff",
        "Homarid",
        "Homunculus",
        "Horror",
        "Horse",
        "Hound",
        "Huatli",
        "Human",
        "Hydra",
        "Hyena",
        "Igpay",
        "Illusion",
        "Imp",
        "Incarnation",
        "Innistrad",
        "Insect",
        "Inzerva",
        "Iquatana",
        "Ir",
        "Island",
        "Jace",
        "Jackal",
        "Jaya",
        "Jellyfish",
        "Juggernaut",
        "Kaldheim",
        "Kamigawa",
        "Kangaroo",
        "Karn",
        "Karsus",
        "Kasmina",
        "Kavu",
        "Kaya",
        "Kephalai",
        "Killbot",
        "Kinshala",
        "Kiora",
        "Kirin",
        "Kithkin",
        "Knight",
        "Kobold",
        "Kolbahan",
        "Kor",
        "Koth",
        "Kraken",
        "Kyneth",
        "Lady",
        "Lair",
        "Lamia",
        "Lammasu",
        "Leech",
        "Legend",
        "Leviathan",
        "Lhurgoyf",
        "Licid",
        "Liliana",
        "Lizard",
        "Lobster",
        "Locus",
        "Lorwyn",
        "Luvion",
        "Manticore",
        "Master",
        "Masticore",
        "Mercadia",
        "Mercenary",
        "Merfolk",
        "Metathran",
        "Mime",
        "Mine",
        "Minion",
        "Minotaur",
        "Mirrodin",
        "Moag",
        "Mole",
        "Monger",
        "Mongoose",
        "Mongseng",
        "Monk",
        "Monkey",
        "Moonfolk",
        "Mountain",
        "Mummy",
        "Muraganda",
        "Mutant",
        "Myr",
        "Mystic",
        "Naga",
        "Nahiri",
        "Narset",
        "Nastiest,",
        "Nautilus",
        "Nephilim",
        "New Phyrexia",
        "Nightmare",
        "Nightstalker",
        "Ninja",
        "Nissa",
        "Nixilis",
        "Noble",
        "Noggle",
        "Nomad",
        "Nymph",
        "Octopus",
        "Ogre",
        "Oko",
        "Ooze",
        "Orc",
        "Orgg",
        "Ouphe",
        "Ox",
        "Oyster",
        "Pangolin",
        "Paratrooper",
        "Peasant",
        "Pegasus",
        "Penguin",
        "Pest",
        "Phelddagrif",
        "Phoenix",
        "Phyrexia",
        "Pilot",
        "Pirate",
        "Plains",
        "Plant",
        "Power-Plant",
        "Praetor",
        "Processor",
        "Proper",
        "Pyrulea",
        "Rabbit",
        "Rabiah",
        "Raccoon",
        "Ral",
        "Rat",
        "Rath",
        "Ravnica",
        "Rebel",
        "Reflection",
        "Regatha",
        "Rhino",
        "Rigger",
        "Rogue",
        "Rowan",
        "Sable",
        "Saga",
        "Saheeli",
        "Salamander",
        "Samurai",
        "Samut",
        "Sarkhan",
        "Satyr",
        "Scarecrow",
        "Scientist",
        "Scorpion",
        "Scout",
        "Segovia",
        "Serpent",
        "Serra",
        "Serra’s Realm",
        "Shade",
        "Shadowmoor",
        "Shaman",
        "Shandalar",
        "Shapeshifter",
        "Sheep",
        "Ship",
        "Shrine",
        "Siren",
        "Skeleton",
        "Slith",
        "Sliver",
        "Slug",
        "Snake",
        "Soldier",
        "Soltari",
        "Sorin",
        "Spawn",
        "Specter",
        "Spellshaper",
        "Sphinx",
        "Spider",
        "Spike",
        "Spirit",
        "Sponge",
        "Spy",
        "Squid",
        "Squirrel",
        "Starfish",
        "Surrakar",
        "Swamp",
        "Tamiyo",
        "Teferi",
        "Teyo",
        "Tezzeret",
        "Thalakos",
        "The",
        "Thopter",
        "Thrull",
        "Tibalt",
        "Tower",
        "Townsfolk",
        "Trap",
        "Treefolk",
        "Trilobite",
        "Troll",
        "Turtle",
        "Ugin",
        "Ulgrotha",
        "Unicorn",
        "Urza",
        "Urza’s",
        "Valla",
        "Vampire",
        "Vampyre",
        "Vedalken",
        "Vehicle",
        "Venser",
        "Viashino",
        "Villain",
        "Vivien",
        "Volver",
        "Vraska",
        "Vryn",
        "Waiter",
        "Wall",
        "Warlock",
        "Warrior",
        "Weird",
        "Werewolf",
        "Whale",
        "Wildfire",
        "Will",
        "Windgrace",
        "Wizard",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Worm",
        "Wraith",
        "Wrenn",
        "Wrestler",
        "Wurm",
        "Xenagos",
        "Xerex",
        "Yanggu",
        "Yanling",
        "Yeti",
        "Zendikar",
        "Zombie",
        "Zubera"
]

const rarity = [
    "common",
	"uncommon",
	"rare",
	"mythic"   
]

let sets = [
    {
        "code": "10E",
        "name": "Tenth Edition",
    },
    {
        "code": "2ED",
        "name": "Unlimited Edition",
    },
    {
        "code": "3ED",
        "name": "Revised Edition",
    },
    {
        "code": "4BB",
        "name": "Fourth Edition Foreign Black Border",
    },
    {
        "code": "5DN",
        "name": "Fifth Dawn",
    },
    {
        "code": "5ED",
        "name": "Fifth Edition",
    },
    {
        "code": "6ED",
        "name": "Classic Sixth Edition",
    },
    {
        "code": "7ED",
        "name": "Seventh Edition",
    },
    {
        "code": "8ED",
        "name": "Eighth Edition",
        "type": "core",
    },
    {
        "code": "9ED",
        "name": "Ninth Edition",
    },
    {
        "code": "A25",
        "name": "Masters 25",
    },
    {
        "code": "AER",
        "name": "Aether Revolt",
    },
    {
        "code": "AKH",
        "name": "Amonkhet",
    },
    {
        "code": "ALA",
        "name": "Shards of Alara",
    },
    {
        "code": "ALL",
        "name": "Alliances",
    },
    {
        "code": "APC",
        "name": "Apocalypse",
    },
    {
        "code": "ARB",
        "name": "Alara Reborn",
    },
    {
        "code": "ARN",
        "name": "Arabian Nights",
    },
    {
        "code": "ATQ",
        "name": "Antiquities",
    },
    {
        "code": "AVR",
        "name": "Avacyn Restored",
    },
    {
        "code": "BFZ",
        "name": "Battle for Zendikar",
    },
    {
        "code": "BNG",
        "name": "Born of the Gods",
    },
    {
        "code": "BOK",
        "name": "Betrayers of Kamigawa",
    },
    {
        "code": "CHK",
        "name": "Champions of Kamigawa",
    },
    {
        "code": "CHR",
        "name": "Chronicles",
    },
    {
        "code": "CON",
        "name": "Conflux",
    },
    {
        "code": "CSP",
        "name": "Coldsnap",
    },
    {
        "code": "DGM",
        "name": "Dragon's Maze",
    },
    {
        "code": "DIS",
        "name": "Dissension",
    },
    {
        "code": "DKA",
        "name": "Dark Ascension",
    }, 
    {
        "code": "DOM",
        "name": "Dominaria",
    },
    {
        "code": "DRK",
        "name": "The Dark",
    },
    {
        "code": "DST",
        "name": "Darksteel",
    },
    {
        "code": "DTK",
        "name": "Dragons of Tarkir",
    },
    {
        "code": "ELD",
        "name": "Throne of Eldraine",
    },
    {
        "code": "EMN",
        "name": "Eldritch Moon",
    },
    {
        "code": "EVE",
        "name": "Eventide",
    },
    {
        "code": "EXO",
        "name": "Exodus",
    },
    {
        "code": "FBB",
        "name": "Foreign Black Border",
    },
    {
        "code": "FEM",
        "name": "Fallen Empires",
    },
    {
        "code": "FRF",
        "name": "Fate Reforged",
    },
    {
        "code": "FUT",
        "name": "Future Sight",
    },
    {
        "code": "GPT",
        "name": "Guildpact",
    },
    {
        "code": "GRN",
        "name": "Guilds of Ravnica",
    },
    {
        "code": "GTC",
        "name": "Gatecrash",
    },
    {
        "code": "H17",
        "name": "HasCon 2017",
    },
    {
        "code": "HHO",
        "name": "Happy Holidays",
    },
    {
        "code": "HML",
        "name": "Homelands",
    },
    {
        "code": "HOP",
        "name": "Planechase",
    },
    {
        "code": "HOU",
        "name": "Hour of Devastation",
    },
    {
        "code": "HTR",
        "name": "2016 Heroes of the Realm",
    },
    {
        "code": "ICE",
        "name": "Ice Age",
    },
    {
        "code": "INV",
        "name": "Invasion",
    },
    {
        "code": "ISD",
        "name": "Innistrad",
    },
    {
        "code": "JOU",
        "name": "Journey into Nyx",
    },
    {
        "code": "JUD",
        "name": "Judgment",
    },
    {
        "code": "KLD",
        "name": "Kaladesh",
    },
    {
        "code": "KTK",
        "name": "Khans of Tarkir",
    },
    {
        "code": "LEA",
        "name": "Limited Edition Alpha",
    },
    {
        "code": "LEB",
        "name": "Limited Edition Beta",
    },
    {
        "code": "LEG",
        "name": "Legends",
    },
    {
        "code": "LGN",
        "name": "Legions",
    },
    {
        "code": "LRW",
        "name": "Lorwyn",
    },
    {
        "code": "M10",
        "name": "Magic 2010",
    },
    {
        "code": "M11",
        "name": "Magic 2011",
    },
    {
        "code": "M12",
        "name": "Magic 2012",
    },
    {
        "code": "M13",
        "name": "Magic 2013",
    },
    {
        "code": "M14",
        "name": "Magic 2014",
    },
    {
        "code": "M15",
        "name": "Magic 2015",
    },
    {
        "code": "M19",
        "name": "Core Set 2019",
    },
    {
        "code": "M20",
        "name": "Core Set 2020",
    },
    {
        "code": "MBS",
        "name": "Mirrodin Besieged",
    },
    {
        "code": "MIR",
        "name": "Mirage",
    },
    {
        "code": "MMQ",
        "name": "Mercadian Masques",
    },
    {
        "code": "MOR",
        "name": "Morningtide",
    },
    {
        "code": "MRD",
        "name": "Mirrodin",
    },
    {
        "code": "NEM",
        "name": "Nemesis",
    },
    {
        "code": "NPH",
        "name": "New Phyrexia",
    },
    {
        "code": "ODY",
        "name": "Odyssey", 
    },
    {
        "code": "OGW",
        "name": "Oath of the Gatewatch",
    },
    {
        "code": "ONS",
        "name": "Onslaught",
    },
    {
        "code": "ORI",
        "name": "Magic Origins",
    },
    {
        "code": "PCY",
        "name": "Prophecy",
    },
    {
        "code": "PLC",
        "name": "Planar Chaos",
    },
    {
        "code": "PLS",
        "name": "Planeshift",
    },
    {
        "code": "PTG",
        "name": "Ponies: The Galloping",
    },
    {
        "code": "PVAN",
        "name": "Vanguard Series",
    },
    {
        "code": "RAV",
        "name": "Ravnica: City of Guilds",
    },
    {
        "code": "RIX",
        "name": "Rivals of Ixalan",
    },
    {
        "code": "RNA",
        "name": "Ravnica Allegiance",
    },
    {
        "code": "ROE",
        "name": "Rise of the Eldrazi",
    },
    {
        "code": "RTR",
        "name": "Return to Ravnica",
    },
    {
        "code": "SCG",
        "name": "Scourge",
    },
    {
        "code": "SHM",
        "name": "Shadowmoor",
    },
    {
        "code": "SOI",
        "name": "Shadows over Innistrad",
    },
    {
        "code": "SOK",
        "name": "Saviors of Kamigawa",
    },
    {
        "code": "SOM",
        "name": "Scars of Mirrodin",
    },
    {
        "code": "SS1",
        "name": "Signature Spellbook: Jace",
    },
    {
        "code": "SS2",
        "name": "Signature Spellbook: Gideon",
    },
    {
        "code": "STH",
        "name": "Stronghold",
    },
    {
        "code": "SUM",
        "name": "Summer Magic / Edgar",
    },
    {
        "code": "TD2",
        "name": "Duel Decks: Mirrodin Pure vs. New Phyrexia",
    },
    {
        "code": "THS",
        "name": "Theros",
    },
    {
        "code": "TMP",
        "name": "Tempest",
    },
    {
        "code": "TOR",
        "name": "Torment",
    },
    {
        "code": "TSB",
        "name": "Time Spiral Timeshifted",
    },
    {
        "code": "TSP",
        "name": "Time Spiral",
    },
    {
        "code": "UDS",
        "name": "Urza's Destiny",
    },
    {
        "code": "UGL",
        "name": "Unglued",
    },
    {
        "code": "ULG",
        "name": "Urza's Legacy",
    },
    {
        "code": "UMA",
        "name": "Ultimate Masters",
    },
    {
        "code": "UNH",
        "name": "Unhinged",
    },
    {
        "code": "USG",
        "name": "Urza's Saga",
    },
    {
        "code": "UST",
        "name": "Unstable",
    },
    {
        "code": "VIS",
        "name": "Visions",
    },
    {
        "code": "WAR",
        "name": "War of the Spark",
    },
    {
        "code": "WTH",
        "name": "Weatherlight",

    },
    {
        "code": "WWK",
        "name": "Worldwake",
    },
    {
        "code": "XLN",
        "name": "Ixalan",
    },
    {
        "code": "ZEN",
        "name": "Zendikar",
    }
]

let manaCostOptions = [
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
    types,
    supertypes,
    subtypes,
    rarity,
    sets,
}