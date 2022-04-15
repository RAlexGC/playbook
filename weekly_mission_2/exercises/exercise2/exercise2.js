const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

/* 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH */
console.log("*** Ejercicio 2-1. Imprimir nombre. ***");
explorers.forEach((explorer) => console.log(explorer.name));

/* 2. Imprime el stack de cada explorer, usa FOR EACH */
console.log("\n *** Ejercicio 2-2. Imprimir stack. ***");
explorers.forEach((explorer) => console.log(explorer.stack));

/* 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP */
console.log("\n *** Ejercicio 2-3. Crear nueva lista con MAP. ***");
const stacks = explorers.map((explorer) => explorer.stack);
console.log(stacks);

/* 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER */
console.log("\n *** Ejercicio 2-4. Filtrar lista. ***");
const jsinstack = explorers.filter((explorer) => explorer.stack.includes('js'));
console.log(jsinstack);

/* 5. Busca el primer explorer que sea de la CDMX, usa FIND */
console.log("\n *** Ejercicio 2-5. Encontrar en la lista. ***");
const cdmx = explorers.find((explorer) => explorer.city.includes('CDMX'));
console.log(`El primer explorer de CDMX es: ${cdmx.name}`);

/* 6. Obtén la suma de todos los exercises_completed, usa REDUCE */
console.log("\n *** Ejercicio 2-6. Obtener la suma. ***");
const tot_ex = explorers.reduce((total,explorer) => total + explorer.exercises_completed, 0);
console.log(`El total de ejercicios completados es: ${tot_ex}`)

/* 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME */
console.log("\n *** Ejercicio 2-7. Validación de información SOME. ***");
const efisTrue = explorers.some((explorer) => (explorer.missions.onboarding.exercisesFinished === true)||(explorer.missions.frontend.exercisesFinished === true));
console.log(`Hay algunos explorers que ya completaron los ejercicios: ${efisTrue}`);

/* 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY. */
console.log("\n *** Ejercicio 2-8. Validación de información EVERY. ***");
const oisfTrue = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
console.log(`Todos los explorers han completado el onboarding: ${oisfTrue}`);