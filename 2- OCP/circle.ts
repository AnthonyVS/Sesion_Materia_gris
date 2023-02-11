import {Shape} from './shape';

class Circle implements Shape {
    radius: number;
    
    area(): number {
    return Math.PI * this.radius * this.radius;
    }
}