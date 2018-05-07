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
function modifyData(lv2_data, category) {
    var directory_structure = { name: category, children: []}
    for (ele of lv2_data) {
        // var dummy_filepath = ["a/b/c/d/e/f","a/b/","a/g/h/u", "c/s/d", "c/v/r/t"]
        // var random_path = dummy_filepath[Math.floor(Math.random() * Math.floor(dummy_filepath.length))]

        var name = ele.name
        var inputDeps = ele.inputDeps;
        var outputDeps = ele.outputDeps;
        var pathToFile = ele.pathToFile;
        pathToFile = pathToFile.replace("/Users/mukesh/Desktop/", "");
        var linesOfCode = ele.linesOfCode;
        var category = ele.category;
        var fileSize = ele.fileSize
        var vulnerable = ele.vulnerable;
        if (fileSize === 0 || fileSize === 0.0) {
            fileSize = 1.0;
        }
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

    while (true) {
        if (directory_structure.children !== undefined && directory_structure.children.length == 1) {
            directory_structure = directory_structure.children[0];
        } else {
            if (directory_structure.children === undefined) {
                directory_structure = {
                    name: directory_structure.category,
                    children: [directory_structure]
                }
            }
            break;
        }
    }

    return directory_structure;
}

function getSubDirectoryObj(dir_obj, sub_dir_string) {
    var array = dir_obj.children
    var elementPos = array.map(function(x) {return x.name; }).indexOf(sub_dir_string);
    var sub_dir_obj = {}
    if (elementPos === -1) {
        sub_dir_obj = {name: sub_dir_string, children: []}
        dir_obj.children.push(sub_dir_obj)
    } else {
        sub_dir_obj = dir_obj.children[elementPos]
    }
    return sub_dir_obj;
}
