class Base{
    test(){
        console.log("base");
        return;
    }
}
class Derived extends Base{
    test(){
        super.test();
        console.log("Derived");
    }
}
const A = new Derived();
A.test();
/*output:base
        Derived*/