import {Shape} from './shape';

class AreaCalculator {
    shapes: Shape[];
    
    calculate(): number {
    let total = 0;
    for (let shape of this.shapes) {
        total += shape.area();
      }
      
      return total;
    }
}   