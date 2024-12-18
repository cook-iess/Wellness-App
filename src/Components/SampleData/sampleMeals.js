export const sampleMeals = [
    {
        id: 1,
        name: "Scrambled Eggs",
        description: "Fluffy scrambled eggs cooked with a pinch of salt and pepper.",
        images: ["https://www.allrecipes.com/thmb/0VXMwCY9RVNrNvWcF_9v0iZpNqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg"],
        mealType: "breakfast",
        nutritionContent: {
            protein: 12,
            carbs: 1,
            fat: 10,
            fiber: 0,
        },
        calorieContent: 140,
        ingredients: [
            { ingredient: "Eggs", quantity: "2 large" },
            { ingredient: "Salt", quantity: "to taste" },
            { ingredient: "Pepper", quantity: "to taste" },
        ],
        preparation: "Whisk the eggs with salt and pepper, then cook in a non-stick skillet over medium heat until fluffy.",
        goalType: ["Building Muscle"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 2,
        name: "Grilled Chicken Salad",
        description: "A healthy salad with grilled chicken, mixed greens, and vinaigrette.",
        images: ["https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-salad-lead-6628169550105.jpg"],
        mealType: "lunch",
        nutritionContent: {
            protein: 30,
            carbs: 10,
            fat: 15,
            fiber: 3,
        },
        calorieContent: 350,
        ingredients: [
            { ingredient: "Grilled Chicken Breast", quantity: "150g" },
            { ingredient: "Mixed Greens", quantity: "2 cups" },
            { ingredient: "Olive Oil", quantity: "2 tbsp" },
            { ingredient: "Balsamic Vinegar", quantity: "1 tbsp" },
        ],
        preparation: "Combine mixed greens, sliced grilled chicken, and dress with olive oil and balsamic vinegar.",
        goalType: ["Weight Loss", "Healthy Lean Body"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 3,
        name: "Quinoa Bowl",
        description: "Nutritious quinoa bowl topped with vegetables and avocado.",
        images: ["https://veganheaven.org/wp-content/uploads/2020/10/Quinoa-Bowl-6.jpg"],
        mealType: "lunch",
        nutritionContent: {
            protein: 10,
            carbs: 40,
            fat: 15,
            fiber: 5,
        },
        calorieContent: 400,
        ingredients: [
            { ingredient: "Quinoa", quantity: "1 cup cooked" },
            { ingredient: "Cherry Tomatoes", quantity: "1/2 cup" },
            { ingredient: "Avocado", quantity: "1/2" },
            { ingredient: "Cucumber", quantity: "1/2" },
        ],
        preparation: "Mix cooked quinoa with diced cherry tomatoes, cucumber, and avocado. Season to taste.",
        goalType: ["Healthy Lean Body"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 4,
        name: "Salmon with Asparagus",
        description: "Baked salmon served with roasted asparagus.",
        images: ["https://playswellwithbutter.com/wp-content/uploads/2023/04/Sheet-Pan-Salmon-and-Asparagus-with-Crispy-Smashed-Potatoes-13.jpg"],
        mealType: "dinner",
        nutritionContent: {
            protein: 25,
            carbs: 10,
            fat: 15,
            fiber: 4,
        },
        calorieContent: 350,
        ingredients: [
            { ingredient: "Salmon Fillet", quantity: "200g" },
            { ingredient: "Asparagus", quantity: "1 cup" },
            { ingredient: "Olive Oil", quantity: "1 tbsp" },
            { ingredient: "Lemon", quantity: "1 slice" },
        ],
        preparation: "Bake salmon at 400°F for 15-20 minutes and roast asparagus with olive oil until tender.",
        goalType: ["Building Muscle"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 5,
        name: "Greek Yogurt Parfait",
        description: "Layered Greek yogurt with granola and mixed berries.",
        images: ["https://beautifuleatsandthings.com/wp-content/uploads/2020/02/Lemon-Berry-Greek-Yogurt-Parfait3.jpg"],
        mealType: "snack",
        nutritionContent: {
            protein: 15,
            carbs: 25,
            fat: 5,
            fiber: 4,
        },
        calorieContent: 250,
        ingredients: [
            { ingredient: "Greek Yogurt", quantity: "1 cup" },
            { ingredient: "Granola", quantity: "1/4 cup" },
            { ingredient: "Mixed Berries", quantity: "1/2 cup" },
        ],
        preparation: "Layer Greek yogurt, granola, and mixed berries in a bowl or cup.",
        goalType: ["Healthy Lean Body"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 6,
        name: "Beef Stir-Fry",
        description: "Tender beef strips stir-fried with bell peppers and broccoli.",
        images: ["https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg"],
        mealType: "dinner",
        nutritionContent: {
            protein: 30,
            carbs: 20,
            fat: 10,
            fiber: 3,
        },
        calorieContent: 400,
        ingredients: [
            { ingredient: "Beef Strips", quantity: "200g" },
            { ingredient: "Bell Peppers", quantity: "1 cup" },
            { ingredient: "Broccoli", quantity: "1 cup" },
            { ingredient: "Soy Sauce", quantity: "2 tbsp" },
        ],
        preparation: "Stir-fry beef strips with bell peppers and broccoli in soy sauce until cooked through.",
        goalType: ["Building Muscle"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 7,
        name: "Avocado Toast",
        description: "Creamy avocado spread on whole-grain toast, topped with salt and pepper.",
        images: ["https://www.eatingwell.com/thmb/PM3UlLhM0VbE6dcq9ZFwCnMyWHI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EatingWell-April-Avocado-Toast-Directions-04-5b5b86524a3d4b35ac4c57863f6095dc.jpg"],
        mealType: "breakfast",
        nutritionContent: {
            protein: 6,
            carbs: 30,
            fat: 15,
            fiber: 7,
        },
        calorieContent: 300,
        ingredients: [
            { ingredient: "Whole Grain Bread", quantity: "1 slice" },
            { ingredient: "Avocado", quantity: "1/2" },
            { ingredient: "Salt", quantity: "to taste" },
            { ingredient: "Pepper", quantity: "to taste" },
        ],
        preparation: "Toast the bread and spread ripe avocado on top. Season with salt and pepper.",
        goalType: ["Weight Loss", "Healthy Lean Body"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 8,
        name: "Chickpea Salad",
        description: "Refreshing salad made with chickpeas, cucumber, and parsley.",
        images: ["https://thedeliciousplate.com/wp-content/uploads/2022/01/Indian-chickpea-salad-10-2.jpg"],
        mealType: "lunch",
        nutritionContent: {
            protein: 10,
            carbs: 30,
            fat: 5,
            fiber: 8,
        },
        calorieContent: 250,
        ingredients: [
            { ingredient: "Chickpeas", quantity: "1 cup, cooked" },
            { ingredient: "Cucumber", quantity: "1, diced" },
            { ingredient: "Parsley", quantity: "1/4 cup, chopped" },
            { ingredient: "Olive Oil", quantity: "2 tbsp" },
            { ingredient: "Lemon Juice", quantity: "1 tbsp" },
        ],
        preparation: "Mix all ingredients in a bowl and dress with olive oil and lemon juice.",
        goalType: ["Weight Loss", "Healthy Lean Body"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 9,
        name: "Pasta Primavera",
        description: "Pasta tossed with seasonal vegetables and olive oil.",
        images: ["https://zardyplants.com/wp-content/uploads/2021/07/Vegan-Pasta-Primavera-04.jpg"],
        mealType: "dinner",
        nutritionContent: {
            protein: 12,
            carbs: 60,
            fat: 8,
            fiber: 5,
        },
        calorieContent: 400,
        ingredients: [
            { ingredient: "Pasta", quantity: "2 cups, cooked" },
            { ingredient: "Mixed Vegetables", quantity: "1 cup" },
            { ingredient: "Olive Oil", quantity: "2 tbsp" },
            { ingredient: "Parmesan Cheese", quantity: "2 tbsp, grated" },
        ],
        preparation: "Cook pasta and toss with sautéed vegetables and olive oil. Sprinkle with Parmesan.",
        goalType: ["Healthy Lean Body"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
    {
        id: 10,
        name: "Fruit Smoothie",
        description: "A refreshing smoothie made with banana, spinach, and almond milk.",
        images: ["https://i.pinimg.com/originals/43/64/68/436468412b38cfd2c5b76a00c8091e46.jpg"],
        mealType: "snack",
        nutritionContent: {
            protein: 4,
            carbs: 30,
            fat: 5,
            fiber: 3,
        },
        calorieContent: 150,
        ingredients: [
            { ingredient: "Banana", quantity: "1" },
            { ingredient: "Spinach", quantity: "1 cup" },
            { ingredient: "Almond Milk", quantity: "1 cup" },
        ],
        preparation: "Blend all ingredients until smooth. Serve chilled.",
        goalType: ["Weight Loss", "Healthy Lean Body"],
        bmiRange: { min: 18.5, max: 30 },
        ageRange: { min: 12, max: 100 },
    },
];
