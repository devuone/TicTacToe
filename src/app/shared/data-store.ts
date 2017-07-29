import { Block } from '../block/block';

export var BLOCKS_DATA: Block[] = [
	new Block(1,1,''),
	new Block(2,1,''),
	new Block(3,1,''),
	new Block(1,2,''),
	new Block(2,2,''),
	new Block(3,2,''),
	new Block(1,3,''),
	new Block(2,3,''),
	new Block(3,3,''),
];

  export var WINNING_SEQUENCES = [
  [new Block(1,1),new Block(2,1),new Block(3,1)],
  [new Block(1,2),new Block(2,2),new Block(3,2)],
  [new Block(1,3),new Block(2,3),new Block(3,3)],
  [new Block(1,1),new Block(1,2),new Block(1,3)],
  [new Block(2,1),new Block(2,2),new Block(2,3)],
  [new Block(3,1),new Block(3,2),new Block(3,3)],
  [new Block(1,1),new Block(2,2),new Block(3,3)],
  [new Block(3,1),new Block(2,2),new Block(1,3)]
  ];