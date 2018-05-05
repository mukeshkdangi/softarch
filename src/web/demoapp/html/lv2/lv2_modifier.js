var lv2_data = [{
    "name": "FlowMessage",
    "clusterNames": {
        "nameOfCluster": "",
        "listOfFiles": [{
            "inputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "outputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "pathToFile": "/a/b/FlowMessage.java",
            "linesOfCode": 100,
            "category": "io",
            "fileSize": 100,
            "vulnerable": true
        }]
    }
},
{
    "name": "StatusListener",
    "clusterNames": {
        "nameOfCluster": "",
        "listOfFiles": [{
            "inputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "outputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "pathToFile": "/a/b/StatusListener.java",
            "linesOfCode": 100,
            "category": "io",
            "fileSize": 100,
            "vulnerable": true
        }]
    }
},
{
    "name": "MessageFormatMessage",
    "clusterNames": {
        "nameOfCluster": "",
        "listOfFiles": [{
            "inputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "outputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "pathToFile": "/a/StatusListener.java",
            "linesOfCode": 100,
            "category": "graphics",
            "fileSize": 100,
            "vulnerable": true
        }]
    }
},
{
    "name": "ReusableObjectMessage",
    "size": 3938,
    "clusterNames": {
        "nameOfCluster": "",
        "listOfFiles": [{
            "inputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "outputDeps": [{
                "name": "File A",
                "category": "sql"
            }],
            "pathToFile": "file_path",
            "linesOfCode": 100,
            "category": "graphics",
            "fileSize": 100,
            "vulnerable": true
        }]
    }
}]

var directory_structure = { name: "sql", children: []}
for (ele of lv2_data) {
    var name = ele['name']
    var fileDetail = ele.clusterNames.listOfFiles[0];
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