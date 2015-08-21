var test = require('tape');

test("Check if exiftool exists", function(t){

	var exec = require('child_process').exec;

	exec('exiftool', [], function(err){
		(err) ? t.false(true) : t.true(true);
		t.end();
	});

});