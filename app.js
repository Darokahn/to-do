Vue.createApp({
    data() {
        return {
            addresses: [{name: "hello", address: "world"}],
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
        delete(item) {
            console.log(item);
        }
    },
    created: function() {


    }
}).mount("#app");
