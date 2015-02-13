var Vehicle = Backbone.Model.extend({
    validate: function(attrs) {
        if (!attrs.registrationNumber){
            return "registration Number is missing";
        }
    },
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicles",
    start: function() {
        console.log("Vehicle Started");
    }
});

var Car = Vehicle.extend({
    start: function() {
        console.log("Car with registration number " + this.get("registrationNumber") + "started");
    }
});

var car = new Car({registrationNumber: "XLI887", color: "Blue"});

if (!car.isValid()) {
    console.log(car.validationError);
}