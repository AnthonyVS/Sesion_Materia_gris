import {Shape} from './shape';

class Rectangle implements Shape {
    width: number;
    height: number;
    
    area(): number {
    return this.width * this.height;
    }
}