import spells from "../data/spells.js";
import armies from "../data/armies.js";

const armySelector = document.querySelector("#army-select");
const wizardSelector = document.querySelector("#wizard-select");
const levelSelector = document.querySelector("#level-select");
const loreSelector = document.querySelector("#lore-select");
const spellListButton = document.querySelector("#generate-spells-button");
const spellListContainer = document.querySelector("#spell-list-container");
const signiatureSpellDropDown = document.querySelector("#signiature-spells");
const loreSpellsDropdown = document.querySelector("#lore-spells");
const replaceSpellButton = document.querySelector("#replace-spell-button");
const resetSpellsButton = document.querySelector("#reset-spells-button");
const downloadSpellsButton = document.querySelector("#download-button");

let selectedSpells = [];
let optionalSpells = [];
let savedSpells = [];

resetSpellsButton.style.display = "none";

function populateLoresSelector(wizardType, armyName) {
  loreSelector.innerHTML = '<option value="" selected>Select Lore</option>';
  const selectedArmy = armies.find((army) => army.army === armyName);
  if (selectedArmy) {
    const selectedWizardType = selectedArmy.wizardTypes.find(
      (type) => type.name === wizardType
    );

    if (selectedWizardType) {
      selectedWizardType.loreAccess.forEach((lore) => {
        const option = document.createElement("option");
        option.value = lore;
        option.textContent = lore;
        loreSelector.appendChild(option);
      });
    }
  }
}

function populateWizardSelector(armyName) {
  const selectedArmy = armies.find((army) => army.army === armyName);
  wizardSelector.innerHTML =
    '<option value="" selected>Select Wizard Type</option>';
  if (selectedArmy) {
    selectedArmy.wizardTypes.forEach((wizardType) => {
      const option = document.createElement("option");
      option.value = wizardType.name;
      option.textContent = wizardType.name;
      wizardSelector.appendChild(option);
    });
  }
}

function populateArmySelector() {
  selectedSpells = [];
  armies.forEach((armyData) => {
    const option = document.createElement("option");
    option.value = armyData.army;
    option.textContent = armyData.army;
    armySelector.appendChild(option);
  });
}

function addSpellToList(selectedLore) {
  const loreData = spells.find((loreData) => loreData.lore === selectedLore);

  if (loreData) {
    const spellList = loreData.spellList;
    const generatedSpell = spellList[Math.floor(Math.random() * 6) + 1];
    if (!selectedSpells.includes(generatedSpell)) {
      selectedSpells.push(generatedSpell);
    } else {
      addSpellToList(selectedLore);
    }
  } else {
    console.error(`No spell list found for lore: ${selectedLore}`);
  }
}

populateArmySelector();

function generateSpellCard(generatedSpell) {
  const spellCard = document.createElement("div");
  spellCard.classList.add("spell-card");
  spellCard.innerHTML = `<h3 >${generatedSpell.name}</h3>
  <div>
  <p><span>Type:</span> ${generatedSpell.type}</p>
  <p><span>Casting Value:</span> ${generatedSpell.castingValue}</p>
  <p><span>Range:</span> ${generatedSpell.range}</p>
  <p><span>Remains in Play:</span> ${generatedSpell.remainsInPlay}</p>
  <p><span>Effect:</span> ${generatedSpell.effect}</p>
  </div>
  `;
  spellListContainer.appendChild(spellCard);
}

armySelector.addEventListener("change", () =>
  populateWizardSelector(armySelector.value)
);
wizardSelector.addEventListener("change", () =>
  populateLoresSelector(wizardSelector.value, armySelector.value)
);

function populateSignatureSpells(wizardType, selectedLore) {
  const wizard = armies.find((army) =>
    army.wizardTypes.some((type) => type.name === wizardType)
  );
  if (!wizard) {
    console.error(`Wizard type '${wizardType}' not found.`);
    return;
  }
  const signatureSpells = [
    ...wizard.armySpells.find(
      (armySpell) =>
        armySpell.name ===
        wizard.wizardTypes.find((type) => type.name === wizardType)
          .armySpells[0]
    ).spellList,
  ];
  const loreSpell = spells.find((lore) => lore.lore === selectedLore)
    .spellList[0];
  optionalSpells = [loreSpell, ...signatureSpells];

  selectedSpells.map((spell) => {
    const option = document.createElement("option");
    option.value = spell.name;
    option.innerText = spell.name;
    option.id = spell.name;
    loreSpellsDropdown.appendChild(option);
  });

  optionalSpells.forEach((spell) => {
    const option = document.createElement("option");
    option.value = spell.name;
    option.innerText = spell.name;
    option.id = spell.name;
    signiatureSpellDropDown.appendChild(option);
  });
  console.log(optionalSpells);
}

spellListButton.addEventListener("click", (e) => {
  e.preventDefault();
  spellListContainer.innerHTML = "";
  selectedSpells = [];
  for (let i = 0; i < levelSelector.value; i++) {
    addSpellToList(loreSelector.value);
  }
  selectedSpells.map((spell) => {
    generateSpellCard(spell);
  });
  populateSignatureSpells(wizardSelector.value, loreSelector.value);
});

function replaceSpell() {
  selectedSpells.forEach((spell) => {
    savedSpells.push(spell);
  });
  const selectedSpellCardName = loreSpellsDropdown.value;
  const selectedSignatureSpell = signiatureSpellDropDown.value;

  if (selectedSpellCardName && selectedSignatureSpell) {
    const index = selectedSpells.findIndex(
      (spell) => spell.name === selectedSpellCardName
    );
    if (index !== -1) {
      const newSpell = optionalSpells.find(
        (spell) => spell.name === selectedSignatureSpell
      );
      if (newSpell) {
        selectedSpells.splice(index, 1, newSpell);
        spellListContainer.innerHTML = "";
        selectedSpells.forEach((spell) => {
          generateSpellCard(spell);
        });
      }
    }
  }
  replaceSpellButton.style.display = "none";
  resetSpellsButton.style.display = "inline";
}

function resetSpells() {
  selectedSpells = [];
  savedSpells.map((spell) => {
    selectedSpells.push(spell);
  });
  spellListContainer.innerHTML = "";
  selectedSpells.map((spell) => {
    generateSpellCard(spell);
  });
  replaceSpellButton.style.display = "inline";
  resetSpellsButton.style.display = "none";
}

replaceSpellButton.addEventListener("click", (e) => {
  e.preventDefault();
  replaceSpell();
});

resetSpellsButton.addEventListener("click", (e) => {
  e.preventDefault();
  resetSpells();
});

function saveSpellListAsText(selectedSpells) {
  let spellListText = "";
  selectedSpells.forEach((spell) => {
    spellListText += `Name: ${spell.name}\n`;
    spellListText += `Type: ${spell.type}\n`;
    spellListText += `Casting Value: ${spell.castingValue}\n`;
    spellListText += `Range: ${spell.range}\n`;
    spellListText += `Remains in Play: ${spell.remainsInPlay}\n`;
    spellListText += `Effect: ${spell.effect}\n\n`;
  });
  const blob = new Blob([spellListText], { type: "text/plain" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `spell_list.txt`;
  downloadLink.click();
}

downloadSpellsButton.addEventListener("click", (e) => {
  e.preventDefault();
  saveSpellListAsText(selectedSpells);
});
