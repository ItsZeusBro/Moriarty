class RegExGen{
    constructor(){

    }
}

class IntegerSpot{
    constructor(sign="+|-", value="[0-9]+"){
        this.sign=sign
        this.value=value
        this.literal=this.build()
    }
    build(){

    }
}
class FloatSpot{
    constructor(flS="/.[0-9]+"){
        this.flS=flS
    }
    build(){

    }
}

class ESpot{
    constructor(sign="+|-", value="[0-9]+"){
        this.e="(e|E)"
        this.intSpot=this.IntegerSpot(sign, value);
    }
    build(){

    }
}
class ExpSpot{
    constructor(ns){
        this.exp="^";
        this.ns=ns
    }
    build(){

    }
}

class NumberString{
    constructor(pre="", post="", intSpot, floatSpot, eSpot="", expSym="^?"){
        //all scientific numbers have an intSpot, floatSpot, and an eSpot
        //That's the most expressive number
       // Pre and post patterns can help us build up more expressive statements 
       //exp is just another numberstring prepended with a carot ^
    }
    build(){

    }
}

