const spells = [
  {
    lore: "Battle Magic",
    spellList: [
      {
        name: "Hammerhand",
        type: "Assailment",
        castingValue: "7+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          "A single enemy unit the caster is engaged in combat with suffers 2D3 strength 4 hits, each with an AP of -2",
      },
      {
        name: "Fireball",
        type: "Magic Missile",
        castingValue: "8+",
        range: '24"',
        remainsInPlay: "no",
        effect:
          "The target enemy unit suffers 2D6 strength 4 hits each with an AP of -. This spell has the Flaming Attacks special rule",
      },
      {
        name: "Curse of Arrow Attraction",
        type: "Magic Missile",
        castingValue: "7+",
        range: '21"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, you may re-roll any rolls To Hit of a natural 1 when shooting at the target enemy unit.",
      },
      {
        name: "Pillar of Fire",
        type: "Magical Vortex",
        castingValue: "9+",
        range: '12"',
        remainsInPlay: "yes",
        effect:
          'place a small(3") blast template so that it\'s central hole is within 12" of the caster. Whilst in play, the template is treated as Dangerous Terrain. the template moves D6" in a direction of the caster\'s choosing every Start of Turn sub-phase. Any Unit (friend or foe) the moving template touches or moves over suffers D3+3 Strength 3 hits, each an AP of -2. These hits have the Flaming Attacks special rule.',
      },
      {
        name: "Arcane Urgency",
        type: "Conveyance",
        castingValue: "10+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "If the target friendly unit is not fleeing and has already moved during this Movement phase, it may immediately move again.",
      },
      {
        name: "Oecken Shield",
        type: "Enchantment",
        castingValue: "7+",
        range: "Self",
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the caster and any unit they have joined gain a 5+ ward save against any wounds they have suffered.",
      },
      {
        name: "Curse of Cowardly Flight",
        type: "Hex",
        castingValue: "9+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "The target enemy unit must immediately make a Panic test. If the target enemy unit automatically passes any Panic tests it is required to make for any reason, it must still make this test, and, should it fail, it will give ground.",
      },
    ],
  },
  {
    lore: "Daemonology",
    spellList: [
      {
        name: "The Summoning",
        type: "Magic Missile",
        castingValue: "9+",
        range: '18"',
        remainsInPlay: "no",
        effect:
          "The target enemy unit suffers 2D6 Strength 4 hits, each with an AP of -1",
      },
      {
        name: "Steed of Shadows",
        type: "Conveyance",
        castingValue: "9+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          'This spell can only target friendly models whose troop type is "infantry". If the target unit is not fleeing and has not already movedduring this Movement phase, it gains the Fly(12) special rule until your next Start of Turn sub-phase.',
      },
      {
        name: "Gathering Darkness",
        type: "Hex",
        castingValue: "9+",
        range: '12"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the target nemy unit suffers a -2 modifier to it's Initiative characteristic (to a minimum of 1), a -2 modifier to it's Leadership characteristic (to a minimum of 2) and cannot use their General's Inspiring Presence special rule. This spell may not target an enemy unit engaged in combat.",
      },
      {
        name: "Daemonic Familiars",
        type: "Assailment",
        castingValue: "8+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          "A single enemy unit the caster is engaged in combat with suffers 2D6 Strength 2 hits, with no armour save permitted (Ward and Regeneration saves can be attempted as normal)",
      },
      {
        name: "Daemonic Vessel",
        type: "Enchantment",
        castingValue: "10+",
        range: "Self",
        remainsInPlay: "no",
        effect:
          "Until the end of this turn, the caster, their mount, and any unit they have joined, gain a +1 modifier to their Strength and Attacks characteristics (to a maximum if 10), and improve the armour piercing characteristic of their weapons by 1.",
      },
      {
        name: "Vortex of Chaos",
        type: "Magical Vortex",
        castingValue: "8+",
        range: '15"',
        remainsInPlay: "yes",
        effect:
          'place a small(3") blast template so that it\'s central hole is within 15" of the caster. Whilst in play, the template is treated as Dangerous Terrain. the template moves D6" in a random direction during every Start of Turn sub-phase. Any Unit (friend or foe) the moving template touches or moves over suffers D6+1 Strength 3 hits, each an AP of -.',
      },
      {
        name: "Daemonic Vigour",
        type: "Enchantment",
        castingValue: "9+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "Until the end of this turn, the target friendly unit gains a +1 modifier to it's Movement Toughness, and Initiative characteristics (to a maximum of 10).",
      },
    ],
  },
  {
    lore: "Dark Magic",
    spellList: [
      {
        name: "Doombolt",
        type: "Magic Missile",
        castingValue: "8+",
        range: '24"',
        remainsInPlay: "no",
        effect:
          "place a small(3\") blast template so that it's central hole is directly over the center of the target enemy unit. Any enemy model whose base lies underneath the template risks being hit (as described on page 95 of the Main Rulebook) and suffering a single strength 3 hit with an AP of -2.",
      },
      {
        name: "Word of Pain",
        type: "Hex",
        castingValue: "10+",
        range: '18"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the target enemy suffers a -1 modifier to it's Strength and Toughness characteristics (to a minimum of 1). This spell may target an enemy unit engaged in combat.",
      },
      {
        name: "Stream of Corruption",
        type: "Assailment",
        castingValue: "8+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          "Place a flame template so that the narrow end touches the caster's base edge and the broad end is over a unit they are engaged in combat with. Any model (friend or foe) whose base lies underneath the template risks being hit (as described on page 95 of the Main Rulebook) and suffers a single Strength 3 hit with an AP of -1.",
      },
      {
        name: "Infernal Gateway",
        type: "Conveyance",
        castingValue: "10+",
        range: '12"',
        remainsInPlay: "no",
        effect:
          'The spell can only target friendly characters, but may target characters engaged in combat. If the target friendly character is not fleeing, you may immediately remove it from the battlefield and replace it anywhere within 12" of it\'s original location, but not within 6" of any enemy models. Note: This spell allows a character to leave combat.',
      },
      {
        name: "Phantasmagoria",
        type: "Magical Vortex",
        castingValue: "9+",
        range: '12"',
        remainsInPlay: "yes",
        effect:
          'Place a small (3") blast template so that it\'s central hole is within 12" of the caster. Whilst in play, the template does not move and is treated as Dangerous Terrain. Enemy units that end their movement within 12" of the template must immediately make a Panic test. Those that fail will Fall Back in Good Order or Flee directly away from the template. Those that pass (or those that do not have to make the test) become subject to the Impetuous special rule whilst they remain with 12" of the template.',
      },
      {
        name: "Battle Lust",
        type: "Enchantment",
        castingValue: "9+",
        range: '12"',
        remainsInPlay: "no",
        effect:
          "Until the end of this turn, the target friendly unit gains the Frenzy and Hatred (all enemies) special rules.",
      },
      {
        name: "Soul Eater",
        type: "Assailment",
        castingValue: "7+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          "A single enemy model the caster is engaged in combat with suffers a single Strength 3 hit with the Multiple Wounds (3) special rule and with no armour save permitted (Ward and Regeneration saves can be attempted as normal).",
      },
    ],
  },
  {
    lore: "Elementalism",
    spellList: [
      {
        name: "Storm Call",
        type: "Hex",
        castingValue: "7+",
        range: '12"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the target enemy unit suffers a -1 modifier to it's Movement and Initiative characteristics (to a minimum of 1). If this spell is cast, the effects of any other Hex previously cast on the target unit immediately expire.",
      },
      {
        name: "Flaming Sword",
        type: "Assailment",
        castingValue: "8+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          "A single enemy unit the caster is engaged in combat with suffers D6+1 Strength 3 hits, each with an AP of -. These hits have the Flaming Attacks special rule.",
      },
      {
        name: "Plague of Rust",
        type: "Hex",
        castingValue: "9+",
        range: '21"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the target enemy unit suffers a -2 modifier to it's armour value. This spell may target an emey unit engaged in combat.",
      },
      {
        name: "Summon Elemental Spirit",
        type: "Magical Vortex",
        castingValue: "9+",
        range: '15"',
        remainsInPlay: "yes",
        effect:
          'Place a small (3") blast template so that its central hole is within 15" of the caster. Whilst in play, the template is treated as Dangerous Terrain over which no line of sight can be drawn. The template moves D6" in a random direction during every Start of Turn sub-phase. Any enemy unit the moving template touches or moves over suffers D3+3 Strength 4 hits, each with an AP of -1.',
      },
      {
        name: "Earthen Ramparts",
        type: "Enchantment",
        castingValue: "10+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the target friendly unit gains a 5+ Ward save against any wounds suffered and counts as being behind a defended low linear obstacle if charged. However, whilst this spell is in play the target unit cannot march or charge.",
      },
      {
        name: "Wind Blast",
        type: "Magic Missile",
        castingValue: "8+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "The target enemy unit sufferes D3+3 Strength 3 hits, each with an AP of -1. Once these hits have been resolved, the unit must Give Ground.",
      },
      {
        name: "Travel Mystical Pathway",
        type: "Conveyance",
        castingValue: "10+",
        range: '9"',
        remainsInPlay: "no",
        effect:
          'If the target friendly unit is not fleeing and has not already moved during the Movement phase, you may immediately remove it from the battlefield and replace it anywhere within 12" of its original location. But not within 6" of any enemy models. The target friendly unit cannot move again during the Movement phase.',
      },
    ],
  },
  {
    lore: "High Magic",
    spellList: [
      {
        name: "Drain Magic",
        type: "Hex",
        castingValue: "9+",
        range: "Self",
        remainsInPlay: "yes",
        effect:
          "Whilst this spell is in play, enemy Wizards that are within 24\" of the caster's model when attempting to cast a spell must increase the spell's casting value by 2.",
      },
      {
        name: "Walk Between Worlds",
        type: "Conveyance",
        castingValue: "10+",
        range: "Self",
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the caster and any unit they have joined gain the Ethereal and Reserve Move special rules.",
      },
      {
        name: "Fiery Convocation",
        type: "Magic Missile",
        castingValue: "10+",
        range: '18"',
        remainsInPlay: "no",
        effect:
          'Place a large (5") blast template so that its central hole is directly over the centre of the target enemy unit. Once placed, the template will scatter D3+1". Any enemy model whose base lies underneath the template\'s final position risks being hit (as described on page 95 of the Main Rulebook) and suffering a Strength 4 hit with an AP of -2. These hits have the flaming attacks special rule.',
      },
      {
        name: "Tempest",
        type: "Magical Vortex",
        castingValue: "9+",
        range: '12"',
        remainsInPlay: "yes",
        effect:
          'Place a small (3") blast template so that its central hole is within 12" of the caster. Whilst in play, the template does not move and is treated as Dangerous Terrain. Whilst within 6" of the template, enemy units treat Open Ground as Difficult Terrain and Difficult Terrain as Dangerous Terrain.',
      },
      {
        name: "Corporeal Unmaking",
        type: "Assailment",
        castingValue: "8+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          "A single enemy model the caster is engaged in combat with suffers D3 Strength 5 hits, with no armour or Regeneration saves permitted (Ward saves can be attempted as normal).",
      },
      {
        name: "Fury of Khaine",
        type: "Enchantment",
        castingValue: "9+",
        range: '12"',
        remainsInPlay: "no",
        effect:
          "Until the end of this turn, the target friendly unit gainst the Extra Attacks (+1) special rule. This spell may target a friendly unit engaged in combat.",
      },
      {
        name: "Shield of Saphery",
        type: "Enchantment",
        castingValue: "9+",
        range: '18"',
        remainsInPlay: "no",
        effect:
          "Until the end of this turn, the target friendly unit gains a 5+ Ward save against ant wounds suffered. If this spell is cast, the effects of any other Enchantment previously cast on the target unit immediately expire.",
      },
    ],
  },
  {
    lore: "Illusion",
    spellList: [
      {
        name: "Glittering Robe",
        type: "Enchantment",
        castingValue: "8+",
        range: "Self",
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, enemy units suffer a -1 modifier to any rolls To Hit made against the caster and any unit they have joined. If this spell is cast, the effects of any other Enchantment previously cast on any of the affected models immediately expires.",
      },
      {
        name: "Mind Razor",
        type: "Magic Missile",
        castingValue: "7+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "The target enemy unit must immediately make a Leadership test. If this test is passed, it suffers D3 Strength 3 hits, each with an AP of -. If, however, this test is failed, it suffers D3+3 Strength 4 hits, each with an AP of -3.",
      },
      {
        name: "Shimmering Dragon",
        type: "Conveyance",
        castingValue: "8+",
        range: '12"',
        remainsInPlay: "no",
        effect:
          "This spell can only target friendly characters. If the target friendly character is not fleeing and has not already moved during this Movement phase, it gains the Fly (10) special rule until the end of this turn.",
      },
      {
        name: "Column of Crystal",
        type: "Magical Vortex",
        castingValue: "10+",
        range: '9"',
        remainsInPlay: "yes",
        effect:
          'Place a large (5") blast template so that its central hole is within 9" of the caster. Whilst in play, the template does not move and is treated as Impassible Terrain over which no line of sight can be drawn.',
      },
      {
        name: "Confounding Convocation",
        type: "Hex",
        castingValue: "9+",
        range: '9"',
        remainsInPlay: "yes",
        effect:
          "Whilst this spell is in play, the target enemy unit becomes subject to the Stupidity special rule.",
      },
      {
        name: "Spectral Doppelganger",
        type: "Assailment",
        castingValue: "9+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          "A single enemy unit the caster is engaged in combat with suffers 2D6 hits, resolved using the characteristics, and special rules of the caster and of any weapon they carry.",
      },
      {
        name: "Miasmic Mirage",
        type: "Hex",
        castingValue: "11+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the target enemy unit suffers a -2 modifier to its Movement characteristic (to a minimum of 1) and cannot march or charge. If this spell is cast, the effects of any other Hex previously cast on the target unit immediately expire.",
      },
    ],
  },
  {
    lore: "Necromancy",
    spellList: [
      {
        name: "The Dwellers Below",
        type: "Assailment",
        castingValue: "7+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          'Place a small (3") blast template so that its central hole is directly over the centre of a unit the caster is engaged in combat with. Once placed the template will scatter D3+1". Any enemy model whose base lies underneath the template\'s final position risks being hit (As described on page 95 of the Main Rulebook) and suffering a single Strength 3 hit with an AP of -.',
      },
      {
        name: "Deathly Cabal",
        type: "Enchantment",
        castingValue: "10+",
        range: "self",
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the caster and any unit they have joined gain a 6+ Ward save against any wounds suffered that were caused by a non-magical enemy attack. In addition, whilst this spell is in play, the affected models gain the Fear special rule. If they already have the Fear special rule, they instead gain the Terror special rule.",
      },
      {
        name: "Unquiet Spirits",
        type: "Magic Missile",
        castingValue: "8+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "The target enemy unit suffers 3D6 Strength 2 hits, with no armour save permitted (Ward and Regeneration saves can be attempted as normal).",
      },
      {
        name: "Spiritual Vortex",
        type: "Magical Vortex",
        castingValue: "11+",
        range: '12"',
        remainsInPlay: "yes",
        effect:
          'Place a large (5") blast template so that its central hole is within 12" of the caster. Whilst in play, the template does not moveand is treated as Dangerous Terrain. Whilst within 8" of the template, enemy units suffer a -1 modifier to their Leadership characteristic (to a minimum of 2) and cannot use their General\'s Inspiring Presence special rule.',
      },
      {
        name: "Curse of Years",
        type: "Hex",
        castingValue: "10+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "Until your next Start of Turn sub-phase, the target enemy unit suffers a -1 modifer to its Movement, Weapon Skill, and Toughness characteristics (to a minimum of 1). If this spell is cast, the effects of any other Hex previously cast on the target unit immediately expire.",
      },
      {
        name: "Spectral Steed",
        type: "Conveyance",
        castingValue: "9+",
        range: '12"',
        remainsInPlay: "yes",
        effect:
          'This spell can only target friendly characters whose Troop Type is "Infantry" Whilst this spell is in play, the target friendly character gains the Ethereal and Fly (10) special rules.',
      },
      {
        name: "Spirit Leech",
        type: "Hex",
        castingValue: "8+",
        range: '18"',
        remainsInPlay: "no",
        effect:
          "Until the end of this turn, the target enemy unit suffers a -2 modifier to its Leadership characteristic (to a minimum of 2) and cannot use their General's Inspiring Presence special rule. This spell may target an enemy unit engaged in combat.",
      },
    ],
  },
  {
    lore: "Waaagh! Magic",
    spellList: [
      {
        name: "Fist of Gork (or Mork)",
        type: "Assailment",
        castingValue: "9+",
        range: "Combat",
        remainsInPlay: "no",
        effect:
          'Place a large (5") blast template so that its central hole is directly over the centre of a unit the caster is engaged in combat with. Once placed, the template will scatter D3+1". Any model (friend or foe) whose base lies underneath the template\'s final position risks being hit (as described on page 95 of the Main Rulebook) and suffering a single Strength 4 hit with an AP of -1.',
      },
      {
        name: "Vindictive Glare",
        type: "Magic Missile",
        castingValue: "8+",
        range: '21"',
        remainsInPlay: "no",
        effect:
          "The target unit suffers a single Strength 7 hit with the Multiple Wounds (D3) special rule and with no armour save permitted (Ward and Regneration saves can be attempted as normal). This spell may target an enemy unit engaged in combat.",
      },
      {
        name: "Hand of Mork (or Gork)",
        type: "Conveyance",
        castingValue: "7+",
        range: '18"',
        remainsInPlay: "no",
        effect:
          'This spell can only target friendly characters, but may target characters engaged in combat. You may immediately remove the target friendly character from the battlefield, and replace it anywhere within 2D6" of its original location but not within 3" of any enemy models. However if a double 1 is rolled, the character lands badly and loses a single Wound.',
      },
      {
        name: "Bad Moon Rizin'",
        type: "Hex",
        castingValue: "10+",
        range: '15"',
        remainsInPlay: "no",
        effect:
          "Until the end of this turn, the target enemy unit suffers a -D3 modifier to its Weapon Skill and Initiative characteristics (to a minimum of 1).",
      },
      {
        name: "Evil Sun Shinin'",
        type: "Enchantment",
        castingValue: "9+",
        range: "Self",
        remainsInPlay: "no",
        effect:
          "Until your nect Start of Turn sub-phase, friendly units that are within the caster's Command range may re-roll any rolls To Hit of a natural 1 and improve the armour piercing characteristic of their weapons by 1.",
      },
      {
        name: "'Ere We Go",
        type: "Enchantment",
        castingValue: "9+",
        range: "Self",
        remainsInPlay: "no",
        effect:
          "Any friendly unit within the caster's Command range during the Declare Charges & Charge Reactions sub-phase of this turn increase its maximum possible charge range by 3\" and, when it makes a Charge roll, may apply a +D3 modifier to the result.",
      },
      {
        name: "Foot of Gork (or Mork)",
        type: "Magical Vortex",
        castingValue: "8+",
        range: '15"',
        remainsInPlay: "yes",
        effect:
          'Place a large (5") blast template so that its central hole is within 15" of the caster. Whilst in play, the template is treated as Dangerous Terrain. The template moves 2D6" in a random direction during every Start of Turn sub-phase. Any unit (friend or foe) the moving template touches or moves over suffers D3+3 Strength 5 hits, each with an AP of -1.',
      },
    ],
  },
];

export default spells;
