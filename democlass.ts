class MyClass {
    private x:number;
    private y:number;
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    add():number {
        return this.x + this.y;
    }
    sub():number {
        return this.x - this.y;
    }
}
let obj =new MyClass(10,20);
console.log(`Add = ${obj.add()}`);
console.log(`Sub = ${obj.sub()}`);
