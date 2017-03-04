/**
 * Created by Xiaotao Nie on 10/9/2016.
 * quick sort
 * 快速排序的一个基础实现
 *
 */


//交换数组内两个元素
function switch2(a,ind1,ind2){
    var temp = a[ind1];
    a[ind1]=a[ind2];
    a[ind2]=temp;
}

//对三个元素进行排序或者交换
function switch3(a,left,right){
    //最后想要达成的结果就是left<center<right
    var center = Math.floor((right+left)/2);

    if(a[left]>a[center]){
        switch2(a,left,center);
    }
    if(a[left]>a[right]){
        switch2(a,left,right);
    }
    if(a[center]>a[right]){
        switch2(a,center,right)
    }
    switch2(a,center,right-1);
    return a[right-1];
}

//主干
function qsort_main(target,begin,end){

    if(begin+2<=end) {
        //最少应该有三个元素

        var temp = switch3(target, begin, end);
        var i = begin, j = end - 1;
        // console.log("begin this sort process:",i,j,target,begin,end);

        for (;;) {
            i=i+1;
            j=j-1;
            while (target[i] < temp) {
                // console.log("<",target[i],i);
                i=i+1;
            }
            while (target[j] > temp) {
                // console.log(">",target[j]);
                j=j-1;
            }
            // console.log('if change?',i,j);
            if (i < j) {
                switch2(target, i, j);
                // console.log(target[i],target[j],target);
            }
            else {
                break;
            }
        }
        switch2(target,i,end-1);
        // console.log("now target",target,i,j);
        // console.log("____________");

        arguments.callee(target, begin,i - 1);
        arguments.callee(target, i + 1, end);
    }
    else{
        if(target[begin]>target[end])
        switch2(target,begin,end);
    }
}

//输出函数
function qsort(target){
    var mytarget=[];
    for(var i = 0;i<target.length;i++){
        mytarget[i]=target[i];
    }
    // console.log("notbegin",mytarget);
    qsort_main(mytarget,0,target.length-1);
    return mytarget;
}


//简单测试
var test = [6,6,6,6,9,6,6,6];

console.log(test);
var mytest = qsort(test);
console.log(mytest);
console.log(test);