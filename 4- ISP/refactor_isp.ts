interface Animal {
  eat(): void;
  sleep(): void;
}

interface Bird extends Animal {
  fly(): void;
}

class Bird implements Bird {
  eat(): void {
    console.log('The bird is eating');
  }

  sleep(): void {
    console.log('The bird is sleeping');
  }

  fly(): void {
    console.log('The bird is flying');
  }
}
