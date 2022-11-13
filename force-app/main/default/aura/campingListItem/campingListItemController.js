({
	packItem: function(component, event, helper) {
        let btnClicked = event.getSource();
    	btnClicked.set("v.disabled", true); 
        component.set("v.Packed__c", true);
    },
})
