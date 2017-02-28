<?php

//设置报错级别，忽略警告，设置字符
//ini_set("display_errors", "On");
//error_reporting(E_ALL | E_STRICT);
header("Content-type:text/html; charset=utf-8");
require_once "jssdk.php";
$jssdk = new JSSDK("wxf11f2ddbbad15ac4", "8e73b95838eb36e6d86b1aaa2c9fe0f3");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--因为在手机中，所以添加viewport-->
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <title>微信测试</title>
</head>
<body>  
<button id="weixin" style="display: block;margin: 2em auto">微信接口测试</button>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  wx.config({
    debug: false, //调试阶段建议开启
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
           /*
            * 所有要调用的 API 都要加到这个列表中
            * 这里以图像接口为例
            */
          "chooseImage",
          "previewImage",
          "uploadImage",
          "downloadImage",
          'scanQRCode',
        'chooseWXPay'
    ]
  });
</script>
<script src="js/index.js"></script>
</body>
</html>