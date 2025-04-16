// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize simulator with game data
    const simulator = new MixingSimulator(gameData);
    
    // Get DOM elements
    const baseDrugSelect = document.getElementById('base-drug');
    const ingredientSlotsContainer = document.getElementById('ingredient-slots');
    const currentEffectsDiv = document.getElementById('current-effects');
    const stepsLogDiv = document.getElementById('steps-log');
    
    // Number of ingredient slots to create
    const numSlots = 10;
    
    // Populate base drug dropdown
    gameData.baseDrugs.forEach(drug => {
        const option = document.createElement('option');
        option.value = drug.name;
        option.textContent = `${drug.name} (${drug.effect})`;
        baseDrugSelect.appendChild(option);
    });
    
    // Create ingredient slots
    for (let i = 0; i < numSlots; i++) {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'ingredient-slot';
        
        const label = document.createElement('label');
        label.textContent = `Step ${i + 1}:`;
        
        const select = document.createElement('select');
        select.id = `ingredient-${i}`;
        select.dataset.slot = i;
        
        // Add empty option
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '-- Select Ingredient --';
        select.appendChild(emptyOption);
        
        // Add all ingredients as options
        gameData.ingredientEffects.forEach(ingredient => {
            const option = document.createElement('option');
            option.value = ingredient.name;
            option.textContent = `${ingredient.name} (${ingredient.effect})`;
            select.appendChild(option);
        });
        
        slotDiv.appendChild(label);
        slotDiv.appendChild(select);
        ingredientSlotsContainer.appendChild(slotDiv);
        
        // Add change event listener to simulate recipe when selection changes
        select.addEventListener('change', updateSimulation);
    }
    
    // Add change event for base drug selector
    baseDrugSelect.addEventListener('change', updateSimulation);

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', function() {
        // Reset all ingredient dropdowns
        for (let i = 0; i < numSlots; i++) {
            const select = document.getElementById(`ingredient-${i}`);
            select.selectedIndex = 0; // Set to first option (empty)
        }
        
        // Update the simulation to reflect the cleared state
        updateSimulation();
    });

       // Add interactions popup functionality
    const showInteractionsButton = document.getElementById('show-interactions');
    showInteractionsButton.addEventListener('click', function() {
        showInteractionsPopup();
    });
    
    // Function to update the simulation results
    function updateSimulation() {
        // Get the base drug
        const baseDrug = baseDrugSelect.value;
        if (!baseDrug) return;
        
        // Get all selected ingredients
        const ingredients = [];
        for (let i = 0; i < numSlots; i++) {
            const select = document.getElementById(`ingredient-${i}`);
            ingredients.push(select.value || null);
        }
        
        // Simulate the recipe
        const result = simulator.simulateRecipe(baseDrug, ingredients);
        
        // Display current effects
        displayCurrentEffects(result.finalEffects);
        
        // Display steps
        displaySteps(result.steps);
    }
    
    // Function to display current effects
function displayCurrentEffects(effects) {
    currentEffectsDiv.innerHTML = '';
    
    effects.forEach(effect => {
        const effectDiv = document.createElement('div');
        effectDiv.className = 'effect';
        
        // Add effect-specific class for styling
        // Replace spaces with hyphens and handle special characters
        const effectClass = 'effect-' + effect.replace(/\s+/g, '-')
            .replace(/\*/g, '') // Remove asterisks
            .replace(/\(.*\)/g, ''); // Remove anything in parentheses
        
        effectDiv.classList.add(effectClass);
        effectDiv.textContent = effect;
        currentEffectsDiv.appendChild(effectDiv);
    });
}
    
    // Function to display steps
    function displaySteps(steps) {
        stepsLogDiv.innerHTML = '';
        
        steps.forEach(step => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            
            let stepText = '';
            if (step.step === 0) {
                stepText = `Starting with ${step.ingredient}: ${step.effects.join(', ')}`;
            } else {
                stepText = `Step ${step.step}: Added ${step.ingredient}`;
            }
            
            stepDiv.innerHTML = `<div class="step-header">${stepText}</div>`;
            
            // Add transformations
            if (step.transformations && step.transformations.length > 0) {
                step.transformations.forEach(t => {
                    const transformDiv = document.createElement('div');
                    transformDiv.className = 'transformation';
                    
                    let transformText = `Transformed: ${t.from} → ${t.to}`;
                    if (t.condition) {
                        transformText += ` (Condition: ${t.condition})`;
                    }
                    
                    transformDiv.textContent = transformText;
                    stepDiv.appendChild(transformDiv);
                });
            }
            
            // Add current effects after this step
            const effectsDiv = document.createElement('div');
            effectsDiv.className = 'step-effects';
            effectsDiv.innerHTML = 'Effects: ';
    
            step.effects.forEach(effect => {
                const effectSpan = document.createElement('span');
                effectSpan.className = 'effect';
                
                // Add effect-specific class for styling
                const effectClass = 'effect-' + effect.replace(/\s+/g, '-')
                    .replace(/\*/g, '') // Remove asterisks
                    .replace(/\(.*\)/g, ''); // Remove anything in parentheses
                
                effectSpan.classList.add(effectClass);
                effectSpan.textContent = effect;
                effectsDiv.appendChild(effectSpan);
                
                // Add a space after each effect
                effectsDiv.appendChild(document.createTextNode(' '));
            });
    
            stepDiv.appendChild(effectsDiv);
            stepsLogDiv.appendChild(stepDiv);
        });
    }
    
},

// Function to create and show the interactions popup
function showInteractionsPopup() {
    // Create popup container
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    const content = document.createElement('div');
    content.className = 'popup-content';
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.className = 'close-popup';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    // Add title
    const title = document.createElement('h2');
    title.textContent = 'Ingredient-Effect Interactions';
    
    // Add search box
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.className = 'search-box';
    searchBox.placeholder = 'Search interactions...';
    
    // Create table
    const table = document.createElement('table');
    table.className = 'interactions-table';
    
    // Add table headers
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Ingredient', 'Replaces Effect', 'Creates Effect'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Add table body
    const tbody = document.createElement('tbody');
    
    // Add all interactions based on your actual data structure
    gameData.interactions.forEach(interaction => {
        const row = document.createElement('tr');
        
        const ingredientCell = document.createElement('td');
        ingredientCell.textContent = interaction["REQUIRED INGREDIENT "];
        
        const replacesCell = document.createElement('td');
        replacesCell.textContent = interaction["EFFECT TO BE REPLACED"];
        
        const createsCell = document.createElement('td');
        createsCell.textContent = interaction["DESIRED EFFECT"];
        
        row.appendChild(ingredientCell);
        row.appendChild(replacesCell);
        row.appendChild(createsCell);
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    
    // Add search functionality
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = tbody.getElementsByTagName('tr');
        
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName('td');
            let found = false;
            
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toLowerCase().includes(searchTerm)) {
                    found = true;
                    break;
                }
            }
            
            row.style.display = found ? '' : 'none';
        }
    });
    
    // Assemble the popup
    content.appendChild(closeButton);
    content.appendChild(title);
    content.appendChild(searchBox);
    content.appendChild(table);
    overlay.appendChild(content);
    
    // Add to the document
    document.body.appendChild(overlay);
});
