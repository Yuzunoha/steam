'use strict';

const data = [
  ['2021-05-27', 'Port Royale 3', '購入JCB **02', 500],
  ['2021-05-21', 'Outer Wilds', '購入JCB **02', 1542],
  ['2021-05-18', 'Crypt of the NecroDancerSpace Haven', '購入JCB **02', 2170],
  ['2021-05-15', 'TerrariaMainframe DefendersProject Wingman', '購入JCB **02', 3073],
  ['2021-05-10', 'American Truck Simulator Euro Truck Simulator 2', '購入JCB **02', 2569],
  ['2021-05-09', 'Enter the GungeonThe Elder Scrolls V: Skyrim Special Edition', '購入JCB **02', 2840],
  ['2021-05-05', 'WarpipsLearning Factory', '購入JCB **02', 2704],
  ['2021-05-02', 'NieR:Automata&trade; Game of the YoRHa Edition', '購入JCB **02', 2640],
  ['2021-04-27', 'Tales of Vesperia: Definitive Edition', '購入JCB **02', 1254],
  ['2021-04-27', 'DEATH STRANDINGDarkest Dungeon JPStar RenegadesLast Evil', '購入JCB **02', 6139],
  ['2021-04-18', 'Voxel TycoonOthercideDead CellsIris and the giant', '購入JCB **02', 7366],
  ['2021-03-07', '魔界戦記ディスガイア5Disgaea 5 Complete Digital Art Book', '購入Visa **39', 1735],
  ['2021-02-12', 'Persona 4 Golden - Digital Deluxe EditionOKAMI HD / 大神 絶景版', '購入Visa **39', 3259],
  ['2021-02-10', 'RimWorld', '購入Visa **39', 3600],
  ['2021-02-08', 'Dyson Sphere Program', '購入Visa **39', 2050],
  ['2020-12-26', 'ASTRONEERkiller7killer7: Digital Art Bookletkiller7: 2018 Remastered Original Soundtrack', '購入Visa **39', 3316],
  ['2020-12-25', 'Slay the Spire', '購入Visa **39', 1285],
  ['2020-11-08', 'Surviving Mars: Digital Deluxe Edition', '購入Visa **39', 1394],
  ['2020-10-31', 'Algo BotSpaceChemInfinifactoryTIS-100Opus MagnumEXAPUNKSMOLEK-SYNTEZ', '購入Visa **39', 3763],
  ['2020-10-30', 'Kerbal Space Program', '購入Visa **39', 995],
  ['2020-10-29', 'Transport Fever', '購入Visa **39', 927],
  ['2020-10-23', 'FrostpunkSHENZHEN I/O', '購入Visa **39', 2530],
  ['2020-10-20', 'Automachef', '購入Visa **39', 516],
  ['2020-10-04', 'Battlefield 4™ Premium Edition', '購入Visa **39', 860],
  ['2020-10-03', 'Stellaris', '購入Visa **39', 3980],
  ['2020-10-01', 'FTL: Faster Than Light', '購入Visa **39', 980],
  ['2020-07-07', 'XCOM 2: Digital DeluxeXCOM: CompleteAutonauts', '購入Visa **39', 3633],
  ['2020-05-12', 'Software Inc.', '購入Visa **39', 1380],
  ['2020-05-05', 'Lobotomy Corporation | Monster Management SimulationACE COMBAT 7: SKIES UNKNOWN Deluxe Edition', '購入Visa **39', 4951],
  ['2020-01-24', 'Little Big Workshop', '購入Visa **39', 1640],
  ['2020-01-12', 'Dead or School', '購入Visa **39', 1000],
  ['2020-01-01', 'METAL GEAR SURVIVE Release Package', '購入Visa **39', 2191],
  ['2019-12-05', 'Mindustry', '購入Visa **39', 620],
  [
    '2019-11-30',
    "Oxygen Not IncludedFallout 4: Game of the Year EditionMETAL GEAR SOLID V: GROUND ZEROES + THE PHANTOM PAINCities: Skylines Deluxe Edition.hack//G.U. Last RecodeProject HighrisePrison ArchitectSid Meier's Civilization VI - Digital DeluxeHearts of Iron IV: Cadet EditionRise of IndustryPlanet Coaster Released",
    '購入Visa **39',
    16589,
  ],
  ['2019-11-14', 'Startup Company', '購入Visa **39', 1320],
  ['2019-01-09', '7 Billion Humans Post-Launch', '購入Visa **39', 1520],
  ['2018-11-29', 'A-Train PC Classic / みんなのA列車で行こうPC', '購入Visa **39', 5800],
  ['2018-11-23', 'Human Resource Machine', '購入Visa **39', 686],
  ['2018-11-09', 'Factorio', '購入Visa **39', 3000],
  ['2017-12-20', 'TINY METAL', '購入Visa **39', 2480],
  ['2017-08-27', 'The Suffering of Larina', '購入Visa **39', 398],
  ['2016-03-26', 'DARK SOULS™ II: Scholar of the First Sin', '購入Visa **39', 5200],
];

const getData = () => {
  /* 2021年に限定する */
  return data.filter((record) => 2021 === Number(record[0].split('-')[0]));
};

module.exports = getData;
