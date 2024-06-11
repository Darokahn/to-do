Vue.createApp({
    data() {
        return {
            addresses: [],
            nameInput: "",
            addressInput: "",


        };
    },
    methods: {
        validateInputs() {
            return (this.nameInput.length > 0 && this.addressInput.length > 0);
        },
        submit() {
            this.addresses.push({name: this.nameInput, address: this.addressInput})
            this.nameInput = "";
            this.addressInput = "";
        },
        rm(item) {
            let itemIndex = this.addresses.indexOf(item);
            this.addresses.splice(itemIndex, 1);
        }
    },
    created: function() {


    }
}).mount("#app");
