
import shipFactory from "./modules/shipFactory";

let carrier = shipFactory('carrier', 5);
let battleship = shipFactory('battleship', 4);
let destroyer = shipFactory('destroyer', 3);
let submarine = shipFactory('submarine', 3);
let patrol_boat = shipFactory('patrol boat', 2);