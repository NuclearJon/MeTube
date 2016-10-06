$(function(){
   $("#clickButton").click(function(){
       $("#helloText").text("Hello World!");
   });

   var fileChooser = document.getElementById('file-chooser');
   var s3 = new AWS.S3({apiVersion: '2006-03-01'});

   $("#upload-button").click(function(){
      var file = fileChooser.files[0];
      $("#helloText").text("Hello World!");
      if(file){
         $("#results").text("");

         var params = {Key: file.name, ContextType: file.type, Body: file};
         s3.upload(params, function(err, data){
            $("#results").text(err ? "Error!" : "Uploaded");
            console.log(err);
         })
      }else{
         $("#results").text("Nothing to Upload");
      }
   });
});
