var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');

module.exports.loop = function () {

    for (var name in Memory.creeps){
        if(!Game.creeps[name]){
            delete Memory.creeps[name];
            console.log('Cleaning non-existing creep memory: ', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairs: ' + repairers.length);

    var source = Game.spawns['Aiur'].room.find(FIND_SOURCES);

    if(source[0].energy <= 400 || source[1].energy <= 400 || Game.spawns['Aiur'].room.controller.ticksToDowngrade < 4000 || harvesters.length == 0 || upgraders.length == 0){

        Game.notify('Zasilanie awaryjne' + Game.spawns['Aiur'].room.name);

        if (harvesters.length < 2){
            var newHarv00 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, MOVE], undefined, {role: 'harvester'} );
            console.log('Spawning new harvester: ' + newHarv00);
            var temp2 = 1;
        }

        if (upgraders.length < 1 && temp2!=0){
            var newUpgr01 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, MOVE], undefined, {role: 'upgrader'} );
            console.log('Spawning new upgrader: ' + newUpgr01);
        }
    }

    if(Game.spawns['Aiur'].room.controller.level == 1){

        if (harvesters.length < 2){
            var newHarv00 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, MOVE], undefined, {role: 'harvester'} );
            console.log('Spawning new harvester: ' + newHarv00);
            var temp = 1;
        }

        if (upgraders.length < 1 && temp!=1){
            var newUpgr01 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, MOVE], undefined, {role: 'upgrader'} );
            console.log('Spawning new upgrader: ' + newUpgr01);
        }
    }

    if (Game.spawns['Aiur'].room.controller.level < 3 && Game.spawns['Aiur'].room.controller.level >= 2){

        if(Game.spawns['Aiur'].room.find(FIND_MY_CONSTRUCTION_SITES).length == 0){
            Game.spawns['Aiur'].room.createConstructionSite(4,5,STRUCTURE_EXTENSION);
            Game.spawns['Aiur'].room.createConstructionSite(5,5,STRUCTURE_EXTENSION);
            Game.spawns['Aiur'].room.createConstructionSite(4,6,STRUCTURE_EXTENSION);
            Game.spawns['Aiur'].room.createConstructionSite(5,6,STRUCTURE_EXTENSION);
            Game.spawns['Aiur'].room.createConstructionSite(4,7,STRUCTURE_EXTENSION);
        }

        if (Game.spawns['Aiur'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION }}).length == 0){
            if (builders.length < 2){
                var newBuild01 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newBuild01);
            }
        }

        if (Game.spawns['Aiur'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION }}).length == 1){
            if (builders.length < 3){
                var newBuild02 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newBuild02);
            }
        }

        if (Game.spawns['Aiur'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION }}).length < 5 && Game.spawns['Aiur'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION }}).length <=2){


            if (harvesters.length < 2){
                var newHarv03 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'harvester'} );
                console.log('Spawning new harvester: ' + newHarv03);
            }

            if (upgraders.length < 2){
                var newUpgr03 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'} );
                console.log('Spawning new upgrader: ' + newUpgr03);
            }
            if (builders.length < 3){
                var newBuild03 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newBuild03);
            }
        }

        if (Game.spawns['Aiur'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION }}).length < 5 && Game.spawns['Aiur'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION }}).length > 2){


            if (harvesters.length < 2){
                var newHarv03 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'harvester'} );
                console.log('Spawning new harvester: ' + newHarv03);
            }

            if (upgraders.length < 2){
                var newUpgr03 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'} );
                console.log('Spawning new upgrader: ' + newUpgr03);
            }
            if (builders.length < 3){
                var newBuild03 = Game.spawns['Aiur'].createCreep( [WORK,  CARRY, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newBuild03);
            }
        }

        if (Game.spawns['Aiur'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION }}).length == 5){


            if (harvesters.length < 3){
                var newHarv04 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'harvester'} );
                console.log('Spawning new harvester: ' + newHarv04);
            }

            if (upgraders.length < 3){
                var newUpgr04 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'upgrader'} );
                console.log('Spawning new upgrader: ' + newUpgr04);
            }

            if (builders.length < 2){
                var newBuild04 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newBuild04);
            }

            if (repairers.length < 2){
                var newRep04 = Game.spawns['Aiur'].createCreep( [WORK, CARRY, MOVE], undefined, {role: 'repairer'});
                console.log('Spawning new repo: ' + newRep04);
            }

            if (Game.spawns['Aiur'].room.find(FIND_MY_CONSTRUCTION_SITES, {filter: { structureType: STRUCTURE_ROAD}}).length==0){

                var goals = _.map(Game.spawns['Aiur'].room.find(FIND_SOURCES), function(source) {
                    // We can't actually walk on sources-- set `range` to 1
                    // so we path next to it.
                    return { pos: source.pos, range: 1 };
                });

                var goal2 = Game.spawns['Aiur'].room.controller.pos;

                var ret1 = PathFinder.search(
                    Game.spawns['Aiur'].pos, goals[0]);

                var ret3 = PathFinder.search(
                    Game.spawns['Aiur'].pos, goals[1]);

                var ret2 = PathFinder.search(
                    Game.spawns['Aiur'].pos, {pos: goal2, range: 1} );



                for (i=0; i<ret1.path.length; i++ ){
                    Game.spawns['Aiur'].room.createConstructionSite(ret1.path[i],STRUCTURE_ROAD);
                }

                for (i=0; i<ret3.path.length; i++ ){
                    Game.spawns['Aiur'].room.createConstructionSite(ret3.path[i],STRUCTURE_ROAD);
                }

                for (i=0; i<ret2.path.length; i++ ){
                    Game.spawns['Aiur'].room.createConstructionSite(ret2.path[i],STRUCTURE_ROAD);
                }


            }

        }

    }


    if (Game.spawns['Aiur'].room.controller.level == 3){



        if (harvesters.length < 2){
            var newHarv05 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'harvester'} );
            console.log('Spawning new harvester: ' + newHarv05);
        }

        if (upgraders.length < 3){
            var newUpgr05 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'upgrader'} );
            console.log('Spawning new upgrader: ' + newUpgr05);
        }
        if (builders.length < 2){
            var newBuild05 = Game.spawns['Aiur'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newBuild05);
        }
    }

    if (Game.spawns['Aiur'].spawning){
        var spawningCreep = Game.creeps[Game.spawns['Aiur'].spawning.name];
        Game.spawns['Aiur'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Aiur'].pos.x + 1,
            Game.spawns['Aiur'].pos.y,
            { align: 'left', opacity: 0.8
            });
    }

    for (var name in Game.creeps){

        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }

        if (creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }

        if (creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'repairer'){
            roleRepairer.run(creep);
        }
    }
}