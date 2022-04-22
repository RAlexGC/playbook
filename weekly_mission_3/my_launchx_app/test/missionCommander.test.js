const MissionCommander = require('./../app/missionCommander')

describe("Unit Test para clase Mission Commander", () => {
    test('Creación de objeto mission commander', () => {
        	const myMissionCommander = new MissionCommander('McFly')
            expect(myMissionCommander.name).toBe('McFly')
    })
})