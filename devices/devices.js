var devices = [
	 {id:0, name: "iphone 6", assetTag:"x78866", owner:"piotr", desc:""},
     {id:1, name: "iphone 5", assetTag:"y87989", owner:"abhishek", desc:""},
     {id:2, name: "galaxy note 4", assetTag:"w78979", owner:"raj", desc:""},
     {id:3, name: "galaxy note 2", assetTag:"t79899", owner:"gauri", desc:""},
     {id:4, name: "galaxy tab", assetTag:"a88702", owner:"mass", desc:""}
];

exports.findAll = function(request, result) {
	result.send(devices);
};

exports.findById = function(request, result) {
	result.send(devices[request.params.id]);
};

exports.add = function(request, result) {
    var device = request.body;
    devices.push(device);
    console.log("new device added to repository");
    result.send([{status: '1'}]);
};

exports.delete = function(request, result){
    var id = request.params.id;
	
    devices = devices.filter(function(item){
        return item.id != id;
    });
	
    console.log("Device removed from repository: " + id);
    result.send([{status: '1'}]);
};

exports.update = function(request, result) {
   
	var id = request.params.id;
    var device = request.body;
	
    if(id != device.id){
        console.log("Id of device to be updated doesn't match with device object holding updated data");
        result.send([{status: '0'}]);
    }
    console.log(device);

    // find the selected device & update
    devices.forEach(function(item, i)
	{
        if(device.id == id){
            // update           
            devices[i] = device; 
            result.send([{status: '1'}]);
            return;
        }
    });
    result.send([{status: '0'}]);
};

