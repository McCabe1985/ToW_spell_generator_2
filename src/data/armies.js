const armies = [
  {
    army: "Orc & Goblin Tribes",
    wizardTypes: [
      {
        name: "Orc Shaman",
        loreAccess: ["Battle Magic", "Elementalism", "Waaagh! Magic"],
        armySpells: ["Lore of Gork"],
      },
      {
        name: "Goblin Shaman",
        loreAccess: ["Elementalism", "Waaagh! Magic"],
        armySpells: ["Lore of Mork"],
      },
      {
        name: "Night Goblin Shaman",
        loreAccess: ["Illusion", "Waaagh! Magic"],
        armySpells: ["Lore of Mork"],
      },
    ],
    armySpells: [
      {
        name: "Lore of Gork",
        spellList: [
          {
            name: "Brain Bursta",
            type: "Assailment",
            castingValue: "10+",
            range: "Combat",
            remainsInPlay: "no",
            effect:
              "A single enemy unit the caster is engaged in combat with suffers a single Strength 6 hit with the Multiple Wounds (D3) special rule and with no armour saves of regeneration saves permitted (Ward Saves can be attempted as normal).",
          },
          {
            name: "Gaze of Gork",
            type: "Magic Missile",
            castingValue: "9+",
            range: '5D6"',
            remainsInPlay: "no",
            effect:
              "Draw a straight line, 5D6\" in length, from the caster's base edge. Any model (friend or foe) whose base falls under this line suffers a strength 5 hit, with an AP of -3",
          },
        ],
      },
      {
        name: "Lore of Mork",
        spellList: [
          {
            name: "Mork's Curse",
            type: "Hex",
            castingValue: "8+",
            range: '18"',
            remainsInPlay: "yes",
            effect:
              "Whilst this spell is in play, the target enemy unit must re-roll any Armour Save roll of a natural 6.",
          },
          {
            name: "Itchy Nuisance",
            type: "Hex",
            castingValue: "9+",
            range: '15"',
            remainsInPlay: "no",
            effect:
              "Until the start of your next Start of Turn sub-phase, the target enemy unit suffers a -D3 modifier to its Toughness and Initiative characteristics (to a minimum of 1).",
          },
        ],
      },
    ],
  },
  {
    army: "Warriors of Chaos",
    wizardTypes: [
      {
        name: "Sorcerer of Undivided",
        loreAccess: ["Battle Magic", "Daemonology", "Dark Magic"],
        armySpells: ["Lore of Chaos - Undivided"],
      },
      {
        name: "Sorcerer of Tzeentch",
        loreAccess: ["Battle Magic", "Daemonology", "Dark Magic"],
        armySpells: ["Lore of Chaos - Tzeentch"],
      },
      {
        name: "Sorcerer of Nurgle",
        loreAccess: ["Battle Magic", "Daemonology", "Dark Magic"],
        armySpells: ["Lore of Chaos - Nurgle"],
      },
      {
        name: "Sorcerer of Slaanesh",
        loreAccess: ["Battle Magic", "Daemonology", "Dark Magic"],
        armySpells: ["Lore of Chaos - Slaanesh"],
      },
    ],
    armySpells: [
      {
        name: "Lore of Chaos - Undivided",
        spellList: [
          {
            name: "Winds of Chaos",
            type: "Hex",
            castingValue: "7+/9+",
            range: '21"',
            remainsInPlay: "no",
            effect:
              "If this spell is cast with a casting result of 7 or more, the target enemy unit suffers a -1 modifier to its Movement characteristic (to a minimum of 1). If this spell is cast with a casting result of 9 or more, the target enemy unit suffers a -2 modifier to its Movement characteristic (to a minimum of 1). This spell lasts until the start of your next Start of Turn sub-phase.",
          },
        ],
      },
      {
        name: "Lore of Chaos - Tzeentch",
        spellList: [
          {
            name: "Blue Fire",
            type: "Magic Missile",
            castingValue: "9+",
            range: '18"',
            remainsInPlay: "no",
            effect:
              "The target enemy unit suffers D6+3 Strength 4 hits, each with an AP of -2 and with the Flaming Attacks special rule.",
          },
        ],
      },
      {
        name: "Lore of Chaos - Nurgle",
        spellList: [
          {
            name: "Fleshy Abundance",
            type: "Enchantment",
            castingValue: "7+",
            range: "Self",
            remainsInPlay: "yes",
            effect:
              "Whilst this spell is in play, the caster and any unit they have joined gain a +1 modifier to their Toughness characteristic (to a maximum of 7).",
          },
        ],
      },
      {
        name: "Lore of Chaos - Slaanesh",
        spellList: [
          {
            name: "Acquiesence",
            type: "Hex",
            castingValue: "6+",
            range: '12"',
            remainsInPlay: "no",
            effect:
              "Until the end of the Combat phase. the target enemy unit becomes subject to the Strike Last special rule.",
          },
        ],
      },
    ],
  },
  {
    army: "Beastmen Brayherds",
    wizardTypes: [
      {
        name: "Beastman Shaman",
        loreAccess: ["Daemonology", "Dark Magic", "Elementalism"],
        armySpells: ["Lore of Beasts"],
      },
    ],
    armySpells: [
      {
        name: "Lore of Beasts",
        spellList: [
          {
            name: "Viletide",
            type: "Magic Missile",
            castingValue: "8+",
            range: '15"',
            remainsInPlay: "no",
            effect:
              "The target enemy unit suffers 5D6 Strength 1 hits, with no armour save permitted (Ward and Regeneration saves can be attempted as normal).",
          },
          {
            name: "Devolve",
            type: "Magic Missile",
            castingValue: "8+",
            range: '15"',
            remainsInPlay: "no",
            effect:
              "The target enemy unit must immediately make a Leadership test. If this test is failed, it loses a number of wounds equal to the amount by which it failed the test.",
          },
          {
            name: "Mantle of Ghorok",
            type: "Enchantment",
            castingValue: "8+",
            range: "Self",
            remainsInPlay: "no",
            effect:
              "Until the end of this turn, the caster gains a +D6 modifier to their Strength and Attacks characteristics (to a maximum of 10). However, if a 6 is rolled, the modifier is lost and the and the caster instead loses a single Wound.",
          },
        ],
      },
    ],
  },
  {
    army: "Tomb Kings of Khemri",
    wizardTypes: [
      {
        name: "Liche Priests",
        loreAccess: ["Elementalism", "Illusion", "Necromancy"],
        armySpells: ["Lore of Nehekara"],
      },
    ],
    armySpells: [
      {
        name: "Lore of Nehekara",
        spellList: [
          {
            name: "Djaf's Incantation of Cursed Blades",
            type: "Enchantment",
            castingValue: "7+",
            range: "Self",
            remainsInPlay: "no",
            effect:
              "Until your next Start of Turn sub-phase, Any friendly unit that has the Nehekaran Undead special rule and that is within the caster's Command range may re-roll any rolls To Hit of a natural 1.",
          },
          {
            name: "Khsar's Incantation of the Desert Wind",
            type: "Enchantment",
            castingValue: "6+/10+",
            range: "Self",
            remainsInPlay: "no",
            effect:
              "If this spell is cast with a casting result of 6 or more, a single friendly unit that has the Nehekaran Undead special rule and is within the caster's Command range gains the Reserve Move special rule. If this spell is cast with a casting result of 10 or more, every friendly unit that has the Nehekaran Undead special rule and is within the caster's Command range gains the Reserve Move special rule. This spell lasts until the end of this turn.",
          },
          {
            name: "Usekhp's Incantation of Dessication",
            type: "Hex",
            castingValue: "10+",
            range: '15"',
            remainsInPlay: "no",
            effect:
              "Until the end of this turn, the target enemy unit suffers a -1 modifier to its Strength and Toughness characteristics (to a minimum of 1). If this spell is cast, the effects of any other Hex previously cast on the target unit immediately expire.",
          },
        ],
      },
    ],
  },
];

export default armies;
