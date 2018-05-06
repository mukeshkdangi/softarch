// var lv2_data = [{
//     "nameOfCluster": "classNameA",
//     "listOfFiles": [{
//             "name": "FileA",
//             "inputDeps": [{
//                     "name": "FileB",
//                     "category": "io"
//                 },
//                 {
//                     "name": "FileC",
//                     "category": "sql"
//                 }
//             ],
//             "outputDeps": [{
//                     "name": "FileD",
//                     "category": "networking"
//                 },
//                 {
//                     "name": "FileE",
//                     "category": "graphics"
//                 }
//             ],
//             "inputOverallCategories": [
//                 "io",
//                 "sql"
//             ],
//             "outputOverallCategories": [
//                 "networking",
//                 "graphics"
//             ],
//             "pathToFile": "/jena-core/src/main/test",
//             "linesOfCode": 4521,
//             "category": "sql",
//             "fileSize": 32,
//             "vulnerable": true
//         },
//         {
//             "name": "FileX",
//             "inputDeps": [{
//                     "name": "FileB",
//                     "category": "io"
//                 },
//                 {
//                     "name": "FileC",
//                     "category": "sql"
//                 }
//             ],
//             "outputDeps": [{
//                     "name": "FileD",
//                     "category": "networking"
//                 },
//                 {
//                     "name": "FileE",
//                     "category": "graphics"
//                 }
//             ],
//             "inputOverallCategories": [
//                 "io",
//                 "sql"
//             ],
//             "outputOverallCategories": [
//                 "networking",
//                 "graphics"
//             ],
//             "pathToFile": "/jena-core/src/main/test",
//             "linesOfCode": 4521,
//             "category": "sql",
//             "fileSize": 32,
//             "vulnerable": true
//         }
//     ]
// },
// {
//     "nameOfCluster": "classNameB",
//     "listOfFiles": [{
//             "name": "FileA",
//             "inputDeps": [{
//                     "name": "FileB",
//                     "category": "io"
//                 },
//                 {
//                     "name": "FileC",
//                     "category": "sql"
//                 }
//             ],
//             "outputDeps": [{
//                     "name": "FileD",
//                     "category": "networking"
//                 },
//                 {
//                     "name": "FileE",
//                     "category": "graphics"
//                 }
//             ],
//             "inputOverallCategories": [
//                 "io",
//                 "sql"
//             ],
//             "outputOverallCategories": [
//                 "networking",
//                 "graphics"
//             ],
//             "pathToFile": "/jena-core/src/main/test",
//             "linesOfCode": 4521,
//             "category": "sql",
//             "fileSize": 32,
//             "vulnerable": true
//         },
//         {
//             "name": "FileX",
//             "inputDeps": [{
//                     "name": "FileB",
//                     "category": "io"
//                 },
//                 {
//                     "name": "FileC",
//                     "category": "sql"
//                 }
//             ],
//             "outputDeps": [{
//                     "name": "FileD",
//                     "category": "networking"
//                 },
//                 {
//                     "name": "FileE",
//                     "category": "graphics"
//                 }
//             ],
//             "inputOverallCategories": [
//                 "io",
//                 "sql"
//             ],
//             "outputOverallCategories": [
//                 "networking",
//                 "graphics"
//             ],
//             "pathToFile": "/jena-core/src/main/test",
//             "linesOfCode": 4521,
//             "category": "sql",
//             "fileSize": 32,
//             "vulnerable": true
//         }
//     ]
// }
// ]

var directory_structure = { name: "sql", children: []}
for (ele of lv2_data) {
    var dummy_filepath = ["a/b/c/d/e/f","a/b/","a/g/h/u", "c/s/d", "c/v/r/t"]
    var random_path = dummy_filepath[Math.floor(Math.random() * Math.floor(dummy_filepath.length))]

    var name = ele.name
    var inputDeps = ele.inputDeps;
    var outputDeps = ele.outputDeps;
    var pathToFile = random_path;//ele.pathToFile;
    var linesOfCode = ele.linesOfCode;
    var category = ele.category;
    var fileSize = ele.fileSize
    var vulnerable = ele.vulnerable;
    
    var detail = {
        "name": name,
        "inputDeps": inputDeps,
        "outputDeps": outputDeps,
        "pathToFile": pathToFile,
        "linesOfCode": linesOfCode,
        "category": category,
        "size": fileSize,
        "vulnerable": vulnerable
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