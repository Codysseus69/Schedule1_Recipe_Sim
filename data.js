// data.js
const gameData = {
    baseDrugs: [
        { name: "OG Kush", effect: "Calming" },
        { name: "Sour Diesel", effect: "Refreshing" },
        { name: "Green Crack", effect: "Energizing" },
        { name: "Granddaddy Purple", effect: "Sedating" },
        { name: "Meth", effect: "None" },
        { name: "Cocaine", effect: "None" }
    ],
    
    ingredientEffects: [
        { name: "Cuke", effect: "Energizing" },
        { name: "Banana", effect: "Gingeritis" },
        { name: "Paracetamol", effect: "Sneaky" },
        { name: "Donut", effect: "Calorie-Dense" },
        { name: "V*agra", effect: "Tropic Thunder" },
        { name: "Mouth Wash", effect: "Balding" },
        { name: "Flu Medicine", effect: "Sedating" },
        { name: "Gasoline", effect: "Toxic" },
        { name: "Energy Drink", effect: "Athletic" },
        { name: "Motor Oil", effect: "Slippery" },
        { name: "Mega Bean", effect: "Foggy" },
        { name: "Chili", effect: "Spicy" },
        { name: "Battery", effect: "Bright-Eyed" },
        { name: "Iodine", effect: "Jennerising" },
        { name: "Addy", effect: "Thought-Provoking" },
        { name: "Horse S*men", effect: "Long-Faced" }
    ],
    
    interactions: [
        // Anti-Gravity transformations
        { ingredient: "Banana", replaces: "Smelly", creates: "Anti-Gravity" },
        { ingredient: "Paracetamol", replaces: "Munchies", creates: "Anti-Gravity" },
        { ingredient: "Mouth Wash", replaces: "Calming", creates: "Anti-Gravity" },
        { ingredient: "Motor Oil", replaces: "Paranoia", creates: "Anti-Gravity" },
        
        // Athletic transformations
        { ingredient: "Cuke", replaces: "Munchies", creates: "Athletic" },
        { ingredient: "Paracetamol", replaces: "Electrifying", creates: "Athletic" },
        
        // Balding transformations
        { ingredient: "Paracetamol", replaces: "Paranoia", creates: "Balding" },
        { ingredient: "Paracetamol", replaces: "Energizing (only when Paranoia isn't already in the mix)", creates: "Balding" },
        { ingredient: "Energy Drink", replaces: "Schizophrenic", creates: "Balding" },
        
        // Bright-Eyed transformations
        { ingredient: "Paracetamol", replaces: "Spicy", creates: "Bright-Eyed" },
        { ingredient: "V*agra", replaces: "Euphoric", creates: "Bright-Eyed" },
        { ingredient: "Flu Medicine", replaces: "Calming", creates: "Bright-Eyed" },
        { ingredient: "Chili", replaces: "Sneaky", creates: "Bright-Eyed" },
        
        // Calming transformations
        { ingredient: "Paracetamol", replaces: "Foggy", creates: "Calming" },
        { ingredient: "V*agra", replaces: "Laxative", creates: "Calming" },
        { ingredient: "Flu Medicine", replaces: "Focused", creates: "Calming" },
        { ingredient: "Gasoline", replaces: "Paranoia", creates: "Calming" },
        { ingredient: "Horse S*men", replaces: "Anti-Gravity", creates: "Calming" },
        { ingredient: "Mega Bean", replaces: "Sneaky", creates: "Calming" },
        
        // Calorie-Dense transformations
        { ingredient: "Battery", replaces: "Laxative", creates: "Calorie-Dense" },
        
        // Cyclopean transformations
        { ingredient: "Cuke", replaces: "Foggy", creates: "Cyclopean" },
        { ingredient: "Mega Bean", replaces: "Energizing (when Thought-Provoking isn't already in the mix)", creates: "Cyclopean" },
        
        // Disorienting transformations
        { ingredient: "Gasoline", replaces: "Electrifying", creates: "Disorienting" },
        { ingredient: "Mega Bean", replaces: "Focused", creates: "Disorienting" },
        { ingredient: "Energy Drink", replaces: "Glowing", creates: "Disorienting" },
        
        // Electrifying transformations
        { ingredient: "Energy Drink", replaces: "Disorienting", creates: "Electrifying" },
        { ingredient: "Addy", replaces: "Long-Faced", creates: "Electrifying" },
        { ingredient: "Horse S*men", replaces: "Thought-Provoking", creates: "Electrifying" },
        { ingredient: "Mega Bean", replaces: "Shrinking", creates: "Electrifying" },
        
        // Energizing transformations
        { ingredient: "Donut", replaces: "Shrinking", creates: "Energizing" },
        { ingredient: "Energy Drink", replaces: "Euphoric", creates: "Energizing" },
        { ingredient: "Addy", replaces: "Foggy", creates: "Energizing" },
        { ingredient: "Mega Bean", replaces: "Thought-Provoking", creates: "Energizing" },
        
        // Euphoric transformations
        { ingredient: "Cuke", replaces: "Toxic", creates: "Euphoric" },
        { ingredient: "Donut", replaces: "Focused", creates: "Euphoric" },
        { ingredient: "Flu Medicine", replaces: "Laxative", creates: "Euphoric" },
        { ingredient: "Gasoline", replaces: "Energizing", creates: "Euphoric" },
        { ingredient: "Energy Drink", replaces: "Spicy", creates: "Euphoric" },
        { ingredient: "Chili", replaces: "Athletic", creates: "Euphoric" },
        { ingredient: "Battery", replaces: "Electrifying (when Zombifying isn't already in the mix)", creates: "Euphoric" },
        { ingredient: "Addy", replaces: "Explosive", creates: "Euphoric" },
        
        // Explosive transformations
        { ingredient: "Donut", replaces: "Calorie-Dense must already be in the mix and Explosive not", creates: "Explosive" },
        
        // Focused transformations
        { ingredient: "Banana", replaces: "Disorienting", creates: "Focused" },
        { ingredient: "Gasoline", replaces: "Shrinking", creates: "Focused" },
        { ingredient: "Mega Bean", replaces: "Seizure-Inducing", creates: "Focused" },
        
        // Foggy transformations
        { ingredient: "Gasoline", replaces: "Laxative", creates: "Foggy" },
        { ingredient: "Flu Medicine", replaces: "Cyclopean", creates: "Foggy" },
        
        // Gingeritis transformations
        { ingredient: "Donut", replaces: "Jenerising", creates: "Gingeritis" },
        { ingredient: "Paracetamol", replaces: "Focused", creates: "Gingeritis" },
        { ingredient: "Flu Medicine", replaces: "Thought-Provoking", creates: "Gingeritis" },
        { ingredient: "Iodine", replaces: "Calorie-Dense", creates: "Gingeritis" },
        { ingredient: "Addy", replaces: "Sedating", creates: "Gingeritis" },
        
        // Glowing transformations
        { ingredient: "Gasoline", replaces: "Disorienting", creates: "Glowing" },
        { ingredient: "Mega Bean", replaces: "Calming", creates: "Glowing" },
        { ingredient: "Battery", replaces: "Cyclopean", creates: "Glowing" },
        
        // Jennerising transformations
        { ingredient: "Banana", replaces: "Paranoia", creates: "Jennerising" },
        { ingredient: "Mouth Wash", replaces: "Focused", creates: "Jennerising" },
        
        // Laxative transformations
        { ingredient: "Cuke", replaces: "Euphoric", creates: "Laxative" },
        { ingredient: "Energy Drink", replaces: "Foggy", creates: "Laxative" },
        { ingredient: "Mega Bean", replaces: "Athletic", creates: "Laxative" },
        
        // Long-Faced transformations
        { ingredient: "Chili", replaces: "Laxative", creates: "Long-Faced" },
        
        // Munchies transformations
        { ingredient: "Battery", replaces: "Shrinking", creates: "Munchies" },
        { ingredient: "Flu Medicine", replaces: "Athletic", creates: "Munchies" },
        { ingredient: "Energy Drink", replaces: "Sedating", creates: "Munchies" },
        { ingredient: "Motor Oil", replaces: "Energizing", creates: "Munchies" },

        // Paranoia transformations
        { ingredient: "Cuke", replaces: "Sneaky", creates: "Paranoia" },
        { ingredient: "Flu Medicine", replaces: "Shrinking", creates: "Paranoia" },
        { ingredient: "Iodine", replaces: "Foggy", creates: "Paranoia" },
        { ingredient: "Mega Bean", replaces: "Jennerising", creates: "Paranoia" },
        { ingredient: "Paracetamol", replaces: "Energizing (only if Munchies aren't already in the mix)", creates: "Paranoia" },
        
        // Refreshing transformations
        { ingredient: "Banana", replaces: "Long-Faced", creates: "Refreshing" },
        { ingredient: "Flu Medicine", replaces: "Shrinking", creates: "Refreshing" },
        { ingredient: "Chili", replaces: "Shrinking", creates: "Refreshing" },
        { ingredient: "Flu Medicine", replaces: "Electrifying", creates: "Refreshing" },
        { ingredient: "Addy", replaces: "Glowing", creates: "Refreshing" },
        
        // Schizophrenic transformations
        { ingredient: "Motor Oil", replaces: "Munchies (only when Energizing isn't in the mix)", creates: "Schizophrenic" },
        
        // Sedating transformations
        { ingredient: "Gasoline", replaces: "Munchies", creates: "Sedating" },
        { ingredient: "Iodine", replaces: "Calming", creates: "Sedating" },
        { ingredient: "Motor Oil", replaces: "Euphoric", creates: "Sedating" },
        
        // Seizure-Inducing transformations
        { ingredient: "Banana", replaces: "Focused", creates: "Seizure-Inducing" },
        { ingredient: "Iodine", replaces: "Euphoric", creates: "Seizure-Inducing" },
        
        // Shrinking transformations
        { ingredient: "Energy Drink", replaces: "Focused", creates: "Shrinking" },
        
        // Slippery transformations
        { ingredient: "Donut", replaces: "Anti-Gravity", creates: "Slippery" },
        { ingredient: "Flu Medicine", replaces: "Munchies", creates: "Slippery" },
        { ingredient: "Paracetamol", replaces: "Calming", creates: "Slippery" },
        
        // Smelly transformations
        { ingredient: "Banana", replaces: "Toxic", creates: "Smelly" },
        { ingredient: "Gasoline", replaces: "Gingeritis", creates: "Smelly" },
        
        // Sneaky transformations
        { ingredient: "Banana", replaces: "Calming", creates: "Sneaky" },
        { ingredient: "Donut", replaces: "Balding", creates: "Sneaky" },
        { ingredient: "V*agra", replaces: "Athletic", creates: "Sneaky" },
        { ingredient: "Mouth Wash", replaces: "Calorie-Dense", creates: "Sneaky" },
        { ingredient: "Energy Drink", replaces: "Trophic Thunder", creates: "Sneaky" },
        { ingredient: "Gasoline", replaces: "Jennerising", creates: "Sneaky" },
        { ingredient: "Iodine", replaces: "Toxic", creates: "Sneaky" },
        
        // Spicy transformations
        { ingredient: "Gasoline", replaces: "Euphoric (only if Energizing isn't already in the mix)", creates: "Spicy" },
        { ingredient: "Gasoline", replaces: "Energizing", creates: "Spicy" },
        
        // Thought-Provoking transformations
        { ingredient: "Banana", replaces: "Cyclopean (has priority over Energizing)", creates: "Thought-Provoking" },
        { ingredient: "Banana", replaces: "Energizing", creates: "Thought-Provoking" },
        { ingredient: "Cuke", replaces: "Gingeritis", creates: "Thought-Provoking" },
        { ingredient: "Iodine", replaces: "Refreshing", creates: "Thought-Provoking" },
        
        // Toxic transformations
        { ingredient: "Chili", replaces: "Munchies", creates: "Toxic" },
        { ingredient: "V*agra", replaces: "Disorienting", creates: "Toxic" },
        { ingredient: "Flu Medicine", replaces: "Euphoric", creates: "Toxic" },
        { ingredient: "Mega Bean", replaces: "Slippery", creates: "Toxic" },
        { ingredient: "Motor Oil", replaces: "Euphoric", creates: "Toxic" },
        { ingredient: "Paracetamol", replaces: "Glowing", creates: "Toxic" },
        
        // Tropic Thunder transformations
        { ingredient: "Battery", replaces: "Munchies", creates: "Tropic Thunder" },
        { ingredient: "Chili", replaces: "Anti-Gravity", creates: "Tropic Thunder" },
        { ingredient: "Gasoline", replaces: "Sneaky", creates: "Tropic Thunder" },
        { ingredient: "Paracetamol", replaces: "Toxic", creates: "Tropic Thunder" },
        
        // Zombifying transformations
        { ingredient: "Battery", replaces: "Euphoric (when Electrifying isn't already in the mix)", creates: "Zombifying" }
    ],
    
    effectLimit: 8
};

// Export for use in other files
if (typeof module !== 'undefined') {
    module.exports = { gameData };
}
