class Example {
    private _value: number;

    constructor(initialValue: number) {
        this._value = initialValue;
    }

    // Getter for 'value'
    get value(): number {
        return this._value;
    }

    // Setter for 'value'
    set value(newValue: number) {
        if (newValue > 0) {
            this._value = newValue;
        } else {
            console.error('Invalid value. It must be greater than 0.');
        }
    }
}

// Usage
const exampleInstance = new Example(10);
console.log(exampleInstance.value); // Outputs: 10
exampleInstance.value = 20; // Sets the value to 20
console.log(exampleInstance.value); // Outputs: 20
