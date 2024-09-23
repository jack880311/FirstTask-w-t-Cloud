// export default：用於將值、變數、函數、物件等作為此模組的主要輸出，適用於module中只有一個功能要輸出時。（相較之下，named export則適用於該module中有多個功能要輸出時。）
// class：為一種製作物件的模版，可在其中定義此物件的property與method。
export default class Stack{
    /* 
    * "#"的說明：
    * 1. 用於class中私人屬性的製作，作為前綴，代表此property是私有的，只能在此class內部使用，外部無法存取編輯。
    * 2. 如"#items"即代表欲製作的此屬性（即此items）只能用於其位於的class內部作使用。
    */
    #items;

    // 將私有的#items初始化為一個空的陣列。
    constructor(){
        this.#items = [];
    }

    // 在stack頂部加入元素i。
    // note：JavaScript內建push()語法，專門用來於陣列末端新增一個元素。
    // note：JavaScript利用"this"來指向當前物件中的內容，確保不會存取到物件外的項目。
    push(element){
        this.#items.push(element);
    }

    // 移除並回傳stack頂部的元素。
    // note：JavaScript內建pop()語法，專門用來於陣列末端移除一個元素，並且回傳此元素。
    pop(){
        if (this.isEmpty()){
            return undefined;
        }
        return this.#items.pop();
    }

    // 回傳stack頂部的元素，但不移除它。
    peek(){
        if (this.isEmpty()){
          return undefined;
        }
        return this.#items[this.#items.length - 1];
    }
    
    // 檢查stack是否為空。
    isEmpty(){
        return this.#items.length == 0;
    }
    
    // 回傳stack中元素的個數。
    size(){
        return this.#items.length;
    }
    
    // 清空stack。
    clear(){
        this.#items = [];
    }
    
    // 印出stack內容。
    print(){
        console.log(this.#items.toString());
    }
}