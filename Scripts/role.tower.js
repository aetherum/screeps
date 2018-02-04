var roleTower = {
    
    /** @param tower **/
    run: function (tower) {

        var hostiles = Game.spawns['Aiur'].room.find(FIND_HOSTILE_CREEPS);
        if(hostiles.length > 0){
            var username = hostiles[0].owner.username;
            Game.notify('User ${username} spotted in room Aiur');
            tower.attack(hostiles[0]));
        }
        else{

            var damagedBuilds = Game.spawns['Aiur'].room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax} );
            if(damagedBuilds.length){
                damagedBuilds.sort( (a,b) => a.hits - b.hits);
                tower.repair(damagedBuilds[0]));
            }

        }

    }
    
    
    
}
module.exports = roleTower;