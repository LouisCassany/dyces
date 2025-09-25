type CP_Effect = {
    name: string;
    cost: number;
    effect: string;
};

type Ability = {
    name: string;
    levels: { requirement: string; effect: string }[];
};

export type Character = {
    name: string;
    health: number;
    startingCP: number;
    flavor: string;
    abilities: Ability[];
    defense: string;
    cpEffects: CP_Effect[];
    passive: string;
    color: string,
};

export const characters: Character[] = [
    {
        name: "Barbarian",
        health: 25,
        startingCP: 2,
        color: "#7f1d1d",
        flavor: "A relentless warrior fueled by rage and fury, smashing through enemies without hesitation.",
        abilities: [
            {
                name: "Savage Strikes",
                levels: [
                    { requirement: "3 attack faces", effect: "Deal 5 dmg" },
                    { requirement: "4 attack faces", effect: "Deal 8 dmg" },
                    { requirement: "5 attack faces", effect: "Deal 12 dmg" },
                ],
            },
            {
                name: "Raging Specials",
                levels: [
                    { requirement: "3 attack + 1 special", effect: "Deal 10 dmg" },
                    { requirement: "4 attack + 1 special", effect: "Deal 14 dmg + Stun" },
                ],
            },
            {
                name: "Battle Spirit",
                levels: [
                    { requirement: "2 buff faces", effect: "Gain 2 CP" },
                    { requirement: "3 buff faces", effect: "Heal 3 HP" },
                    { requirement: "5 buff faces", effect: "Heal 6 HP and +2 dmg next attack" },
                ],
            },
        ],
        defense: "Roll 2 dice: On a 6, Block 1 dmg per 6",
        cpEffects: [
            { name: "Feral Strike", cost: 1, effect: "+1 dmg next attack" },
            { name: "Brute Force", cost: 1, effect: "Reroll 1 die" },
            { name: "Adrenaline", cost: 2, effect: "Heal 2 HP" },
            { name: "Overpower", cost: 2, effect: "+2 dmg next attack" },
            { name: "Rampage", cost: 3, effect: "Double next ability’s effect" },
        ],
        passive: "Unstoppable: When Barbarian drops below 10 HP, gain +1 CP at the start of your turn",
    },
    {
        name: "Paladin",
        health: 28,
        startingCP: 2,
        color: "#172554",
        flavor: "A holy knight, protector of the righteous, punishing foes with divine might.",
        abilities: [
            {
                name: "Divine Strikes",
                levels: [
                    { requirement: "3 attack faces", effect: "Deal 4 dmg" },
                    { requirement: "4 attack faces", effect: "Deal 7 dmg" },
                    { requirement: "5 attack faces", effect: "Deal 11 dmg + Ignore 1 Shield" },
                ],
            },
            {
                name: "Holy Specials",
                levels: [
                    { requirement: "3 attack + 1 special", effect: "Deal 6 dmg + gain 1 Shield" },
                    { requirement: "4 attack + 1 special", effect: "Deal 9 dmg + Stun" },
                ],
            },
            {
                name: "Blessings",
                levels: [
                    { requirement: "2 buff faces", effect: "Heal 2 HP" },
                    { requirement: "3 buff faces", effect: "Heal 3 HP + gain 1 Shield" },
                    { requirement: "5 buff faces", effect: "Heal 6 HP + remove 1 negative effect" },
                ],
            },
        ],
        defense: "Roll 2 dice: On 5–6, Block 1 dmg per high die",
        cpEffects: [
            { name: "Divine Smite", cost: 1, effect: "+1 dmg next attack" },
            { name: "Shield of Faith", cost: 1, effect: "Gain 1 Shield" },
            { name: "Blessed Recovery", cost: 2, effect: "Heal 3 HP" },
            { name: "Judgment Call", cost: 2, effect: "Ignore 1 enemy Shield" },
            { name: "Holy Wrath", cost: 3, effect: "Double next ability’s effect" },
        ],
        passive: "Righteous Shield: At the start of your turn, gain 1 temporary Shield",
    },
    {
        name: "Arcanist",
        health: 22,
        startingCP: 3,
        color: "#3b0764",
        flavor: "A master of elemental magic, channeling raw power through calculated precision.",
        abilities: [
            {
                name: "Arcane Strikes",
                levels: [
                    { requirement: "3 attack faces", effect: "Deal 4 dmg" },
                    { requirement: "4 attack faces", effect: "Deal 7 dmg" },
                    { requirement: "5 attack faces", effect: "Deal 11 dmg + Burn" },
                ],
            },
            {
                name: "Empowered Specials",
                levels: [
                    { requirement: "3 attack + 1 special", effect: "Deal 6 dmg + Burn" },
                    { requirement: "4 attack + 1 special", effect: "Deal 9 dmg + Stun" },
                ],
            },
            {
                name: "Arcane Buffs",
                levels: [
                    { requirement: "2 buff faces", effect: "Gain 2 CP" },
                    { requirement: "3 buff faces", effect: "Block 3 dmg" },
                    { requirement: "5 buff faces", effect: "Heal 6 HP + Gain 2 CP" },
                ],
            },
        ],
        defense: "Roll 1 die: On a 6, Block 2 dmg",
        cpEffects: [
            { name: "Mana Surge", cost: 1, effect: "Reroll 1 die" },
            { name: "Arcane Precision", cost: 1, effect: "Set 1 die to chosen value" },
            { name: "Mystic Shield", cost: 2, effect: "Gain 2 Shields" },
            { name: "Elemental Mastery", cost: 2, effect: "+2 dmg next attack" },
            { name: "Meteoric Force", cost: 3, effect: "Double next ability or apply Burn" },
        ],
        passive: "Elemental Affinity: If you roll a straight on your first roll, gain +1 CP immediately",
    },
    {
        name: "Necromancer",
        health: 24,
        startingCP: 2,
        color: "#09090b",
        flavor: "A dark conjurer who manipulates life and death to drain the vitality of foes.",
        abilities: [
            {
                name: "Dark Strikes",
                levels: [
                    { requirement: "3 attack faces", effect: "Deal 4 dmg + heal 2 HP" },
                    { requirement: "4 attack faces", effect: "Deal 7 dmg + Poison" },
                    { requirement: "5 attack faces", effect: "Deal 12 dmg + Poison" },
                ],
            },
            {
                name: "Necrotic Specials",
                levels: [
                    { requirement: "3 attack + 1 special", effect: "Gain 1 Shield + deal 3 dmg" },
                    { requirement: "4 attack + 1 special", effect: "Deal 9 dmg + heal 3 HP" },
                ],
            },
            {
                name: "Dark Buffs",
                levels: [
                    { requirement: "2 buff faces", effect: "Heal 2 HP" },
                    { requirement: "3 buff faces", effect: "Heal 3 HP + gain 1 Shield" },
                    { requirement: "5 buff faces", effect: "Heal 6 HP + revive 2 Shields" },
                ],
            },
        ],
        defense: "Roll 2 dice: On 5–6, Block 1 dmg per high die",
        cpEffects: [
            { name: "Life Drain", cost: 1, effect: "Heal 2 HP" },
            { name: "Raise Minion", cost: 1, effect: "Gain 1 temporary Shield" },
            { name: "Curse of Weakness", cost: 2, effect: "Apply Stun or Burn" },
            { name: "Soul Harvest", cost: 2, effect: "+2 dmg next attack + heal 1 HP" },
            { name: "Lich’s Might", cost: 3, effect: "Double next attack + Poison" },
        ],
        passive: "Necrotic Aura: Whenever you deal damage with a 5 or 6, gain 1 temporary Shield",
    },
    {
        name: "Ranger",
        health: 23,
        startingCP: 2,
        color: "#052e16",
        flavor: "A deadly marksman, striking from afar with precision and cunning traps.",
        abilities: [
            {
                name: "Precision Strikes",
                levels: [
                    { requirement: "3 attack faces", effect: "Deal 4 dmg" },
                    { requirement: "4 attack faces", effect: "Deal 7 dmg" },
                    { requirement: "5 attack faces", effect: "Deal 11 dmg + Ignore 1 Shield" },
                ],
            },
            {
                name: "Hunter Specials",
                levels: [
                    { requirement: "3 attack + 1 special", effect: "Deal 5 dmg + Stun" },
                    { requirement: "4 attack + 1 special", effect: "Deal 9 dmg + Burn" },
                ],
            },
            {
                name: "Survival Buffs",
                levels: [
                    { requirement: "2 buff faces", effect: "Block 2 dmg" },
                    { requirement: "3 buff faces", effect: "+2 dmg next attack" },
                    { requirement: "5 buff faces", effect: "Heal 6 HP + Stun enemy" },
                ],
            },
        ],
        defense: "Roll 1 die: On 5–6, Block 1 dmg",
        cpEffects: [
            { name: "Precision Shot", cost: 1, effect: "Set 1 die to chosen value" },
            { name: "Quick Reroll", cost: 1, effect: "Reroll 1 die" },
            { name: "Evasion", cost: 2, effect: "Gain 2 Shields or block 2 dmg" },
            { name: "Deadeye", cost: 2, effect: "Ignore 1 enemy Shield" },
            { name: "Rain of Arrows", cost: 3, effect: "Double next attack or apply Burn + Stun" },
        ],
        passive: "Hunter’s Instinct: At the start of your turn, choose one die: if it shows 4–6, add +1 dmg to your next attack",
    },
];