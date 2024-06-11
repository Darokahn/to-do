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
            addresses.push({name: this.nameInput, address: this.addressInput})
            this.nameInput = "";
            this.addressInput = "";
        }
    },
    created: function() {


    }
}).mount("#app");
