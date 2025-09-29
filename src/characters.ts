
export const statusEffects = {
    Burn: "At the start of your turn, take 2 damage.",
    Stun: "You can only reroll 2 dices.",
    Blind: "You deal 3 less damage.",
    Freeze: "During your next offensive roll phase, you may reroll only once instead of twice.",
    Poison: "At the start of your turn, lose 1 CP.",
    Shield: "Reduce incoming damage by 3.",
    Evasive: "When attacked, roll 1 die. On 5–6, avoid all damage.",
};

export type Character = {
    name: string;
    health: number;
    startingCP: number;
    flavor: string;
    abilities: {
        attack: { req: string, effect: string },
        defense: { req: string, effect: string },
        special1: { req: string, effect: string },
        special2: { req: string, effect: string },
        ultimate: { req: string, effect: string },
    };
    defense: string;
    // cpEffects: CP_Effect[];
    passive: string;
    color: string,
    maxCp: number;
};

export const cPEffects = {
    d3: { cost: 3, effect: "Dice manipualtion III: choose the value of 2 dices." },
    d2: { cost: 2, effect: "Dice manipualtion II: add or remove 1 on up to 2 dices." },
    d1: { cost: 1, effect: "Dice manipualtion I: add or remove 1 on up to 1 dices." },
    heal: { cost: 1, effect: "Heal: remove 1 negative effect." },
}

export const characters: Character[] = [
    {
        name: "Barbarian",
        health: 25,
        startingCP: 2,
        maxCp: 5,
        color: "#7f1d1d",
        flavor: "A relentless warrior fueled by rage and fury, smashing through enemies without hesitation.",
        abilities: {
            attack: { req: "5 in {1,3}", effect: "Savage Strike: Deal 6 dmg" },
            defense: { req: "5 in {4,6}", effect: "Battle Cry: Heal 3 HP + +1 dmg next attack" },
            special1: { req: "4 of a kind", effect: "Stunning Blow: Deal 5 dmg + Stun 1 turn" },
            special2: { req: "5 of a kind", effect: "Frenzy: Deal 8 dmg + Stun 1 turn + Heal 2 HP" },
            ultimate: { req: "All 6", effect: "Rampage: Deal 12 dmg + Stun all enemies" },
        },
        defense: "Roll 3 dice: On a 6, Block 1 dmg per 6",
        passive: "Unstoppable: When Barbarian drops below 10 HP, gain +1 CP at the start of your turn",
    },
    {
        name: "Paladin",
        health: 28,
        startingCP: 2,
        maxCp: 5,
        color: "#172554",
        flavor: "A holy knight, protector of the righteous, punishing foes with divine might.",
        abilities: {
            attack: { req: "5 in {1,2}", effect: "Divine Strike: Deal 5 dmg + Ignore 1 Shield" },
            defense: { req: "5 in {4,5}", effect: "Holy Light: Heal 4 HP + Remove 1 negative effect" },
            special1: { req: "4 of a kind", effect: "Smite: Deal 6 dmg + Stun" },
            special2: { req: "5 of a kind", effect: "Shield Bash: Deal 7 dmg + Stun + Shield" },
            ultimate: { req: "All 6", effect: "Divine Judgment: Deal 10 dmg + Stun + Heal 4 HP" },
        },
        defense: "Roll 2 dice: On 5–6, Block 1 dmg per high die",
        passive: "Righteous Shield: At the start of your turn, gain 1 temporary Shield",
    },
    {
        name: "Arcanist",
        health: 22,
        startingCP: 3,
        maxCp: 5,
        color: "#3b0764",
        flavor: "A master of elemental magic, channeling raw power through calculated precision.",
        abilities: {
            attack: { req: "5 in {2,3}", effect: "Arcane Bolt: Deal 5 dmg + Burn" },
            defense: { req: "5 in {4,5}", effect: "Mana Infusion: Heal 3 HP + Gain 1 CP" },
            special1: { req: "4 of a kind", effect: "Fireburst: Deal 6 dmg + Burn + Blind" },
            special2: { req: "5 of a kind", effect: "Frost Nova: Deal 7 dmg + Freeze + Shield" },
            ultimate: { req: "All 6", effect: "Elemental Cataclysm: Deal 10 dmg + Burn + Blind + Freeze" },
        },
        defense: "Roll 1 die: On a 6, Block 2 dmg",
        passive: "Elemental Affinity: If you roll a straight at any point, gain +1 CP immediately",
    },
    {
        name: "Necromancer",
        health: 24,
        startingCP: 2,
        maxCp: 5,
        color: "#09090b",
        flavor: "A dark conjurer who manipulates life and death to drain the vitality of foes.",
        abilities: {
            attack: { req: "5 in {1,2}", effect: "Life Drain: Deal 5 dmg + Heal 2 HP" },
            defense: { req: "5 in {4,5}", effect: "Dark Revival: Heal 4 HP + gain Shield" },
            special1: { req: "4 of a kind", effect: "Necrotic Touch: Deal 5 dmg + Poison" },
            special2: { req: "5 of a kind", effect: "Soul Siphon: Deal 7 dmg + Heal 2 HP" },
            ultimate: { req: "All 6", effect: "Lich’s Wrath: Deal 10 dmg + Poison + Stun" },
        },
        defense: "Roll 1 die: On 5–6, Block 1 dmg",
        passive: "Necrotic Aura: Whenever you take damage, roll a die, on 5-6, deal 2 dmg to attacker",
    },
    {
        name: "Ranger",
        health: 23,
        startingCP: 2,
        maxCp: 5,
        color: "#052e16",
        flavor: "A deadly marksman, striking from afar with precision and cunning traps.",
        abilities: {
            attack: { req: "5 in {2,3}", effect: "Precision Shot: Deal 5 dmg + ignore Shield" },
            defense: { req: "5 in {4,6}", effect: "Camouflage: Block 3 dmg + Evasive" },
            special1: { req: "4 of a kind", effect: "Trap: Deal 6 dmg + Burn + Blind" },
            special2: { req: "5 of a kind", effect: "Snare: Deal 7 dmg + Stun 1 turn" },
            ultimate: { req: "All 6", effect: "Rain of Arrows: Deal 10 dmg + Burn + Blind" },
        },
        defense: "Roll 1 die: On 5–6, Block 1 dmg",
        passive: "Hunter’s Instinct: At the start of your turn, roll a die, on 5-6, remove a negative effect",
    },
];
