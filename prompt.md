{
        name: "Barbarian",
        health: 25,
        startingCP: 2,
        flavor: "A relentless warrior fueled by rage and fury, smashing through enemies without hesitation.",
        abilities: [
            { name: "Punch", requirement: "2 of a kind", effect: "Deal 3 dmg" },
            { name: "Axe Swing", requirement: "3 of a kind", effect: "Deal 7 dmg" },
            { name: "Battle Cry", requirement: "Small straight", effect: "Gain +2 CP" },
            { name: "Fury", requirement: "4 of a kind", effect: "Deal 9 dmg" },
            { name: "Earthshaker", requirement: "Large straight or 5 of a kind", effect: "Deal 12 dmg + Stun" }
        ],
        defense: "Roll 2 dice: On a 6, Block 1 dmg per 6",
        cpEffects: [
            { name: "Feral Strike", cost: 1, effect: "+1 dmg next attack" },
            { name: "Brute Force", cost: 1, effect: "Reroll 1 die" },
            { name: "Adrenaline", cost: 2, effect: "Heal 2 HP" },
            { name: "Overpower", cost: 2, effect: "+2 dmg next attack" },
            { name: "Rampage", cost: 3, effect: "Double next ability’s effect" }
        ],
        passive: "Unstoppable: When Barbarian drops below 10 HP, gain +1 CP at the start of your turn"
    },
    {
        name: "Paladin",
        health: 28,
        startingCP: 2,
        flavor: "A holy knight, protector of the righteous, punishing foes with divine might.",
        abilities: [
            { name: "Smite", requirement: "2 of a kind", effect: "Deal 3 dmg" },
            { name: "Shield Bash", requirement: "3 of a kind", effect: "Deal 5 dmg + gain 1 Shield" },
            { name: "Holy Strike", requirement: "Small straight", effect: "Deal 6 dmg" },
            { name: "Divine Blessing", requirement: "4 of a kind", effect: "Heal 4 HP" },
            { name: "Judgment", requirement: "Large straight or 5 of a kind", effect: "Deal 9 dmg + remove 1 negative status" }
        ],
        defense: "Roll 2 dice: On 5–6, Block 1 dmg per high die",
        cpEffects: [
            { name: "Divine Smite", cost: 1, effect: "+1 dmg next attack" },
            { name: "Shield of Faith", cost: 1, effect: "Gain 1 Shield" },
            { name: "Blessed Recovery", cost: 2, effect: "Heal 3 HP" },
            { name: "Judgment Call", cost: 2, effect: "Ignore 1 enemy Shield" },
            { name: "Holy Wrath", cost: 3, effect: "Double next ability’s effect" }
        ],
        passive: "Righteous Shield: At the start of your turn, gain 1 temporary Shield"
    },
    {
        name: "Arcanist",
        health: 22,
        startingCP: 3,
        flavor: "A master of elemental magic, channeling raw power through calculated precision.",
        abilities: [
            { name: "Magic Missile", requirement: "2 of a kind", effect: "Deal 4 dmg" },
            { name: "Elemental Bolt", requirement: "3 of a kind", effect: "Deal 6 dmg + Burn" },
            { name: "Arcane Surge", requirement: "Small straight", effect: "Gain 2 CP" },
            { name: "Mana Shield", requirement: "4 of a kind", effect: "Block 5 dmg" },
            { name: "Meteor", requirement: "Large straight or 5 of a kind", effect: "Deal 10 dmg + Burn + Stun" }
        ],
        defense: "Roll 1 die: On a 6, Block 2 dmg",
        cpEffects: [
            { name: "Mana Surge", cost: 1, effect: "Reroll 1 die" },
            { name: "Arcane Precision", cost: 1, effect: "Set 1 die to chosen value" },
            { name: "Mystic Shield", cost: 2, effect: "Gain 2 Shields" },
            { name: "Elemental Mastery", cost: 2, effect: "+2 dmg next attack" },
            { name: "Meteoric Force", cost: 3, effect: "Double next ability or apply Burn" }
        ],
        passive: "Elemental Affinity: If you roll a straight on your first roll, gain +1 CP immediately"
    },
    {
        name: "Necromancer",
        health: 24,
        startingCP: 2,
        flavor: "A dark conjurer who manipulates life and death to drain the vitality of foes.",
        abilities: [
            { name: "Drain Life", requirement: "2 of a kind", effect: "Deal 3 dmg + heal 2 HP" },
            { name: "Raise Skeleton", requirement: "3 of a kind", effect: "Gain 1 temporary Shield" },
            { name: "Death Touch", requirement: "Small straight", effect: "Deal 5 dmg + Poison" },
            { name: "Soul Harvest", requirement: "4 of a kind", effect: "Deal 7 dmg + heal 3 HP" },
            { name: "Lich’s Wrath", requirement: "Large straight or 5 of a kind", effect: "Deal 12 dmg + Poison to all enemies" }
        ],
        defense: "Roll 2 dice: On 5–6, Block 1 dmg per high die",
        cpEffects: [
            { name: "Life Drain", cost: 1, effect: "Heal 2 HP" },
            { name: "Raise Minion", cost: 1, effect: "Gain 1 temporary Shield" },
            { name: "Curse of Weakness", cost: 2, effect: "Apply Stun or Burn" },
            { name: "Soul Harvest", cost: 2, effect: "+2 dmg next attack + heal 1 HP" },
            { name: "Lich’s Might", cost: 3, effect: "Double next attack + Poison" }
        ],
        passive: "Necrotic Aura: Whenever you deal damage with a 5 or 6, gain 1 temporary Shield"
    },
    {
        name: "Ranger",
        health: 23,
        startingCP: 2,
        flavor: "A deadly marksman, striking from afar with precision and cunning traps.",
        abilities: [
            { name: "Quick Shot", requirement: "2 of a kind", effect: "Deal 3 dmg" },
            { name: "Double Shot", requirement: "3 of a kind", effect: "Deal 5 dmg" },
            { name: "Trap", requirement: "Small straight", effect: "Apply Stun" },
            { name: "Rain of Arrows", requirement: "4 of a kind", effect: "Deal 7 dmg + Burn" },
            { name: "Deadeye", requirement: "Large straight or 5 of a kind", effect: "Deal 10 dmg + ignore 1 Shield" }
        ],
        defense: "Roll 1 die: On 5–6, Block 1 dmg",
        cpEffects: [
            { name: "Precision Shot", cost: 1, effect: "Set 1 die to chosen value" },
            { name: "Quick Reroll", cost: 1, effect: "Reroll 1 die" },
            { name: "Evasion", cost: 2, effect: "Gain 2 Shields or block 2 dmg" },
            { name: "Deadeye", cost: 2, effect: "Ignore 1 enemy Shield" },
            { name: "Rain of Arrows", cost: 3, effect: "Double next attack or apply Burn + Stun" }
        ],
        passive: "Hunter’s Instinct: At the start of your turn, choose one die: if it shows 4–6, add +1 dmg to your next attack"
    }

The dices have different effects according to the faces:
1-3: attack
4-5: buff
6: special
Rewrite all abilities so that for each character, there is 
- 1 attack move with 3 level of power (3 attack faces, 4 attack faces or 5 attack faces)
 some attack moves that requires a mix of attack faces and special faces
 some special moves that requires buff 