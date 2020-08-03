
            <section class="section text-center">
                <div class="container">
                    <h2 class="subtitle">얼굴로 해보는 카툰화와<br/>인공지능 동물상 테스트</h2>
                    <h2 class="sr-only">나는 어떤 동물과 닮았을까? 나의 동물상 찾기를 해보세요!</h2>
                    <h3 class="sr-only">이 앱은 조코딩의 동물상 테스트를 개선해서, 카툰화와 대표 동물상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다.</h3>
                    <h4 class="sr-only">본 서비스는 Google의 인공지능 teachable machine 2.0을 활용하였습니다.</h4>
                    <p class="sr-only">사진 카투화와 얼굴로 해보는 인공지능 동물상 테스트, 자신의 사진을 카툰화 해서 프로필 사진으로 보여주세요. 또한, 나와 닮은 동물상을 찾아보세요! 대표 동물상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다. 카툰화시, 서버로 사진이 전송되어 저장될 수 있습니다. 인공지능이 보는 나의 동물상 테스트 한번 해보세요! 강아지상? 고양이상? 여우상? 사슴상? 토끼상? 곰상? 공룡상? 얼굴상 테스트를 통해 나와 닮은 동물 찾기를 할 수 있습니다.</p>
                </div>
            </section>
       
            <div class="container">
                <div class="select-box">
                    <section class="text-center">
                        <h3 class="gender-msg d-flex justify-content-center">성별 선택</h3> 
                    </section>
                    <section class="d-flex justify-content-center">
                        <p class="d-flex align-items-center pr-3">여자</p>
                        <div>
                            <input type="checkbox" id="gender">
                            <label for="gender"><span class="knob"><i></i></span></label>
                        </div>
                        <p class="d-flex align-items-center pl-3">남자</p>
                    </section>
                </div>
            </div>

            <div class="mt-3 container file-upload">
                <!-- choiuna -->
                <div class="image-upload-wrap">
                    <form id="upload-form" action="{action_url}" method="POST" enctype="multipart/form-data">
                        <!-- Copy the 'fields' key:values returned by S3Client.generate_presigned_post() -->
                        <input type="hidden" name="key" value="{key}" />
                        <input type="hidden" name="x-amz-algorithm" value="AWS4-HMAC-SHA256" />
                        <input type="hidden" name="x-amz-credential" value="{credential}" />
                        <input type="hidden" name="x-amz-date" value="{date}" />
                        <input type="hidden" name="policy" value="{policy}" />
                        <input type="hidden" name="x-amz-signature" value="{signature}" />
                        <input type="file"   name="file"  class="file-upload-input" onchange="readURL(this);" accept="image/*" />
                        <input type="submit" name="submit" value="" class="invisible" />
                    </form>
                    <!--input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" /-->
                    <div class="drag-text">
                        <img src="img/upload.svg" class="upload">
                        <h3 class="mb-5 pt-4  upload-text">얼굴 사진을 올려놓거나 눌러서 업로드하세요!</h3>
                    </div>
                </div>
                <div class="file-upload-content">
                    <p class="result-msg">테스트 결과</p>
                    <img class="file-upload-image" id="face-image" src="#" alt="your image"/>
                    <div id="loading" class="animated bounce">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <p class="text-center ai-msg">AI가 당신의 동물상을 분석중입니다.</p>
                    </div>

                     <!-- fixed menu -->
                    <div class="fixed-menu-kit">
                        <div class="inner-box">
                            <div class="inner-button"> 
                                <!-- 카툰화 이미지 그룹 -->
                                <div class="cartoon-img-box">
                                    <div class="flex-box">
                                        <a id="grayHref" class="flex-target" href="detail.html">
                                            <div id="grayImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>Gray</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="edgePreservingHref" class="flex-target" href="detail.html">
                                            <div id="edgePreservingImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>edge preserving</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="detailEnhanceHref" class="flex-target" href="detail.html">
                                            <div id="detailEnhanceImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>detail enhance</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="stylizationHref" class="flex-target" href="detail.html">
                                            <div id="stylizationImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>stylization</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="normalCartoonHref" class="flex-target" href="detail.html">
                                            <div id="normalCartoonImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>Normal</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="cartoonBasicHref" class="flex-target" href="detail.html">
                                            <div id="cartoonBasicImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>Basic</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="cartoonLiteHref" class="flex-target" href="detail.html">
                                            <div id="cartoonLiteImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>Lite</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="pencilSketchGrayHref" class="flex-target" href="detail.html">
                                            <div id="pencilSketchGrayImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>Pencil Sketch in Gray</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="pencilSketchColorHref" class="flex-target" href="detail.html">
                                            <div id="pencilSketchColorImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>Pencil Sketch in Color</p>
                                    </div>
                                    <div class="flex-box">
                                        <a id="sketchifyHref" class="flex-target" href="detail.html">
                                            <div id="sketchifyImage" style="background-image:url('img/default-image.png');"></div>
                                        </a>
                                        <p>Sketchify</p>
                                    </div>
                                </div>
                                <!-- 재시도 버튼 -->
                                <button type="button p-2" class="try-again-btn" onclick="gaReload1();" data-toggle="modal" data-target="#adModal">
                                    <span class="try-again-text"><em>다른 사진으로 재시도</em><i class="fas fa-undo"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                   
                    <p class="result-message"></p>
                    <div id="label-container" class="d-flex flex-column justify-content-around"></div>
                    <!-- Go to www.addthis.com/dashboard to customize your tools -->
                    <div class="tlb-top addthis_inline_share_toolbox_gh8z"></div>
                    <div class="mt-2 container d-flex justify-content-center ad-banner">
				        <ins class="kakao_ad_area" 
				             style="display:none;" 
				             data-ad-unit="DAN-1k1xam0r7e241" 
				             data-ad-width="320" 
				             data-ad-height="100">
				        </ins>
				    </div>
				    <div class="mt-2 container d-flex justify-content-center ad-banner">
				        <ins class="kakao_ad_area" style="display:none;" 
				            data-ad-unit    = "DAN-1hv2pzoqnnx2s" 
				            data-ad-width   = "300" 
				            data-ad-height  = "250">
				        </ins>
				    </div>
                </div>
                <!--// choiuna -->
            </div>

            <div class="container pt-3">
                <div id="disqus_thread"></div>
            </div>
