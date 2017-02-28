<?php 
require_once "WxPay/WxPay.JsApiPay.php";
require_once "WxPay/JsSdk/jssdk.php";
$jssdk = new JSSDK("wxf11f2ddbbad15ac4", "8e73b95838eb36e6d86b1aaa2c9fe0f3");
$signPackage = $jssdk->GetSignPackage();

$openId = 'oH0suwGYLc22iniWUCf7S2H_Q_2c';
$openId2 = 'oH0suwGYLc22iniWUCf7S2H_Q_2c';
$tools = new JsApiPay();
$openId2 = $tools->GetOpenid();
function getHttpContent($url, $method = 'POST', $postData = array())
{
    $data = '';
    if (!empty($url)) {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30); //30秒超时
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            //curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_jar);
            if (strtoupper($method) == 'POST') {
                $curlPost = is_array($postData) ? http_build_query($postData) : $postData;
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
            }
            $data = curl_exec($ch);
            curl_close($ch);
        } catch (Exception $e) {
            $data = null;
        }
    }
    return $data;
}
$url = '***';
$jsApiParameters = getHttpContent($url);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="/lightTime_resource/dist/libs/flexible.js"></script>
    <script src="/lightTime_resource/dist/libs/weixin.js"></script>
    <script>

                        wx.config({         //配置jssdk
                            debug: false,
                            appId: '<?php echo $signPackage["appId"];?>',
                            timestamp: <?php echo $signPackage["timestamp"];?>,
                            nonceStr: '<?php echo $signPackage["nonceStr"];?>',
                            signature: '<?php echo $signPackage["signature"];?>',
                            jsApiList: [
                                "chooseImage",
                                "previewImage",
                                "uploadImage",
                                "downloadImage"
                            ]
                        });


    </script>

    <script type="text/javascript">
//调用微信JS api 支付
function jsApiCall(param)
{
	alert(JSON.stringify(param));
	WeixinJSBridge.invoke(
		'getBrandWCPayRequest',
		param,
		function(res){
			WeixinJSBridge.log(res.err_msg);
			alert(res.err_code+res.err_desc+res.err_msg);
		}
	);
}

function callpay(param)
{
	if (typeof WeixinJSBridge == "undefined"){
	    if( document.addEventListener ){
	        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
	    }else if (document.attachEvent){
	        document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
	        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
	    }
	}else{
	    jsApiCall(param);
	}
}
</script>
<script type="text/javascript">
	const openid = "<?php echo $openId.'a'; ?>";
	const openid2 = "<?php echo $openId2.'a'; ?>";
	alert(openid);
	alert(openid2);
</script>
<title></title>
</head>


<body>

<div id="light_time">
	<loadpart v-show="showLoading"></loadpart>
    <router-view></router-view>
</div>

<script src="/lightTime_resource/dist/libs/vue.min.js"></script>
<script src="/lightTime_resource/dist/js/common.js"></script>
<script src="/lightTime_resource/dist/js/build.js"></script>
</body>
</html>

