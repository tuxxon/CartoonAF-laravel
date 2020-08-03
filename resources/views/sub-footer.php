                <footer class="bottom">
                    <div class="container">
                        <p class="btm-info1">ⓒ터치즌 2020. All Rights Reserved. </p>
                        <ul class="btm-info2">
                            <li>
                                <a href="/privacy" target="_blank">Privacy</a>
                            </li>
                            <li>
                                <a href="https://touchizen.com" target="_blank">Touchizen</a>
                            </li>
                            <!-- 
                            <li class="list-inline-item">
                                <a href="https://www.youtube.com/channel/UCHTNaLtro_1I6Y3SSywo3Cg">FAQ</a>
                            </li> 
                            -->
                        </ul>
                    </div>
                </footer>

	            <!-- Modal -->
	            <div class="modal fade" id="adModal" tabindex="-1" role="dialog" aria-labelledby="adModalLabel" aria-hidden="true">
	                <div class="modal-dialog" role="document">
	                    <div class="modal-content">
	                        <div class="modal-header">
	                            <h5 class="modal-title" id="adModalLabel">(AD)광고 - 재시도를 한번 더 눌러주세요.</h5>
	                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                                <span aria-hidden="true">&times;</span>
	                            </button>
	                        </div>
	                        <div class="modal-body d-flex justify-content-center">
	                            <ins class = "kakao_ad_area" 
	                                style = "display:none;" 
	                                data-ad-unit    = "DAN-1hv2pzoqnnx2s" 
	                                data-ad-width   = "300" 
	                                data-ad-height  = "250">
	                            </ins>
	                        </div>
	                        <div class="modal-footer d-flex justify-content-center">
	                            <button type="button p-2" class="try-again-btn" onclick="gaReload2();">
	                                <span class="try-again-text"><em>다른 사진으로 재시도</em><i class="fas fa-undo"></i></span>
	                            </button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <script>
	                function gaReload1() {
	                    gtag('event', '다른 사진으로 재시도 1차', {
	                        'event_category': '다른 사진으로 재시도'
	                    });
	                }
	                function gaReload2() {
	                    gtag('event', '다른 사진으로 재시도 2차', {
	                        'event_category': '다른 사진으로 재시도'
	                    });
	                    localStorage.clear();
	                    window.location.href = "/";
	                }
	            </script>

            </div> <!-- End of content -->
            <!-- Dark Overlay element -->
            <div class="overlay"></div>
        </div> <!-- End of wrapper -->

         <!-- Optional JavaScript -->
        <script type="text/javascript" src="https://t1.daumcdn.net/kas/static/ba.min.js" async></script>

        <script>
            /**
            *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
            *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
            */
    
            var disqus_config = function () {
                this.page.url = "https://cartoonaf.com/";  // Replace PAGE_URL with your page's canonical URL variable
                this.page.identifier = "cartoonaf_grayimage"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            
            (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://codingtrip.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

        <!-- bootstrap number spinner -->
        <script src="/js/bootstrap-input-spinner.min.js" type="text/javascript"></script>

        <!-- jQuery Custom Scroller CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
 
        <!-- for AWS API Gateway.. -->
        <script type="text/javascript" src="/lib/axios/dist/axios.standalone.js"></script>
        <script type="text/javascript" src="/lib/CryptoJS/rollups/hmac-sha256.js"></script>
        <script type="text/javascript" src="/lib/CryptoJS/rollups/sha256.js"></script>
        <script type="text/javascript" src="/lib/CryptoJS/components/hmac.js"></script>
        <script type="text/javascript" src="/lib/CryptoJS/components/enc-base64.js"></script>
        <script type="text/javascript" src="/lib/url-template/url-template.js"></script>
        <script type="text/javascript" src="/lib/apiGatewayCore/sigV4Client.js"></script>
        <script type="text/javascript" src="/lib/apiGatewayCore/apiGatewayClient.js"></script>
        <script type="text/javascript" src="/lib/apiGatewayCore/simpleHttpClient.js"></script>
        <script type="text/javascript" src="/lib/apiGatewayCore/utils.js"></script>
        <script type="text/javascript" src="/js/apigClient.js"></script>

        <!-- aws sdk -->
        <script type="text/javascript" src="https://sdk.amazonaws.com/js/aws-sdk-2.686.0.min.js"></script>

        <!-- To cartoonize an image-->
        <script src="/js/fullimage.js"></script>

        <!-- Go to www.addthis.com/dashboard to customize your tools --> 
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ec37f060eca1146"></script> 

    </body>

</html>