import { LightningElement, track } from 'lwc';
import { data } from 'c/data';
export default class SelectorList extends LightningElement {
    selectedMobile ;
   @track mobiles = data;
     handleChange(event){
         let checkboxClass = '.'+event.target.value;
         const checkbox = this.template.querySelector(checkboxClass);
        if(checkbox.checked === true){
            Array.from(this.template.querySelectorAll('lightning-input'))
            .forEach(element => {
                element.checked = false;
            });
           checkbox.checked = true;
           this.selectedMobile = event.target.value;
           let details = this.mobiles.find(data => data.Id === this.selectedMobile);
           this.template.querySelector("c-mobile-tile").displayValue(details);
        }else{
            this.selectedMobile = null;
        }
     }
    
     handleSimpleEvent(event){

        
        let findId = event.detail.Id;
        var index = 0;
        for(var data in this.mobiles){
            if(this.mobiles[data].Id === findId){
                break;
           }
           index += 1;
        }
        this.mobiles[index].Quantity = event.detail.Quantity;
        
    }    

}
