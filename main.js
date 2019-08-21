function orderSummary(barcodes){
    let map=new Map();
    for (let index = 0; index < barcodes.length; index++) {
        if(map.get(barcodes[index]) == null){
            map.set(barcodes[index],1);
        }else{
            map.set(barcodes[index],map.get(barcodes[index])+1);
        }
        
    }
    return map;
}
function sumMoney(menuMap,menuData){
    let tempMoney;
    let summoney=0;
    //let keyset=menuMap.get

    menuMap.forEach((value,key) => {
        for (let index = 0; index < menuData.length; index++) {
            if(key == menuData[index].id){
                tempMoney=(menuData[index].price)*value;
                break;
            }
            
        }
        summoney+=tempMoney;
    });
    return summoney;
}

function printReceipts(menuMap,menuData){
    let menuName;
    let tempPrint;
    let middle="";
    let up="Receipts\n------------------------------------------------------------\n";
    let foot="------------------------------------------------------------\n";
    let totalprice="Price:"+sumMoney(menuMap,menuData);
    menuMap.forEach((value,key) => {
        for (let index = 0; index < menuData.length; index++) {
            if(key == menuData[index].id){
                menuName=menuData[index].name;
                menuePrice=menuData[index].price;
                tempPrint=menuName+"                       "+menuePrice+"          "+value+"\n";
                console.log(tempPrint);
                middle+=tempPrint;
                break;
            }
        }
    });
    //middle+=tempPrint;
    let result=up+middle+foot+totalprice;
    console.log(result);
    return result;
}

module.exports = {
    orderSummary,
    sumMoney,
    printReceipts
}
