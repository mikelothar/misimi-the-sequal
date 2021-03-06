export default function setupMap(game) {
  const g = game

  // a simple background
  g.add.image(0, 0, 'sky').setScale(20, 4)
  
  const map = g.make.tilemap({ key: 'map' })
  const groundTiles = map.addTilesetImage('tiles')
  g.groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0)
  g.groundLayer.setCollisionByExclusion([-1])
}
