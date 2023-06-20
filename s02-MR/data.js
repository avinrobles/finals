//MongoDB Aggregation
/* 
    MongoDB Aggregation
        -used to generate manipuated data and perform operations to create filtered results that helps in analyzing data
        - comparing to doing CRUD operations on our data from previous session, 'aggregation' 
        gives us access to manipulate, filter, and compute for results providing us with information 
        to make necessary development decisions without having to create a front-end application

        1.) $match()
        - Used to pass the documents that meet the specified condition(s) to the next pipeline stage/aggregation process
            -- syntax:
                {$match : {field : value}}

                db.fruits.aggregate([ 
                    {$match: {onSale: true}},
                    {$group: {_id: "$supplier_id", total: {$sum: "$stock"}}}
                ]).pretty();

        2.) $group()
        - Used to group elements together and field-value pairs using the data from the grouped elements
            -- syntax:
                {$group : {_id : value, fieldResult: "valueResult"}}
        
        --> using both $match & $group along with aggregation 
        will find for products that are on sale and will group the total amount of stocks for all the supplier found
            -- syntax:
            db.collectionName.aggregate([ 
                    { $match: { fieldA: valueA } },
                    { $group: {_id: "$fieldB" }, { result: { operation } } }
                ])

                -- $ - refers to a field name that is available in the documents that are being aggregated on
                -- $sum - will total the values of mentioned fields in the returned documen ts that are found using the $match criteria
*/  
db.fruits.aggregate([ 
    { $match: { onSale: true } },
    { $group: { _id: "$supplier_id", total: { $sum: "$stock" } } }
]);

/* 
    Field projection with aggregation
    $project - uses when aggregating data to include/exclude fields from the returned results
        -- syntax:
            {$project: { field : 1/0 } }
*/
db.fruits.aggregate([ 
    { $match: { onSale: true } },
    { $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
    { $project: { _id : 0} }
]);

/* 
    Sorting aggregated results
    $sort - used to change the order of aggregated. Providing a value of -1 will sort the aggregated results in reverse order
        -- syntax:
            {$sort: { field : 1/-1 } }
*/
db.fruits.aggregate([ 
    { $match: { onSale: true } },
    { $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
    { $project: { _id : 0} },
    { $sort: { total : -1} }
]);

/* 
    Aggregating results based on array fields
    $unwind - deconstructs an array field from a collection/field with an arra value to output a result for each element
        -- syntax:
            { $unwind : field }
*/
db.fruits.aggregate([ 
    { $unwind: "$origin" },
    { $group : { _id: "$origin", kinds: { $sum } } }
]);

