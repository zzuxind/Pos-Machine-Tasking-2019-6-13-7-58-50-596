const {orderSummary,sumMoney,printReceipts}=require('../main')
  const menuData = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
    const barcodes=['0001', '0003', '0005', '0003'];

    it("菜单整理",() => {
        let menuemap=orderSummary(barcodes);
        expect(menuemap.get('0003')).toBe(2);
        expect(menuemap.get('0001')).toBe(1);
        expect(menuemap.get('0005')).toBe(1);
    });

    it("总价计算",() => {
        let menuemap=orderSummary(barcodes);
        let summoney=sumMoney(menuemap,menuData);
        expect(summoney).toBe(20);
    });

    it("打印输出",() => {
        let menuemap=orderSummary(barcodes);
        let printreceipts=printReceipts(menuemap,menuData);
        expect(printreceipts).toBe("Receipts\n------------------------------------------------------------\nCoca Cola                       3          1\nPepsi-Cola                       5          2\nDr Pepper                       7          1\n------------------------------------------------------------\nPrice:20");
    });
