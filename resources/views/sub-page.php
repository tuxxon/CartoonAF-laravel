                <section>  
                    <div class="detail-wrap">
                        <div class="inner-wrap">
                            <div class="container">

                                <!-- 카툰 이미지 -->
                                <div class="ctn-img-box">
                                    <div>
                                        <div class="ct-left-btn">
                                            <button type="button" class="btn" onclick="<?php echo $prevServiceUri ?>"><i class="fas fa-chevron-circle-left"></i></button>
                                        </div>
                                        <div class="ct-img-area">
                                            <img id="fullImage" class = "show-full-image" 
                                 			src="https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/<?php echo $imageUri ?>" 
                                            onerror="javascript:src='https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg'" 
                                            />
                                        </div>
                                        <div class="ct-right-btn">
                                            <button type="button" class="btn" onclick="<?php echo $nextServiceUri ?>"><i class="fas fa-chevron-circle-right"></i></button>
                                        </div>
                                    </div>
                                    <div id="imageConversion" class="my-3" style="text-align:center;width:100%;height:100%;display:none;">
                                        <div class="spinner-border text-primary my-auto" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- 카툰 라벨 -->
                                <div class="cartoon-title">
                                    <h2 class="cartoon-sub-tit " id="filtertitle"><?php echo $filterTitle; ?></h2>
                                </div>

                                <!-- 카툰 변환 그룹 -->
                                <div class="cartoon-area">
                                    <div class="cartoon-group">
                                        <div id="paramTitle0" class="cartoon-label">
                                            <p>Flags</p>
                                        </div>
                                        <div id="paramNumber0" class="cartoon-value">
                                            <input id="inputNumber0" type="number" value="4.5" data-decimals="2" min="0" max="9" step="0.1" />
                                        </div>
                                    </div>
                                    <div class="cartoon-group">
                                        <div id="paramTitle1" class="cartoon-label">
                                            <p>Sigma_s</p>
                                        </div>
                                        <div id="paramNumber1" class="cartoon-value">
                                            <input id="inputNumber1" type="number" value="4.5" data-decimals="2" min="0" max="9" step="0.1" />
                                        </div>
                                    </div>
                                    <div class="cartoon-group">
                                        <div id="paramTitle2" class="cartoon-label">
                                            <p>Sigma_r</p>
                                        </div>
                                        <div id="paramNumber2" class="cartoon-value">
                                            <input id="inputNumber2"  type="number" value="4.5" data-decimals="2" min="0" max="9" step="0.1" />
                                        </div>
                                    </div>
                                </div>

                                <!-- 카툰 버튼 그룹 -->
                                <div class="cartoon-btns">
                                    <div id="downloadBtnArea" class="ctn-btn">
                                        <a id="downloadBtn" type="button" class="btn cBtns clr1" href="https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/<?php echo $imageUri ?>">
                                            <i class="fas fa-download"></i>
                                        </a>
                                        <p>다운로드</p>
                                    </div>
                                    <div id="initBtnArea" class="ctn-btn">
                                        <button id="initBtn" type="button" class="btn cBtns clr2">
                                            <i class="fas fa-undo"></i>
                                        </button>
                                        <p>되돌리기</p>
                                    </div>
                                    <div id="confirmBtnArea" class="ctn-btn">
                                        <button id="confirmBtn" type="button" class="btn cBtns clr3">
                                            <i class="fas fa-check"></i>
                                        </button>
                                        <p>변환 적용</p>
                                    </div>
                                </div>
                                <div class="row justify-content-md-center">
                                    <div id="addThis" class="addthis_inline_share_toolbox_6lz1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 재시도 버튼 -->
                <div class="fixed-try-btn"> 
                    <button type="button p-2" class="try-again-btn" onclick="gaReload1();" data-toggle="modal" data-target="#adModal">
                        <span class="try-again-text"><em>다른 사진으로 재시도</em><i class="fas fa-undo"></i></span>
                    </button>
                </div>

                <div class="modal-body d-flex justify-content-center">
                    <ins class = "kakao_ad_area"
                        style = "display:none;"
                        data-ad-unit    = "DAN-1jyg21q34s7qv"
                        data-ad-width   = "300"
                        data-ad-height  = "250">
                    </ins>
                </div>

                <div class="container pt-3">
                    <div id="disqus_thread"></div>
                </div>
