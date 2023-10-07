export interface Duck{
name: string;
numLegs:number;
makeSound:(sound:string)=>void;
}

const duck1={
    name:'huey',
    numLegs:2,
    makeSound:(sound: any)=>console.log(sound)
}
const duck2={
    name:'duey',
    numLegs:2,
    makeSound:(sound: any)=>console.log(sound)
}
duck1.makeSound('quack');
duck2.makeSound('sound');
export const ducks=[duck1,duck2] 

