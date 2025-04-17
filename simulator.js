// simulator.js
class MixingSimulator {
    constructor(gameData) {
        this.baseDrugs = gameData.baseDrugs;
        this.ingredientEffects = gameData.ingredientEffects;
        this.interactions = gameData.interactions;
        this.effectLimit = gameData.effectLimit;
    }
    
    simulateStep(currentEffects, ingredient) {
    // Clone the current effects array to avoid modifying the original
    let initialEffects = [...currentEffects];
    let newEffects = [...currentEffects];
    let transformations = [];
    
    // First, identify all potential transformations without applying them
    let pendingTransformations = [];
    for (let i = 0; i < initialEffects.length; i++) {
        const effect = initialEffects[i];
        
        // Check for exact matches
        const exactMatch = this.interactions.find(
            interaction => interaction.ingredient === ingredient && 
                           interaction.replaces === effect
        );
        
        if (exactMatch) {
            // Only add the transformation if the target effect is not already present
            if (!initialEffects.includes(exactMatch.creates)) {
                pendingTransformations.push({
                    index: i,
                    from: effect,
                    to: exactMatch.creates
                });
            }
            continue;
        }
        
        // Check for conditional matches
        for (const interaction of this.interactions) {
            if (interaction.ingredient !== ingredient) continue;
            
            // Check if it's a conditional replacement (contains parentheses)
            if (!interaction.replaces.startsWith(effect + " (")) continue;
            
            // Extract the condition
            const condition = interaction.replaces.substring(
                effect.length + 1,
                interaction.replaces.length - 1
            ).trim();
            
            // Check if condition is met based on initial effects
            if (this.checkCondition(condition, initialEffects)) {
                // Only add the transformation if the target effect is not already present
                if (!initialEffects.includes(interaction.creates)) {
                    pendingTransformations.push({
                        index: i,
                        from: effect,
                        to: interaction.creates,
                        condition: condition
                    });
                }
                break;
            }
        }
    }
    
    // Now apply all transformations
    pendingTransformations.forEach(transform => {
        newEffects[transform.index] = transform.to;
        transformations.push({
            from: transform.from,
            to: transform.to,
            condition: transform.condition
        });
    });
    
    // Add the base effect of the ingredient AFTER transformations
    const ingredientData = this.ingredientEffects.find(i => i.name === ingredient);
    if (ingredientData && newEffects.length < this.effectLimit) {
        // Only add if the effect isn't already in the list
        if (!newEffects.includes(ingredientData.effect)) {
            newEffects.push(ingredientData.effect);
        }
    }
    
    // Remove duplicate effects by converting to a Set and back to an array
    newEffects = [...new Set(newEffects)];
    
    return {
        effects: newEffects,
        transformations: transformations
    };
}

        
        // Now apply all transformations
        pendingTransformations.forEach(transform => {
            newEffects[transform.index] = transform.to;
            transformations.push({
                from: transform.from,
                to: transform.to,
                condition: transform.condition
            });
        });
        
        // Remove duplicate effects by converting to a Set and back to an array
        newEffects = [...new Set(newEffects)];
        
        return {
            effects: newEffects,
            transformations: transformations
        };
    }
    
    checkCondition(condition, effects) {
        // Handle conditions like "X isn't already in the mix"
        if (condition.includes("isn't already in the mix")) {
            const forbiddenEffect = condition.split("isn't already in the mix")[0].trim();
            return !effects.includes(forbiddenEffect);
        }
        
        // Handle conditions like "X isn't in the mix"
        if (condition.includes("isn't in the mix")) {
            const forbiddenEffect = condition.split("isn't in the mix")[0].trim();
            return !effects.includes(forbiddenEffect);
        }
        
        // Handle conditions like "X already in the mix"
        if (condition.includes("already in the mix")) {
            const requiredEffect = condition.split("already in the mix")[0].trim();
            return effects.includes(requiredEffect);
        }
        
        return false;
    }
    
    simulateRecipe(baseDrug, ingredients) {
    // Start with the base drug effect
    const baseDrugData = this.baseDrugs.find(d => d.name === baseDrug);
    if (!baseDrugData) return null;
    
    // Initialize current effects, but ignore "None"
    let currentEffects = [];
    if (baseDrugData.effect !== "None") {
        currentEffects = [baseDrugData.effect];
    }
    
    let steps = [{
        step: 0,
        ingredient: "Base Drug",
        effects: [...currentEffects],
        transformations: []
    }];
        
        // Process each ingredient
        for (let i = 0; i < ingredients.length; i++) {
            if (!ingredients[i]) continue; // Skip empty slots
            
            const result = this.simulateStep(currentEffects, ingredients[i]);
            currentEffects = result.effects;
            
            // Make sure there are no duplicates in the current effects
            currentEffects = [...new Set(currentEffects)];
            
            steps.push({
                step: i + 1,
                ingredient: ingredients[i],
                effects: [...currentEffects],
                transformations: result.transformations
            });
        }
        
        return {
            baseDrug,
            steps,
            finalEffects: currentEffects
        };
    }
}

// Export for use in other files
try {
    if (module) {
        module.exports = { MixingSimulator };
    }
} catch (e) {
    // Not in a Node.js environment, ignore
}
