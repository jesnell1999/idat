// Test system 🧪⚡
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// Hero class configuration 🏰⚔️
const heroClasses = {
  frontend: {
    health: 120,
    coding: 90,
    creativity: 95,
    debugging: 70,
    specialty: "Interfaces Mágicas 🎨"
  },
  backend: {
    health: 120,
    coding: 95,
    creativity: 70,
    debugging: 90,
    specialty: "Lógica del Servidor 🔧"
  },
  fullstack: {
    health: 110,
    coding: 85,
    creativity: 85,
    debugging: 85,
    specialty: "Maestro Universal ⚡"
  },
  devops: {
    health: 115,
    coding: 80,
    creativity: 75,
    debugging: 100,
    specialty: "Automatización Épica 🚀"
  }
};

// Heroes league 👥🏆
const heroesLeague = [];

// ✨ Create your epic functions here ✨

// 🌟 Epic Hero Creation ⚡
const createHero = (name, heroClass) => {
  if (name == false) return null;

  return {
    ...heroClasses[heroClass.toLowerCase()],
    name: name.trim(),
    class: heroClass.toLowerCase(),
    level: 1,
    experience: 0,
    victories: 0
  };
};

// 🏰 Epic Hero Recruitment 👥
const recruitHero = (hero) => {
  if (!hero) return;

  const existingHero = heroesLeague.find(h => h.name === hero.name);
  if (existingHero) return;

  heroesLeague.push(hero);
};

// 💪 Magical Hero Training ⚡
const trainHero = (heroName) => {
  if (!heroName) return false;

  const hero = heroesLeague.find(h => h.name === heroName);
  if (!hero) return false;

  const statsToImprove = ['health', 'coding', 'creativity', 'debugging'];
  statsToImprove.forEach(stat => {
    const improvement = Math.floor(Math.random() * 5) + 1;
    hero[stat] += improvement;
  });

  hero.experience += 10;

  const newLevel = Math.floor(hero.experience / 50) + 1;
  if (newLevel > hero.level) {
    hero.level = newLevel;
  }

  return true;
};

// ⚔️ Epic battle against evil bugs 🐛
const fightBug = (heroName, bugDifficulty) => {
  if (!heroName || typeof heroName !== 'string' || typeof bugDifficulty !== 'number') {
    return {
      victory: false,
      reason: "Parámetros de batalla inválidos ⚠️"
    };
  }

  if (bugDifficulty < 1) {
    return {
      victory: false,
      reason: "La dificultad del bug debe ser mayor a 0 🐛"
    };
  }

  const hero = heroesLeague.find(h => h.name === heroName);
  if (!hero) {
    return {
      victory: false,
      reason: `El héroe ${heroName} no existe en la liga 🏰`
    };
  }

  const heroPower = (hero.coding + hero.debugging) / 2;
  const bugPower = bugDifficulty * 10;
  const victory = heroPower > bugPower;

  const battleResult = {
    hero: hero.name,
    heroPower,
    bugDifficulty,
    bugPower,
    victory
  };

  if (victory) {
    const experienceGained = bugDifficulty * 5;

    hero.victories++;
    hero.experience += experienceGained;

    const newLevel = Math.floor(hero.experience / 50) + 1;
    if (newLevel > hero.level) {
      hero.level = newLevel;
    }

    battleResult.experienceGained = experienceGained;
    battleResult.message = `🏆 ¡${hero.name} ha derrotado al Bug nivel ${bugDifficulty}! ⚔️`;
  } else {
    battleResult.message = `💀 ${hero.name} fue derrotado por el Bug nivel ${bugDifficulty}... 🐛`;
  }

  return battleResult;
};

// 📊 League administrative statistics 🏆
const getLeagueStats = () => {
  const totalHeroes = heroesLeague.length;
  const averageLevel = heroesLeague.reduce((sum, hero) => sum + hero.level, 0) / totalHeroes || 0;
  const totalVictories = heroesLeague.reduce((sum, hero) => sum + hero.victories, 0);
  const topHero = heroesLeague.reduce((best, current) =>
    current.victories > (best?.victories || 0) ? current : best, null);

  return {
    totalHeroes,
    averageLevel,
    totalVictories,
    topHero
  };
};

// 🥇 Epic Hero Ranking 👑
const getHeroRanking = () => {
  return [...heroesLeague]
    .sort((a, b) => {
      if (b.victories !== a.victories) {
        return b.victories - a.victories;
      }
      return b.level - a.level;
    })
    .slice(0, 3);
};

// 📜 Epic report for chroniclers 🌟
const generateEpicReport = () => {
  if (heroesLeague.length === 0) {
    alert("🏰 El Reino está vacío... ¡No hay héroes registrados! 😢\n\n🌟 ¡Recluta algunos héroes primero! ⚔️");
    return;
  }

  const stats = getLeagueStats();
  const ranking = getHeroRanking();

  let report = "🏰 ═══ REPORTE ÉPICO DEL REINO ═══ 🏰\n\n";

  report += "📊 ESTADÍSTICAS DEL REINO:\n";
  report += `👥 Héroes Totales: ${stats.totalHeroes}\n`;
  report += `📈 Nivel Promedio: ${stats.averageLevel.toFixed(1)}\n`;
  report += `🏆 Victorias Totales: ${stats.totalVictories}\n`;
  report += `👑 Héroe Legendario: ${stats.topHero?.name || 'Ninguno'}\n\n`;

  report += "🏆 HALL DE LA FAMA:\n";
  const medals = ["🥇", "🥈", "🥉"];
  ranking.forEach((hero, index) => {
    report += `${medals[index]} ${hero.name.toUpperCase()} (${hero.class.charAt(0).toUpperCase() + hero.class.slice(1)})\n`;
    report += `   🌟 Nivel ${hero.level} | ⚔️ ${hero.victories} Victorias\n`;
  });

  if (ranking.length === 0) {
    report += "   ⚠️ ¡Ningún héroe ha ganado batallas aún!\n";
  }
  alert(report);
  report = '';
  report += "⚔️ TODOS LOS HÉROES DEL REINO:\n";
  heroesLeague.forEach(hero => {
    report += `🛡️ ${hero.name} - ${hero.class.charAt(0).toUpperCase() + hero.class.slice(1)}\n`;
    report += `   📊 Nivel: ${hero.level} | 🌟 Exp: ${hero.experience} | 🏆 Victorias: ${hero.victories}\n`;
    report += `   ❤️ Vida: ${hero.health} | 💻 Código: ${hero.coding} | 🎨 Creatividad: ${hero.creativity} | 🐛 Debug: ${hero.debugging}\n`;
    report += `   ✨ ${hero.specialty}\n\n`;
    alert(report);
    report = '';
  });

  if (stats.totalVictories > stats.totalHeroes * 2) {
    report += "🎉 ¡REINO PRÓSPERO! ¡Los héroes dominan el Reino Digital! 🌟👑";
  } else if (stats.totalVictories > 0) {
    report += "⚔️ ¡Reino en crecimiento! ¡Los héroes están fortaleciéndose! 💪🔥";
  } else {
    report += "🌱 ¡Reino novato! ¡Es hora de que los héroes demuestren su valor! ⚡";
  }

  alert(report);
};

// 🎮 Complete epic adventure ✨
const runEpicDemo = () => {
  alert("🎮 ¡BIENVENIDO AL REINO DE LOS HÉROES PROGRAMADORES! 🏰✨\n\n🐛 Los Bugs Malignos han invadido nuestro Reino Digital...\n⚔️ ¡Necesitamos formar una liga épica de héroes!\n\n🌟 ¡Tu aventura legendaria comienza AHORA! 🚀");

  const epicHeroes = [
    { name: "Elliot", class: "frontend" },
    { name: "Fernanda", class: "backend" },
    { name: "Mijael", class: "fullstack" },
    { name: "Fe", class: "devops" },
    { name: "Doky", class: "frontend" },
    { name: "Chocolate", class: "backend" },
    { name: "Amorosa", class: "fullstack" },
    { name: "Chanchitos", class: "devops" }
  ];

  alert("🌟 ¡INVOCANDO HÉROES LEGENDARIOS! 🌟\n\n⚡ Los cristales mágicos brillan...\n🔮 La magia ancestral despierta...\n✨ ¡Los héroes emergen de la luz!");

  let heroesCreated = [];
  epicHeroes.forEach(heroData => {
    const hero = createHero(heroData.name, heroData.class);
    if (hero) {
      recruitHero(hero);
      heroesCreated.push(`⚔️ ${hero.name} (${hero.class.charAt(0).toUpperCase() + hero.class.slice(1)}) - ${hero.specialty}`);
    }
  });

  alert(`🏰 ¡LIGA ÉPICA FORMADA! 🏰\n\n${heroesCreated.length} héroes se han unido a tu causa:\n\n${heroesCreated.join('\n')}\n\n🌟 ¡El Reino Digital tiene esperanza! ⚡`);

  alert("💪 ¡FASE DE ENTRENAMIENTO ÉPICO! 💪\n\n🏋️ Los héroes se preparan para la batalla...\n⚡ Sus habilidades crecerán bajo tu guía...\n🌟 ¡Que comience el entrenamiento!");

  let trainingResults = "🏋️ RESULTADOS DEL ENTRENAMIENTO:\n\n";
  heroesLeague.forEach(hero => {
    const trainingAttempts = [1, 2, 3][Math.floor(Math.random() * 3)];
    let successes = 0;

    for (let i = 0; i < trainingAttempts; i++) {
      if (trainHero(hero.name)) {
        successes++;
      }
    }

    trainingResults += `⚡ ${hero.name}: #${successes} entrenamientos exitosos (Nivel ${hero.level})\n`;
  });

  trainingResults += "\n🌟 ¡Los héroes están más fuertes que nunca! 💪";
  alert(trainingResults);

  alert("⚔️ ¡BATALLA FINAL CONTRA LOS BUGS MALIGNOS! ⚔️\n\n🐛👹 Los enemigos del código atacan...\n🏰 ¡Defiende el Reino Digital!\n⚡ ¡Que la batalla épica comience!");

  const bugDifficulties = [2, 3, 4, 5, 8, 9, 11, 13];
  let battleReport = "🔥 REPORTE DE BATALLA ÉPICA:\n\n";
  let totalBattles = 0;
  let totalWins = 0;

  heroesLeague.forEach((hero, index) => {
    const difficulty = bugDifficulties[Math.floor(Math.random() * bugDifficulties.length)];
    const result = fightBug(hero.name, difficulty);

    const resultIcon = result.victory ? '🏆' : '💀';
    battleReport += `${resultIcon} ${result.message}\n`;

    if (result.victory && result.experienceGained) {
      battleReport += `   ✨ +${result.experienceGained} EXP! (Nivel ${hero.level})\n`;
    }
    battleReport += `   ⚡ Poder: ${result.heroPower?.toFixed(1) || 'N/A'} vs Bug: ${result.bugPower || 'N/A'}\n\n`;

    totalBattles++;
    if (result.victory) totalWins++;
    alert(battleReport);
    battleReport = '';
  });

  const winRate = ((totalWins / totalBattles) * 100).toFixed(1);
  battleReport += `📊 RESULTADO FINAL: ${totalWins}/${totalBattles} victorias (${winRate}%)\n\n`;

  if (winRate >= 75) {
    battleReport += "🎉 ¡VICTORIA ÉPICA! ¡El Reino Digital está a salvo! 👑✨";
  } else if (winRate >= 50) {
    battleReport += "⚔️ ¡Batalla reñida! ¡Los héroes demostraron su valor! 🔥💪";
  } else {
    battleReport += "💀 Derrota temporal... ¡Pero los héroes volverán más fuertes! 🌟⚡";
  }

  alert(battleReport);

  const finalStats = getLeagueStats();
  let finalMessage = "🎊 ¡AVENTURA COMPLETADA! 🎊\n\n";
  finalMessage += "🏰 ESTADO FINAL DEL REINO:\n";
  finalMessage += `👥 Héroes en la Liga: ${finalStats.totalHeroes}\n`;
  finalMessage += `📈 Nivel Promedio: ${finalStats.averageLevel.toFixed(1)}\n`;
  finalMessage += `🏆 Victorias Totales: ${finalStats.totalVictories}\n`;
  finalMessage += `👑 Héroe Legendario: ${finalStats.topHero?.name || 'Ninguno'}\n\n`;

  if (finalStats.totalVictories >= 5) {
    finalMessage += "🌟 ¡LEYENDA FORJADA! ¡Tu nombre será recordado por siempre! 👑⚡\n";
    finalMessage += "🎖️ ¡Has salvado el Reino Digital! 🏰✨";
  } else {
    finalMessage += "⚔️ ¡Un buen comienzo! ¡La leyenda apenas comienza! 🌱🔥\n";
    finalMessage += "🚀 ¡Entrena más y conquista nuevos desafíos! 💪";
  }

  alert(finalMessage);

  alert("📜 Generando el Pergamino de la Leyenda...\n\n✨ Los cronistas documentan tu épica aventura...");
  generateEpicReport();

  alert("🎮 ¡GRACIAS POR JUGAR! 🎮\n\n🌟 El Reino Digital te espera para nuevas aventuras...\n\n💻 ¡Revisa la consola para detalles técnicos épicos! 🚀");
};

// Automatic tests 🤖🧪
const testRPGSystem = () => {
  // Test 1: Hero creation works correctly 🌟
  const fernanda = createHero("Fernanda", "frontend");
  recordTest("o2.5.1 hero creation works correctly",
    fernanda?.name === "Fernanda" && fernanda?.coding === 90 &&
    fernanda?.level === 1 && fernanda?.experience === 0);

  // Test 2: Recruitment and training work 🏰💪
  recruitHero(fernanda);
  const mijael = createHero("Mijael", "backend");
  recruitHero(mijael);
  const trainSuccess = trainHero("Mijael");
  recordTest("o2.5.2 recruitment and training work",
    heroesLeague.length === 2 && mijael?.experience === 10 && trainSuccess === true);

  // Test 3: Battle and statistics systems work ⚔️📊
  const battleResult = fightBug("Fernanda", 5);
  const stats = getLeagueStats();
  recordTest("o2.5.3 battle and stats systems work",
    battleResult?.hasOwnProperty("victory") &&
    stats?.totalHeroes === 2 && typeof stats?.averageLevel === "number");

  // Test 4: Input validation works 🛡️
  const invalidHero = createHero("", "invalidClass");
  const invalidTrain = trainHero("NonExistent");
  const invalidBattle = fightBug("NonExistent", -1);
  recordTest("o2.5.4 input validation works",
    invalidHero === null && invalidTrain === false && invalidBattle?.victory === false);

  // Test 5: Return types are correct ⚡
  const ranking = getHeroRanking();
  recordTest("o2.5.5 return types are correct",
    typeof stats === "object" && Array.isArray(ranking) && ranking.length <= 3);
};

// Run automatic tests 🤖🧪
testRPGSystem();

// Show results 📊✨
console.log('=== 🧪 Resultados de Tests del Reino ===');
testResults.forEach(result => console.log(result));

// Show how to start the epic adventure 🚀
console.log('\n🎮 Para iniciar la aventura épica, ejecuta: runEpicDemo() 🚀, pero comenta testRPGSystem() 🧪');
// runEpicDemo();