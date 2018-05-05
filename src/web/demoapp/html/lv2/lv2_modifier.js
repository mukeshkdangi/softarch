var lv2_data = [{
    "nameOfCluster": "classNameA",
    "listOfFiles": [{
            "name": "FileA",
            "inputDeps": [{
                    "name": "FileB",
                    "category": "io"
                },
                {
                    "name": "FileC",
                    "category": "sql"
                }
            ],
            "outputDeps": [{
                    "name": "FileD",
                    "category": "networking"
                },
                {
                    "name": "FileE",
                    "category": "graphics"
                }
            ],
            "inputOverallCategories": [
                "io",
                "sql"
            ],
            "outputOverallCategories": [
                "networking",
                "graphics"
            ],
            "pathToFile": "/jena-core/src/main/test",
            "linesOfCode": 4521,
            "category": "sql",
            "fileSize": 32,
            "vulnerable": true
        },
        {
            "name": "FileX",
            "inputDeps": [{
                    "name": "FileB",
                    "category": "io"
                },
                {
                    "name": "FileC",
                    "category": "sql"
                }
            ],
            "outputDeps": [{
                    "name": "FileD",
                    "category": "networking"
                },
                {
                    "name": "FileE",
                    "category": "graphics"
                }
            ],
            "inputOverallCategories": [
                "io",
                "sql"
            ],
            "outputOverallCategories": [
                "networking",
                "graphics"
            ],
            "pathToFile": "/jena-core/src/main/test",
            "linesOfCode": 4521,
            "category": "sql",
            "fileSize": 32,
            "vulnerable": true
        }
    ]
},
{
    "nameOfCluster": "classNameB",
    "listOfFiles": [{
            "name": "FileA",
            "inputDeps": [{
                    "name": "FileB",
                    "category": "io"
                },
                {
                    "name": "FileC",
                    "category": "sql"
                }
            ],
            "outputDeps": [{
                    "name": "FileD",
                    "category": "networking"
                },
                {
                    "name": "FileE",
                    "category": "graphics"
                }
            ],
            "inputOverallCategories": [
                "io",
                "sql"
            ],
            "outputOverallCategories": [
                "networking",
                "graphics"
            ],
            "pathToFile": "/jena-core/src/main/test",
            "linesOfCode": 4521,
            "category": "sql",
            "fileSize": 32,
            "vulnerable": true
        },
        {
            "name": "FileX",
            "inputDeps": [{
                    "name": "FileB",
                    "category": "io"
                },
                {
                    "name": "FileC",
                    "category": "sql"
                }
            ],
            "outputDeps": [{
                    "name": "FileD",
                    "category": "networking"
                },
                {
                    "name": "FileE",
                    "category": "graphics"
                }
            ],
            "inputOverallCategories": [
                "io",
                "sql"
            ],
            "outputOverallCategories": [
                "networking",
                "graphics"
            ],
            "pathToFile": "/jena-core/src/main/test",
            "linesOfCode": 4521,
            "category": "sql",
            "fileSize": 32,
            "vulnerable": true
        }
    ]
}
]

var directory_structure = { name: "sql", children: []}
for (ele of lv2_data) {
    var name = ele['nameOfCluster']
    var fileDetail = ele.listOfFiles[0];
    var inputDeps = fileDetail.inputDeps;
    var outputDeps = fileDetail.outputDeps;
    var pathToFile = fileDetail.pathToFile;
    var linesOfCode = fileDetail.linesOfCode;
    var category = fileDetail.category;
    var fileSize = fileDetail.fileSize
    var valueable = fileDetail.vulnerable;

    var detail = {
        "name": name,
        "inputDeps": inputDeps,
        "outputDeps": outputDeps,
        "pathToFile": pathToFile,
        "linesOfCode": linesOfCode,
        "category": category,
        "size": fileSize,
        "valueable": valueable
    }
    var dir = pathToFile.split("/")
    var dir_level = pathToFile.indexOf(".java")? dir.length - 1 : dir.length;

    var temp_dir = directory_structure;
    for (var i = 0 ; i < dir_level ; i++) {
        var sub_dir = dir[i];
        if (sub_dir.trim().length == 0)
            continue
        temp_dir = getSubDirectoryObj(temp_dir, sub_dir);
        if (i == dir_level - 1)   {
            temp_dir.children.push(detail)
        }
    }
}

function getSubDirectoryObj(dir_obj, sub_dir_string) {
    var array = dir_obj.children
    var elementPos = array.map(function(x) {return x.name; }).indexOf(sub_dir_string);
    var sub_dir_obj = {}
    if (elementPos === -1) {
        sub_dir_obj = {name: sub_dir, children: []}
        dir_obj.children.push(sub_dir_obj)
    } else {
        sub_dir_obj = dir_obj.children[elementPos]
    }
    return sub_dir_obj;
}


console.log(directory_structure)