 $.fnSave = function () {
        let tmp;
        let rtnMsg = "";
        if (listData4Reg.size === 0) {
            alert("변경된 내용이 없습니다");
            return false;
        } else {
            for (let key of listData4Reg.keys()) {
                tmp = listData4Reg.get(key);
                if (tmp.CU_EVENT_DP_NM === "") {
                    alert("이벤트 명을 입력해 주십시오.");
                    return false;
                }
                if (tmp.ORG_NO === "") {
                    alert("행사 매장을 선택해 주십시오.");
                    return false;
                }
                if (tmp.ST_DTM === "" || tmp.ED_DTM === "") {
                    alert("이벤트 기간을 선택해주세요.")
                    return false;
                } else if (tmp.ED_DTM < tmp.ST_DTM) {
                    alert("이벤트 종료일이 시작일 보다 빠를 수 없습니다.");
                    return false;
                }
                if (tmp.USE_YN === "") {
                    alert("사용여부를 선택해주세요.");
                    return false;
                }
                if (tmp.ITEM_CD === "") {
                    alert("증정상품을 선택해주세요");
                    return false;
                }
                if (tmp.SIMPL_DESC === "") {
                    alert("이벤트 관련 설명을 작성해주세요.");
                    return false;
                }
                if (tmp.GIVE_CNT === "") {
                    alert("증정수량을 입력해주세요");
                    return false;
                }
            }



                if ($.gfnConfirmSave()) {

                    for (let key of listData4Reg.keys()) {
                        let tmp = listData4Reg.get(key);
                        let url;
                        let objParam = "";
                        let evtOrgParam = "";
                        let evtGiftParam = "";


                    //ins, upd 공통데이터 생성
                    objParam = {
                        CU_EVENT_DP_NM: tmp.CU_EVENT_DP_NM
                        , CU_EVENT_SUBSCRIPTION_TP: default_cuEvtSubTp
                        , CU_BNF_TP: default_cuBntTp
                        , ST_DTM: tmp.ST_DTM
                        , ED_DTM: tmp.ED_DTM
                        , USE_YN: cboUseYn
                        , SIMPL_DESC: tmp.SIMPL_DESC
                        , ORG_CU_EVENT_YN: cd4ORG_CU_EVENT_YN
                        , ORDER_NO: txtOrderNo
                    }

                    evtOrgParam = {
                        ORG_ST_DTM: tmp.ST_DTM
                        , ORG_ED_DTM: tmp.ED_DTM
                        , ORG_NO: tmp.ORG_NO
                        , NOTE: tmp.SIMPL_DESC
                    }

                    evtGiftParam = {
                        ITEM_CD: tmp.ITEM_CD
                        , GIVE_CNT: tmp.GIVE_CNT
                        , UNIT_CD: "1"
                        , ORDER_NO: txtOrderNo
                        , NOTE: tmp.SIMPL_DESC
                    }

                    if (tmp.CRUD_FLAG === "C") {
                        url = "/pmgr/pmpt/insertNewCuEvent.json";

                        objParam.CU_EVENT_TP = cd4NewCustomerEvt;
                        objParam.ORG_CU_EVENT_YN = cd4ORG_CU_EVENT_YN;
                        objParam.evtOrgParam = JSON.stringify(evtOrgParam);
                        objParam.evtGiftParam = JSON.stringify(evtGiftParam);

                    } else if (tmp.CRUD_FLAG === "U") {
                        url = "/pmgr/pmpt/updateNewCuEvent.json";
                        objParam.CU_EVENT_NO = tmp.CU_EVENT_NO;
                        evtGiftParam.CU_EVENT_NO = tmp.CU_EVENT_NO;
                        evtOrgParam.CU_EVENT_NO = tmp.CU_EVENT_NO;

                        // objParam.ORDER_NO = txtOrderNo;
                        evtOrgParam.USE_YN = cboUseYn;
                        objParam.evtGiftParam = JSON.stringify(evtGiftParam);
                        objParam.evtOrgParam = JSON.stringify(evtOrgParam);
                    } else {
                        alert("수정불가능한 자료 포함")
                        //R 혹은 D
                    }
                    $.callAjax(url, null, objParam, null, null, function (data) {
                        if (data.RESULT_MAP.RTN === "N" && rtnMsg==="") {
                            rtnMsg = data.RESULT_MAP.MSG;
                            console.log("rtnMsg : ",rtnMsg)
                        } else {
                            if (data.RESULT_MAP.ERR_CD === "SUCCESS"&& rtnMsg==="") {
                                rtnMsg = data.RESULT_MAP.ERR_MSG;
                                // console.log("rtnMsg for문안에서 : ",rtnMsg)
                                $.fnSearch()
                            }
                        }
                    });
                }
            }
        }
    }
