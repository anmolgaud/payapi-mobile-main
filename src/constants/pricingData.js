export const plans = [
    {
        Name : "Free Plan",
        Price : "$0.00",
        Features : [
            {FeatName : "Transactions", enabled : true},
            {FeatName : "Auth", enabled : true},
            {FeatName : "Identity", enabled : true},
            {FeatName : "Investments", enabled : false},
            {FeatName : "Assets", enabled : false},
            {FeatName : "Liabilities", enabled : false},
            {FeatName : "Income", enabled : false},
        ]
    },

    {
        Name : "Basic Plan",
        Price : "$249.00",
        Features : [
            {FeatName : "Transactions", enabled : true},
            {FeatName : "Auth", enabled : true},
            {FeatName : "Identity", enabled : true},
            {FeatName : "Investments", enabled : true},
            {FeatName : "Assets", enabled : true},
            {FeatName : "Liabilities", enabled : false},
            {FeatName : "Income", enabled : false},
        ]
    },

    {
        Name : "Basic Plan",
        Price : "$499.00",
        Features : [
            {FeatName : "Transactions", enabled : true},
            {FeatName : "Auth", enabled : true},
            {FeatName : "Identity", enabled : true},
            {FeatName : "Investments", enabled : true},
            {FeatName : "Assets", enabled : true},
            {FeatName : "Liabilities", enabled : true},
            {FeatName : "Income", enabled : true},
        ]
    },
]
