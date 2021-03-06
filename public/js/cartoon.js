/**
 *  
 *  @author Gordon Ahn
 *  
 *  Created by Gordon Ahn on May 29, 2020
 * 
 */


 /**
  * 
  * @param {*} image 
  */

// Configure AWS SDK for JavaScript & set region and credentials
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-northeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:e7b9de8c-8776-47f7-8e1a-9183b498e2ce',
});


const  FULLIMAGE_URL = "fullimage.html?id=";
const  kGRAY = "gray";
const  kEP = "ep";
const  kDE = "de";
const  kSTYLE = "style";
const  kSKETCHIFY = "sketchify";
const  kPS_COLOR = "ps-color";
const  kPS_GRAY = "ps-gray";
const  kSOURCE = "source";
const  kNORMALCARTOON = 'normal-cartoon';
const  kCARTOONBASIC = 'cartoon-basic';
const  kCARTOONLITE = 'cartoon-lite';
const  LOADING_IMAGE = "background-image:url('/img/redspinner.svg');";
const  DEFAULT_IMAGE = "background-image:url('/img/default-image.png');";
const  FIXED_IMAGE_URL = "background-image:url('{0}');";


String.prototype.format = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
};


function getImagesForCartoon_apigateway() {

    var apigClient = apigClientFactory.newClient();

    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: 'test1234.png'
    };
    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            param0: '',
            param1: ''
        },
        */
        queryParams: {
            name: 'test1234.png'
            //param1: ''
        }
    };

    apigClient.imageGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            console.log("==== apigClient => %s",result);
        })
        .catch(function(result){
            //This is where you would put an error callback
        });

}


function extractExtFrom(srcpath) {
    let re = /(?:\.([^.]+))?$/;
    let ext = "." + re.exec(srcpath)[1];

    return ext;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function AjaxSketchify(imgUrl, svcUri) {

    $("#sketchifyImage")
    	.on('load',function() {
    		console.log("sketchify loaded!!!");
    	    $("#sketchifyHref").attr("href",svcUri);
            let images = JSON.parse( localStorage.getItem("images"));
            images[kSKETCHIFY] = imgUrl;
            localStorage.setItem("images", JSON.stringify(images));
    	})
    	.on('error',function() {
    		console.log("sketchify error!!!");
	    	$(this).attr('src',LOADING_IMAGE);
	        sleep(300).then(() => {
	            let aUrl = imgUrl.split('?');
	            AjaxSketchify(aUrl[0]+"?t="+ new Date().getTime(), svcUri);
	        });
    	})
    	.attr("src", imgUrl);
}

function AjaxNormalCartoon(imgUrl, svcUri) {

    $("#normalCartoonImage")
		.on('load',function() {
			console.log("normal Cartoon loaded!!!");
		    $("#normalCartoonHref").attr("href", svcUri);
	        let images = JSON.parse( localStorage.getItem("images"));
	        images[kNORMALCARTOON] = imgUrl;
	        localStorage.setItem("images", JSON.stringify(images));
		})
		.on('error',function() {
			console.log("normal Cartoon error!!!");
	    	$(this).attr('src',LOADING_IMAGE);
	        sleep(300).then(() => {
	            let aUrl = imgUrl.split('?');
	            AjaxNormalCartoon(aUrl[0]+"?t="+ new Date().getTime(), svcUri);
	        });
		})
		.attr("src",imgUrl);

}

function AjaxBasicCartoon(imgUrl, svcUri) {

    $("#cartoonBasicImage")
		.on('load',function() {
			console.log("basic cartoon loaded!!!");
		    $("#cartoonBasicHref").attr("href",svcUri);
	        let images = JSON.parse( localStorage.getItem("images"));
	        images[kCARTOONBASIC] = imgUrl;
	        localStorage.setItem("images", JSON.stringify(images));
		})
		.on('error',function() {
			console.log("basic cartoon error!!!");
	    	$(this).attr('src',LOADING_IMAGE);
	        sleep(300).then(() => {
	            let aUrl = imgUrl.split('?');
	            AjaxBasicCartoon(aUrl[0]+"?t="+ new Date().getTime(), svcUri);
	        });
		})
		.attr("src",imgUrl);

}

function AjaxCartoonLite(imgUrl, svcUri) {

    $("#cartoonLiteImage")
		.on('load',function() {
			console.log("cartoon lite loaded!!!");
		    $("#cartoonLiteHref").attr("href",svcUri);
	        let images = JSON.parse( localStorage.getItem("images"));
	        images[kCARTOONLITE] = imgUrl;
	        localStorage.setItem("images", JSON.stringify(images));
		})
		.on('error',function() {
			console.log("cartoon lite error!!!");
	    	$(this).attr('src',LOADING_IMAGE);
	        sleep(300).then(() => {
	            let aUrl = imgUrl.split('?');
	            AjaxCartoonLite(aUrl[0]+"?t="+ new Date().getTime(), svcUri);
	        });
		})
		.attr("src",imgUrl);

}

function showImagesToBeCartoonized(filename) {

    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: filename
    };
    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            param0: '',
            param1: ''
        },
        */
        queryParams: {
            name: filename
            //param1: ''
        }
    };

    apigClient.cartoonafGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            let images = result.data.body.images;
            let hash_v = result.data.body.hash;
            let imageSrc = images[kSOURCE]; 
            let ext    = imageSrc.substr(imageSrc.lastIndexOf('.')+1);

            let tGray = images[kGRAY].substr(images[kGRAY].lastIndexOf('?')+1);
            let qGray = images[kGRAY].lastIndexOf('?') > 0 ? "&" + tGray : "";
            $("#grayImage").attr("style", FIXED_IMAGE_URL.format(images[kGRAY]) );
            $("#grayHref").attr("href","/" + hash_v +"/gray?e=" + ext + qGray);

            let tEP = images[kEP].substr(images[kEP].lastIndexOf('?')+1);
            let qEP = images[kEP].lastIndexOf('?') > 0 ? "&" + tEP : "";
            $("#edgePreservingImage").attr("style", FIXED_IMAGE_URL.format( images[kEP] ));
            $("#edgePreservingHref").attr("href","/" + hash_v +"/edge-preserving?e=" + ext + qEP );

            let tDE = images[kDE].substr(images[kDE].lastIndexOf('?')+1);
            let qDE = images[kDE].lastIndexOf('?') > 0 ? "&" + tDE : "";
            $("#detailEnhanceImage").attr("style",FIXED_IMAGE_URL.format( images[kDE] ));
            $("#detailEnhanceHref").attr("href","/" + hash_v +"/detail-enhance?e=" + ext + qDE);

            let tStyle = images[kSTYLE].substr(images[kSTYLE].lastIndexOf('?')+1);
            let qStyle = images[kSTYLE].lastIndexOf('?') > 0 ? "&" + tStyle : "";
            $("#stylizationImage").attr("style",FIXED_IMAGE_URL.format( images[kSTYLE] ));
            $("#stylizationHref").attr("href","/" + hash_v +"/stylization?e=" + ext + qStyle);

            let tPSGray = images[kPS_GRAY].substr(images[kPS_GRAY].lastIndexOf('?')+1);
            let qPSGray = images[kPS_GRAY].lastIndexOf('?') > 0 ? "&" + tPSGray : "";
            $("#pencilSketchGrayImage").attr("style",FIXED_IMAGE_URL.format( images[kPS_GRAY] ));
            $("#pencilSketchGrayHref").attr("href","/" + hash_v +"/pencil-sketch-in-gray?e="+ext + qPSGray);

            let tPSColor = images[kPS_COLOR].substr(images[kPS_COLOR].lastIndexOf('?')+1);
            let qPSColor = images[kPS_COLOR].lastIndexOf('?') > 0 ? "&" + tPSColor : "";
            $("#pencilSketchColorImage").attr("style",FIXED_IMAGE_URL.format( images[kPS_COLOR] ));
            $("#pencilSketchColorHref").attr("href","/" + hash_v +"/pencil-sketch-in-color?e="+ext + qPSColor);

            localStorage.setItem("hashimage", result.data.body.hash);
            localStorage.setItem("images", JSON.stringify(result.data.body.images));

            if (images[kSKETCHIFY]) {
                let tSketchify = images[kSKETCHIFY].substr(images[kSKETCHIFY].lastIndexOf('?')+1);
                let qSketchify = images[kSKETCHIFY].lastIndexOf('?') > 0 ? "&" + tSketchify : "";

                $("#sketchifyImage").attr("style",FIXED_IMAGE_URL.format( images[kSKETCHIFY] ));
                $("#sketchifyHref").attr("href","/" + hash_v +"/pencil-sketch-using-sketchify?e="+ext + qSketchify);
            }
            else {
                let srcpath = images[kSOURCE];
                let dotext = extractExtFrom(srcpath);

                let svcUri = "/" + hash_v +"/pencil-sketch-using-sketchify?e="+ext;
                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/sketchify"+dotext;

                AjaxSketchify(imgUrl, svcUri);
            }

            if (images[kNORMALCARTOON]) {
                let tNormalCartoon = images[kNORMALCARTOON].substr(images[kNORMALCARTOON].lastIndexOf('?')+1);
                let qNormalCartoon = images[kNORMALCARTOON].lastIndexOf('?') > 0 ? "&" + tNormalCartoon : "";

                $("#normalCartoonImage").attr("style",FIXED_IMAGE_URL.format( images[kNORMALCARTOON] ));
                $("#normalCartoonHref").attr("href","/" + hash_v +"/normal-cartoon-using-canny?e="+ext + qNormalCartoon);
            }
            else {
                let srcpath = images[kSOURCE];
                let dotext = extractExtFrom(srcpath);
                let svcUri = "/" + hash_v +"/normal-cartoon-using-canny?e="+ext;
                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/normal-cartoon"+dotext;
                AjaxNormalCartoon(imgUrl, svcUri);
            }

            if (images[kCARTOONBASIC]) {
                let tCartoonBasic = images[kCARTOONBASIC].substr(images[kCARTOONBASIC].lastIndexOf('?')+1);
                let qCartoonBasic = images[kCARTOONBASIC].lastIndexOf('?') > 0 ? "&" + tCartoonBasic : "";

                $("#cartoonBasicImage").attr("style",FIXED_IMAGE_URL.format( images[kCARTOONBASIC] ));
                $("#cartoonBasicHref").attr("href","/" + hash_v +"/basic-cartoon-using-adaptivethreshold?e="+ext + qCartoonBasic);
            }
            else {
                let srcpath = images[kSOURCE];
                let dotext = extractExtFrom(srcpath);
                let svcUri = "/" + hash_v+ "/basic-cartoon-using-adaptivethreshold?e="+ext;
                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/cartoon-basic"+dotext;
                AjaxBasicCartoon(imgUrl, svcUri);
            }

            if (images[kCARTOONLITE]) {
                let tCartoonLite = images[kCARTOONLITE].substr(images[kCARTOONLITE].lastIndexOf('?')+1);
                let qCartoonLite = images[kCARTOONLITE].lastIndexOf('?') > 0 ? "&" + tCartoonLite : "";
                $("#cartoonLiteImage").attr("style",FIXED_IMAGE_URL.format( images[kCARTOONLITE] ));
                $("#cartoonLiteHref").attr("href","/" + hash_v +"/cartoon-lite-using-adaptivethreshold?e="+ext + qCartoonLite);
            }
            else {
                let srcpath = images[kSOURCE];
                let dotext = extractExtFrom(srcpath);
                let svcUri = "/" + hash_v +"/cartoon-lite-using-adaptivethreshold?e="+ext;
                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/cartoon-lite"+dotext;
                AjaxCartoonLite(imgUrl, svcUri);
            }

        })
        .catch(function(result){
            //This is where you would put   an error callback
            // catch errors...
        });

}

/**
 * show data from localstorge when refresing or clicking back button.
 */
function showImagesOnRefreshing() {

    //var hashimage = localStorage.getItem("hashimage");
    //if (hashimage == null || hashimage.length === 0 )
    //    return;

    let images = JSON.parse(localStorage.getItem("images"));
    let hash_v = localStorage.getItem("hashimage");

    if (images == null || images.length === 0 )
        return;

    let imageSrc = images? images[kSOURCE]: null; 
    let ext    = imageSrc.substr(imageSrc.lastIndexOf('.')+1);


    /**
     *  The image to be analyzed.
     */
    $('.image-upload-wrap').hide();
    $('#loading').show();
    $('.file-upload-image').attr('src', images['source']);
    $('.file-upload-content').show();
    $('.image-title').html("refresh");
    $('#loading').hide();

    /**
     *  Gender and result-message
     */
    $('#gender').val(localStorage.getItem("imageSex"));
    $('.result-message')[0].innerHTML = localStorage.getItem("resultMessage");

    /**
     *  Converted images.
     */
    let tGray = images[kGRAY].substr(images[kGRAY].lastIndexOf('?')+1);
    let qGray = images[kGRAY].lastIndexOf('?') > 0 ? "&" + tGray : "";
    $("#grayImage").attr("style",FIXED_IMAGE_URL.format( images[kGRAY] ));
    $("#grayHref").attr("href","/" + hash_v +"/gray?e="+ext + qGray );

    let tEP = images[kEP].substr(images[kEP].lastIndexOf('?')+1);
    let qEP = images[kEP].lastIndexOf('?') > 0 ? "&" + tEP : "";
    $("#edgePreservingImage").attr("style",FIXED_IMAGE_URL.format( images[kEP] ));
    $("#edgePreservingHref").attr("href","/" + hash_v +"/edge-preserving?e="+ext+qEP );

    let tDE = images[kDE].substr(images[kDE].lastIndexOf('?')+1);
    let qDE = images[kDE].lastIndexOf('?') > 0 ? "&" + tDE : "";
    $("#detailEnhanceImage").attr("style",FIXED_IMAGE_URL.format( images[kDE] ));
    $("#detailEnhanceHref").attr("href","/" + hash_v +"/detail-enhance?e="+ext+qDE);

    let tStyle = images[kSTYLE].substr(images[kSTYLE].lastIndexOf('?')+1);
    let qStyle = images[kSTYLE].lastIndexOf('?') > 0 ? "&" + tStyle : "";
    $("#stylizationImage").attr("style",FIXED_IMAGE_URL.format( images[kSTYLE] ));
    $("#stylizationHref").attr("href","/" + hash_v +"/stylization?e="+ext+qStyle);

    let tPSGray = images[kPS_GRAY].substr(images[kPS_GRAY].lastIndexOf('?')+1);
    let qPSGray = images[kPS_GRAY].lastIndexOf('?') > 0 ? "&" + tPSGray : "";
    $("#pencilSketchGrayImage").attr("style",FIXED_IMAGE_URL.format( images[kPS_GRAY] ));
    $("#pencilSketchGrayHref").attr("href","/" + hash_v +"/pencil-sketch-in-gray?e="+ext+qPSGray);

    let tPSColor = images[kPS_COLOR].substr(images[kPS_COLOR].lastIndexOf('?')+1);
    let qPSColor = images[kPS_COLOR].lastIndexOf('?') > 0 ? "&" + tPSColor : "";
    $("#pencilSketchColorImage").attr("style",FIXED_IMAGE_URL.format( images[kPS_COLOR] ));
    $("#pencilSketchColorHref").attr("href","/" + hash_v +"/pencil-sketch-in-color?e="+ext+qPSColor);

    let tSketchify = images[kSKETCHIFY].substr(images[kSKETCHIFY].lastIndexOf('?')+1);
    let qSketchify = images[kSKETCHIFY].lastIndexOf('?') > 0 ? "&" + tSketchify : "";
    $("#sketchifyImage").attr("style",FIXED_IMAGE_URL.format( images[kSKETCHIFY] ));
    $("#sketchifyHref").attr("href","/" + hash_v +"/pencil-sketch-using-sketchify?e="+ext+qSketchify);

    let tNormalCartoon = images[kNORMALCARTOON].substr(images[kNORMALCARTOON].lastIndexOf('?')+1);
    let qNormalCartoon = images[kNORMALCARTOON].lastIndexOf('?') > 0 ? "&" + tNormalCartoon : "";
    $("#normalCartoonImage").attr("style",FIXED_IMAGE_URL.format( images[kNORMALCARTOON] ));
    $("#normalCartoonHref").attr("href","/" + hash_v +"/normal-cartoon-using-canny?e="+ext+qNormalCartoon);

    let tCartoonBasic = images[kCARTOONBASIC].substr(images[kCARTOONBASIC].lastIndexOf('?')+1);
    let qCartoonBasic = images[kCARTOONBASIC].lastIndexOf('?') > 0 ? "&" + tCartoonBasic : "";
    $("#cartoonBasicImage").attr("style",FIXED_IMAGE_URL.format( images[kCARTOONBASIC] ));
    $("#cartoonBasicHref").attr("href","/" + hash_v +"/basic-cartoon-using-adaptivethreshold?e="+ext+qCartoonBasic);

    let tCartoonLite = images[kCARTOONLITE].substr(images[kCARTOONLITE].lastIndexOf('?')+1);
    let qCartoonLite = images[kCARTOONLITE].lastIndexOf('?') > 0 ? "&" + tCartoonLite : "";
    $("#cartoonLiteImage").attr("style",FIXED_IMAGE_URL.format( images[kCARTOONLITE] ));
    $("#cartoonLiteHref").attr("href","/" + hash_v +"/cartoon-lite-using-adaptivethreshold?e="+ext+qCartoonLite);

    /* AF again */
    init_refresh();
    predict_refresh();
}

function showLoadingForSlides() {

    $("#grayImage").attr("style",LOADING_IMAGE);
    $("#edgePreservingImage").attr("style",LOADING_IMAGE);
    $("#detailEnhanceImage").attr("style",LOADING_IMAGE);
    $("#stylizationImage").attr("style",LOADING_IMAGE);
    $("#pencilSketchGrayImage").attr("style",LOADING_IMAGE);
    $("#pencilSketchColorImage").attr("style",LOADING_IMAGE);
    $("#sketchifyImage").attr("style",LOADING_IMAGE);
    $("#normalCartoonImage").attr("style",LOADING_IMAGE);
    $("#cartoonBasicImage").attr("style",LOADING_IMAGE);    
    $("#cartoonLiteImage").attr("style",LOADING_IMAGE);    
}

function showDefaultForSlides() {

    $("#grayImage").attr("style",DEFAULT_IMAGE);
    $("#edgePreservingImage").attr("style",DEFAULT_IMAGE);
    $("#detailEnhanceImage").attr("style",DEFAULT_IMAGE);
    $("#stylizationImage").attr("style",DEFAULT_IMAGE);
    $("#pencilSketchGrayImage").attr("style",DEFAULT_IMAGE);
    $("#pencilSketchColorImage").attr("style",DEFAULT_IMAGE);
    $("#sketchifyImage").attr("style",DEFAULT_IMAGE);
    $("#normalCartoonImage").attr("style",DEFAULT_IMAGE);
    $("#cartoonBasicImage").attr("style",DEFAULT_IMAGE);    
    $("#cartoonLiteImage").attr("style",DEFAULT_IMAGE);    
}

/**
 * Post an image to s3 with a signed url.
 * 
 * @param {*} filename : image filename to post.
 */

function postImagesForCartoon(filename, retry) { 

	/// Prepare to call Lambda function
    let lambda = new AWS.Lambda();
    let ext = extractExtFrom(filename);

    var paramFilename = UUID.generate() + ext;
    var input = {
        //name: "test1234.png",
        resource: "",
        httpMethod: "POST",
        queryStringParameters: {
            name: paramFilename
        }
    };

    var params = {
        FunctionName: 'upload-image-to-s3',
		InvocationType : 'RequestResponse',
        Payload: JSON.stringify(input)
    };

    showLoadingForSlides();

    lambda.invoke(params, function(err, data) {
        //var result = document.getElementById('result');
        if (err) {
            console.log(err, err.stack);
            //result.innerHTML = err;
        } 
        else {
            /**
             * Initialize the inputs of form 
             * in order to post an image to s3 with a signed url.
             */

            /**  Commented out to resize the source image...
                var img = $('.file-upload-image')[0];
                if (img.naturalWidth > 2000 &&  img.naturalHeight > 1100) {
                    $('#imageSizeConfirm').click(function(e) {
                        $('#imageSizeAlert').modal('hide');
                        return;
                    });
                    $('#imageSizeAlert').modal('show');
                    return;
                }
            */
            var output = JSON.parse(data.Payload);
            $("#upload-form").attr('action', output.body.url);
            $("#upload-form > input[name^='key']").val(output.body.fields['key']);
            $("#upload-form > input[name^='x-amz-credential']").val(output.body.fields['x-amz-credential']);
            $("#upload-form > input[name^='x-amz-date']").val(output.body.fields['x-amz-date']);
            $("#upload-form > input[name^='policy']").val(output.body.fields['policy']);
            $("#upload-form > input[name^='x-amz-signature']").val(output.body.fields['x-amz-signature']);

            var uploadForm = $('#upload-form');
            var formData = new FormData($('form')[0]);

            /**
             *  Upload an image through Ajax.. using event driven way.
             */
            uploadForm.submit(function (e) {
        
                e.preventDefault();

                $.ajax({
                    type: uploadForm.attr('method'),
                    url: uploadForm.attr('action'),
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        /**
                         *  Showing the images to be cartoonized.
                         */
                        showImagesToBeCartoonized(paramFilename);
                    },
                    error: function (data) {
                        console.log('[debug] An error occurred.');
                        console.log('[debug] = %s',JSON.stringify(data));
                        console.log('[debug] filename = %s',filename);
                        /**
                         * Whenever the S3 or lambda has a long break time,
                         * 'Net error' occurs..
                         */
                        if (retry > 0) {
	                        sleep(1000).then(() => {
	                            postImagesForCartoon(filename, --retry);
	                        });
                        } else {
                        	showDefaultForSlides();
                            $('#netErrorConfirm').click(function(e) {
                                $('#netErrorAlert').modal('hide');
                                postImagesForCartoon(filename, 0);
                                return;
                            });
                            $('#netErrorAlert').modal('show');
                        }
                    },
                });
            });

            $("#upload-form > input[name^='submit']").click();
        }
    });

}
