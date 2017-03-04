/**
 * Created by Xiaotao.Nie on 2017/3/4.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
function NFAtoDFA(beginState,allState,Stateto){

    var usefulState = [];

    function testhasArrayEqual(array1,array2){
        for(var i=0;i<array1.length;i++){
            if(array1[i].length==array2.length){
                array1[i].sort();
                array2.sort();
                for(var j=0;j<array1[i].length;j++){
                    if(array2[j]!=array1[i][j])
                        break;
                }
                if(j === array1[i].length)return true;
            }
        }
        return false;
    }

    function compute(beginState){
        var resultState_a_ = [];
        var resultState_b_ = [];

        for(var ii=0;ii<beginState.length;ii++){
            for(let ii_a=0;ii_a<Stateto[beginState[ii]-1].a.length;ii_a++){
                if(resultState_a_.indexOf(Stateto[beginState[ii]-1].a[ii_a])>=0){}
                else{
                    resultState_a_.push(Stateto[beginState[ii]-1].a[ii_a]);
                }
            }
            for(let ii_b=0;ii_b<Stateto[beginState[ii]-1].b.length;ii_b++){
                if(resultState_b_.indexOf(Stateto[beginState[ii]-1].b[ii_b])>=0){}
                else{
                    resultState_b_.push(Stateto[beginState[ii]-1].b[ii_b]);
                }
            }
        }

        var loop_a_ = 0,loop_b_=0;

        if(!testhasArrayEqual(usefulState,resultState_a_)){
            loop_a_=1;
            usefulState.push(resultState_a_);
        }
        if(!testhasArrayEqual(usefulState,resultState_b_)){
            loop_b_=1;
            usefulState.push(resultState_b_);
        }

        if(!loop_a_){
            if(!loop_b_){
                return;
            }
            compute(resultState_b_);
        }
        else{
            compute(resultState_a_);
            if(!loop_b_){
                return;
            }
            compute(resultState_b_);
        }

    }

    function process(usefulState){
        for(let i=1;i<usefulState.length;i++){
            var tempState = usefulState[i];
            var resultState_a_ = [];
            var resultState_b_ = [];

            // if(i%2)tempState.push(allState[0]);
            // if((i>>1)%2)tempState.push(allState[1]);
            // if((i>>2)%2)tempState.push(allState[2]);
            // if((i>>3)%2)tempState.push(allState[3]);
            // if((i>>4)%2)tempState.push(allState[4]);
            // if((i>>5)%2)tempState.push(allState[5]);

            for(let ii=0;ii<tempState.length;ii++){
                for(let ii_a=0;ii_a<Stateto[tempState[ii]-1].a.length;ii_a++){
                    if(resultState_a_.indexOf(Stateto[tempState[ii]-1].a[ii_a])>=0){}
                    else{
                        resultState_a_.push(Stateto[tempState[ii]-1].a[ii_a]);
                    }
                }
                for(let ii_b=0;ii_b<Stateto[tempState[ii]-1].b.length;ii_b++){
                    if(resultState_b_.indexOf(Stateto[tempState[ii]-1].b[ii_b])>=0){}
                    else{
                        resultState_b_.push(Stateto[tempState[ii]-1].b[ii_b]);
                    }
                }
            }

            if(resultState_a_.length){
                console.log("State ",tempState," input a to the next state: ",resultState_a_);
            }
            if(resultState_b_.length){
                console.log("State ",tempState," input b to the next state: ",resultState_b_);
            }
        }
    }

    compute(beginState);
    console.log("AllState:",usefulState);
    process(usefulState);

}

var beginState=[1];

var allState = [1,2,3,4,5,6];

var Stateto = [
    {a:[1,2],b:[1]},
    {a:[3],b:[3]},
    {a:[4],b:[4]},
    {a:[5],b:[5]},
    {a:[6],b:[6]},
    {a:[],b:[]},
];

NFAtoDFA(beginState,allState,Stateto);
