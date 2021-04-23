import { LightningElement, api, track} from 'lwc';
import Default_Image from '@salesforce/resourceUrl/Default_Image';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class MobileTile extends LightningElement {

        @api  mobileId = undefined;
        defaultImage = Default_Image;
       @track mobile = {};
        @api
        displayValue(details){
            this.mobile.Name = details.Name;
            this.mobile.Image_Link__c = details.Image_Link__c;
            this.mobile.Price__c = details.Price__c;
            this.mobile.Description__c = details.Description__c;
            this.mobile.Quantity = details.Quantity;
            this.mobile.Id = details.Id;
        }
        handleImgError(){
            this.mobile.Image_Link__c = this.defaultImage;
        }
        handleClick(){
            if( parseInt(this.mobile.Quantity) <= 3){
                this.mobile.Quantity = parseInt(this.mobile.Quantity)+1;
                const customEvent = CustomEvent('simpleevent',{
                    detail : this.mobile
                });
                this.dispatchEvent(customEvent);
            }else{
                 const toast = new ShowToastEvent({
                        title: 'Limit Reached',
                        message: 'Cant add more than 3 of same mobiles.',
                        variant: 'error',
                    });
                    this.dispatchEvent(toast);
            }
        }
}